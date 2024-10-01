import {waitFor} from '@testing-library/react'
import {screen, render, fireEvent, act} from "../../../test.utils"

import ForgotPassword from "./index";
import fetchApi from "../../Utils/fetchDetails";
import { url } from '../../Utils';
import { useNavigate } from 'react-router-dom';

jest.mock('../../Utils/fetchDetails')

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom') as any,
    useNavigate: jest.fn(),
}))

describe("ForgotPassword Component Testing", ()=>{
    const mockNavigate = jest.fn()
    const renderComponent = ()=>{
        return render(
            <ForgotPassword />
        )
    }

    beforeEach(()=>{
        (useNavigate as jest.Mock).mockReturnValue(mockNavigate)
    })

    test("if component is rendering properly", ()=>{
        renderComponent()
    })

    test("if values are changing properly", ()=>{
        renderComponent()
        const email = screen.getByPlaceholderText("Enter your email") as HTMLInputElement
        const oldPassword = screen.getByPlaceholderText("Enter your old password") as HTMLInputElement
        const newPassword = screen.getByPlaceholderText("New password") as HTMLInputElement

        fireEvent.change(email, {target: {value: "test@gmail"}})
        fireEvent.change(oldPassword, {target: {value: "test"}})
        fireEvent.change(newPassword, {target: {value: "test"}})
        
        expect(email.value).toBe("test@gmail")
        expect(oldPassword.value).toBe("test")
        expect(newPassword.value).toBe("test")
    })

    test("if forgot password button is working properly", async()=>{
        (fetchApi as jest.Mock).mockResolvedValue({success: true})
        renderComponent()
        const forgotPassword = screen.getByTestId("forgot-password-button")
        const email = screen.getByPlaceholderText("Enter your email") as HTMLInputElement
        const oldPassword = screen.getByPlaceholderText("Enter your old password") as HTMLInputElement
        const newPassword = screen.getByPlaceholderText("New password") as HTMLInputElement

        fireEvent.change(email, {target: {value: "test@gmail"}})
        fireEvent.change(oldPassword, {target: {value: "test"}})
        fireEvent.change(newPassword, {target: {value: "test@8374"}})
        fireEvent.click(forgotPassword)

        await waitFor(() => {
            expect(fetchApi).toHaveBeenCalledWith(`${url}/user_accounts/update_password/v1`, expect.any(Object))
            expect(screen.getByText("Password Updated Successfully")).toBeInTheDocument()
        })
        
    })

    test("if both passwords are same", async()=>{
        renderComponent()
        const oldPassword = screen.getByPlaceholderText("Enter your old password") as HTMLInputElement
        const newPassword = screen.getByPlaceholderText("New password") as HTMLInputElement
        const email = screen.getByPlaceholderText("Enter your email") as HTMLInputElement
        fireEvent.change(oldPassword, {target: {value: "test"}})
        fireEvent.change(newPassword, {target: {value: "test"}})
        fireEvent.change(email, {target: {value: "test@gmail"}})
        
        const button = screen.getByTestId("forgot-password-button")
        fireEvent.click(button)

        await waitFor(() => {
            expect(fetchApi).not.toHaveBeenCalledWith(`${url}/user_accounts/update_password/v1`, expect.any(Object))
        })

        expect(screen.getByText("Same Password")).toBeInTheDocument()
    })

    test("if empty fields error is displayed", async()=>{
        renderComponent()
        const button = screen.getByTestId("forgot-password-button")
        fireEvent.click(button)
        
        await waitFor(() => {
            expect(fetchApi).not.toHaveBeenCalledWith(`${url}/user_accounts/update_password/v1`, expect.any(Object))
        })
        
        expect(screen.getByText("Please fill all the fields")).toBeInTheDocument()
    })

    test("if invalid password error is shown", async()=>{
        (fetchApi as jest.Mock).mockResolvedValue({success: false, data: {error_message: "Invalid Password"}})

        renderComponent()
        const oldPassword = screen.getByPlaceholderText("Enter your old password") as HTMLInputElement
        const newPassword = screen.getByPlaceholderText("New password") as HTMLInputElement
        const email = screen.getByPlaceholderText("Enter your email") as HTMLInputElement
        fireEvent.change(oldPassword, {target: {value: "test123"}})
        fireEvent.change(newPassword, {target: {value: "test"}})
        fireEvent.change(email, {target: {value: "test@gmail"}})
        
        const button = screen.getByTestId("forgot-password-button")
        fireEvent.click(button)

        await waitFor(() => {
            expect(fetchApi).toHaveBeenCalledWith(`${url}/user_accounts/update_password/v1`, expect.any(Object))
            expect(screen.getByText("Invalid Password")).toBeInTheDocument()
        })
        
    })

    test("when backarrow is clicked should navigate properly", ()=>{
        renderComponent()
        const backArrow = screen.getByTestId("back-arrow")
        fireEvent.click(backArrow)
        expect(mockNavigate).toHaveBeenCalledWith(-1)
    })
    
})