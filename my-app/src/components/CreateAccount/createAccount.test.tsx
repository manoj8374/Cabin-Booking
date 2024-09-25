import { MemoryRouter } from "react-router-dom";
import { render, fireEvent, screen, waitFor} from "@testing-library/react";
import CreateAccount from "./index";
import fetchApi from "../../Utils/fetchDetails";
import { url } from "../../Utils";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

jest.mock('../../Utils/fetchDetails')

jest.mock('js-cookie', () => ({
    set: jest.fn(),
    get: jest.fn(),
    remove: jest.fn()
}))

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom') as any,
    useNavigate: jest.fn(),
}))

describe("Create Account Component Testing", ()=>{
    const mockNavigate = jest.fn()
    const renderComponent = ()=>{
        return render(
            <MemoryRouter>
                <CreateAccount/>
            </MemoryRouter>
        )
    }

    beforeEach(()=>{
        (useNavigate as jest.Mock).mockReturnValue(mockNavigate)
    })

    test("if heading, description and input elements are rendered", ()=>{
        renderComponent()
        expect(screen.getByTestId("create-account-heading")).toBeInTheDocument()
        expect(screen.getByTestId("create-account-description")).toBeInTheDocument()
        expect(screen.getByPlaceholderText("Email")).toBeInTheDocument()
        expect(screen.getByPlaceholderText("Username")).toBeInTheDocument()
        expect(screen.getByPlaceholderText("Password")).toBeInTheDocument()
        expect(screen.getByPlaceholderText("Full Name")).toBeInTheDocument()
        expect(screen.getByPlaceholderText("Team Name")).toBeInTheDocument()
        expect(screen.getByPlaceholderText("Contact Number")).toBeInTheDocument()
    })

    test("if input elements are working properly", ()=>{
        renderComponent()
        const email = screen.getByPlaceholderText("Email") as HTMLInputElement
        const username = screen.getByPlaceholderText("Username") as HTMLInputElement
        const password = screen.getByPlaceholderText("Password") as HTMLInputElement
        const fullName = screen.getByPlaceholderText("Full Name") as HTMLInputElement
        const teamName = screen.getByPlaceholderText("Team Name") as HTMLInputElement
        const contactNumber = screen.getByPlaceholderText("Contact Number") as HTMLInputElement
        fireEvent.change(email, {target: {value: "test@gmail.com"}})
        fireEvent.change(username, {target: {value: "test"}})
        fireEvent.change(password, {target: {value: "test"}})
        fireEvent.change(fullName, {target: {value: "test test"}})
        fireEvent.change(teamName, {target: {value: "test"}})
        fireEvent.change(contactNumber, {target: {value: "9876543210"}})

        expect(email.value).toBe("test@gmail.com")
        expect(username.value).toBe("test")
        expect(password.value).toBe("test")
        expect(fullName.value).toBe("test test")
        expect(teamName.value).toBe("test")
        expect(contactNumber.value).toBe("9876543210")
    })

    test("if create account button is working for correct inputs", async()=>{
        (fetchApi as jest.Mock).mockResolvedValue({success: true, data: {access_token: "test", refresh_token: "test"}})

        renderComponent()
        const email = screen.getByPlaceholderText("Email") as HTMLInputElement
        const username = screen.getByPlaceholderText("Username") as HTMLInputElement
        const password = screen.getByPlaceholderText("Password") as HTMLInputElement
        const fullName = screen.getByPlaceholderText("Full Name") as HTMLInputElement
        const teamName = screen.getByPlaceholderText("Team Name") as HTMLInputElement
        const contactNumber = screen.getByPlaceholderText("Contact Number") as HTMLInputElement
        fireEvent.change(email, {target: {value: "test@gmail.com"}})
        fireEvent.change(username, {target: {value: "test"}})
        fireEvent.change(password, {target: {value: "test"}})
        fireEvent.change(fullName, {target: {value: "test test"}})
        fireEvent.change(teamName, {target: {value: "test"}})
        fireEvent.change(contactNumber, {target: {value: "9876543210"}})

        const button = screen.getByTestId("create-account-button") as HTMLButtonElement
        fireEvent.click(button)

        await waitFor(() => {
            expect(Cookies.set).toHaveBeenCalledWith("access_token", "test")
            expect(Cookies.set).toHaveBeenCalledWith("refresh_token", "test")
            expect(fetchApi).toHaveBeenCalledWith(`${url}/user_account/signup/v1`, expect.any(Object))  
            expect(mockNavigate).toHaveBeenCalledWith('/')
        })
    })

    test("if create account button is working for incorrect inputs", async()=>{
        (fetchApi as jest.Mock).mockResolvedValue({success: false, data: {error_message: "test"}})

        renderComponent()
        const email = screen.getByPlaceholderText("Email") as HTMLInputElement
        const username = screen.getByPlaceholderText("Username") as HTMLInputElement
        const password = screen.getByPlaceholderText("Password") as HTMLInputElement
        const fullName = screen.getByPlaceholderText("Full Name") as HTMLInputElement
        const teamName = screen.getByPlaceholderText("Team Name") as HTMLInputElement
        const contactNumber = screen.getByPlaceholderText("Contact Number") as HTMLInputElement
        fireEvent.change(email, {target: {value: "test@gmail.com"}})
        fireEvent.change(username, {target: {value: "test"}})
        fireEvent.change(password, {target: {value: "test"}})
        fireEvent.change(fullName, {target: {value: "test test"}})
        fireEvent.change(teamName, {target: {value: "test"}})
        fireEvent.change(contactNumber, {target: {value: "9876543210"}})

        const button = screen.getByTestId("create-account-button") as HTMLButtonElement
        fireEvent.click(button)

        await waitFor(() => {
            expect(Cookies.set).not.toHaveBeenCalled()
            expect(fetchApi).toHaveBeenCalledWith(`${url}/user_account/signup/v1`, expect.any(Object))
            expect(screen.getByTestId("create-account-error")).toBeInTheDocument()  
            expect(mockNavigate).not.toHaveBeenCalled()
        })
    })


    test("if create account button is working for empty inputs", async()=>{
        renderComponent()
        const button = screen.getByTestId("create-account-button") as HTMLButtonElement
        fireEvent.click(button)

        const textElement = screen.getByText("Please fill all the fields")
        expect(textElement).toBeInTheDocument()
    })

    test("if the user is already logged in", ()=>{
        (Cookies.get as jest.Mock).mockReturnValue("dummy_token")
        renderComponent()
        expect(mockNavigate).toHaveBeenCalledWith('/')
    })
})
