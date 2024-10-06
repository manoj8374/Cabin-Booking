import {waitFor} from '@testing-library/react'
import {screen, render, fireEvent, act} from "../../../test.utils"

import UpdateProfile from "./index";
import fetchApi from "../../Utils/fetchDetails";
import { url } from '../../Utils';
import { useNavigate } from 'react-router-dom';

jest.mock('../../Utils/fetchDetails')

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom') as any,
    useNavigate: jest.fn(),
}))

describe("UpdateProfile Component Testing", ()=>{
    const mockNavigate = jest.fn()
    const renderComponent = ()=>{
        return render(
            <UpdateProfile />
        )
    }

    beforeEach(()=>{
        jest.useFakeTimers();
        (useNavigate as jest.Mock).mockReturnValue(mockNavigate)
    })

    test("if component is rendering properly", ()=>{
        renderComponent()
    })

    test("if values are changing properly", ()=>{
        renderComponent()
        const firstName = screen.getByPlaceholderText("First Name") as HTMLInputElement
        const lastName = screen.getByPlaceholderText("Last Name") as HTMLInputElement
        const teamName = screen.getByPlaceholderText("Team Name") as HTMLInputElement
        const contactNumber = screen.getByPlaceholderText("Contact number") as HTMLInputElement

        fireEvent.change(firstName, {target: {value: "Manoj"}})
        fireEvent.change(lastName, {target: {value: "Vakiti"}})
        fireEvent.change(teamName, {target: {value: "NIAT"}})
        fireEvent.change(contactNumber, {target: {value: "9876543210"}})
    }) 

    test("if update profile button is working for correct inputs", async()=>{
        (fetchApi as jest.Mock).mockResolvedValue({success: true})

        renderComponent()
        const firstName = screen.getByPlaceholderText("First Name") as HTMLInputElement
        const lastName = screen.getByPlaceholderText("Last Name") as HTMLInputElement
        const teamName = screen.getByPlaceholderText("Team Name") as HTMLInputElement
        const contactNumber = screen.getByPlaceholderText("Contact number") as HTMLInputElement

        fireEvent.change(firstName, {target: {value: "Manoj"}})
        fireEvent.change(lastName, {target: {value: "Vakiti"}})
        fireEvent.change(teamName, {target: {value: "NIAT"}})
        fireEvent.change(contactNumber, {target: {value: "9876543210"}})

        const button = screen.getByTestId("update-profile-button") as HTMLButtonElement
        fireEvent.click(button)

        await waitFor(() => {
            expect(fetchApi).toHaveBeenCalledWith(`${url}/user/profile_update/v1`, expect.any(Object))
            expect(screen.getByText("Profile Updated Successfully")).toBeInTheDocument()
        })

        jest.advanceTimersByTime(5000);
        expect(mockNavigate).toHaveBeenCalledWith('/')
    })

    test("if error message is seen for empty fields", async()=>{
        renderComponent()
        const firstName = screen.getByPlaceholderText("First Name") as HTMLInputElement

        fireEvent.change(firstName, {target: {value: ""}})
        const button = screen.getByTestId("update-profile-button") as HTMLButtonElement
        fireEvent.click(button)
        expect(screen.getByText("Please fill all the fields")).toBeInTheDocument()
    })

    test("if error message is seen if success is false", async()=>{
        (fetchApi as jest.Mock).mockResolvedValue({success: false, data: {error_message: "Error"}})

        renderComponent()
        const firstName = screen.getByPlaceholderText("First Name") as HTMLInputElement
        const lastName = screen.getByPlaceholderText("Last Name") as HTMLInputElement
        const teamName = screen.getByPlaceholderText("Team Name") as HTMLInputElement
        const contactNumber = screen.getByPlaceholderText("Contact number") as HTMLInputElement

        fireEvent.change(firstName, {target: {value: "Manoj"}})
        fireEvent.change(lastName, {target: {value: "Vakiti"}})
        fireEvent.change(teamName, {target: {value: "NIAT"}})
        fireEvent.change(contactNumber, {target: {value: "9876543210"}})

        const button = screen.getByTestId("update-profile-button") as HTMLButtonElement
        fireEvent.click(button)

        await waitFor(() => {
            expect(fetchApi).toHaveBeenCalledWith(`${url}/user/profile_update/v1`, expect.any(Object))
            expect(screen.getByText("Failed to update profile. Please try again.")).toBeInTheDocument()
        }) 
    })

    test("if back button is working", ()=>{
        renderComponent()
        const button = screen.getByTestId("back-button")
        fireEvent.click(button)
        expect(mockNavigate).toHaveBeenCalledWith(-1)
    })

    test("if back button is working in mobile devices", ()=>{
        renderComponent()
        const button = screen.getByTestId("back-button-mobile")
        fireEvent.click(button)
        expect(mockNavigate).toHaveBeenCalledWith(-1)
    })
})