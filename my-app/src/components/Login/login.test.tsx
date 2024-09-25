import Login from ".";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Cookies from "js-cookie";
import { url } from "../../Utils";
import fetchApi from "../../Utils/fetchDetails";
import { useNavigate } from "react-router-dom";

jest.mock('js-cookie', () => ({
    set: jest.fn(),
    get: jest.fn(),
    remove: jest.fn()
}))

jest.mock('../../Utils/fetchDetails')

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom') as any,
    useNavigate: jest.fn(),
}))


describe("Login Component Testing", ()=>{
    const mockNavigate = jest.fn()
    const renderComponent = ()=>{
        return render(
            <MemoryRouter>
                <Login />
            </MemoryRouter>
        )
    }

    beforeEach(()=>{
        (useNavigate as jest.Mock).mockReturnValue(mockNavigate)
    })
    
    test("Check for heading, description", ()=>{
        renderComponent()
        expect(screen.getByTestId("login-heading")).toBeInTheDocument()
        expect(screen.getByTestId("login-description")).toBeInTheDocument()
    })

    test("Check if input elements are rendered properly", ()=>{
        renderComponent()
        expect(screen.getByPlaceholderText("Email")).toBeInTheDocument()
        expect(screen.getByPlaceholderText("Password")).toBeInTheDocument()
        expect(screen.getByTestId("login-button")).toBeInTheDocument()
    })

    test("Check if input elements are working properly", ()=>{
        renderComponent()
        const email = screen.getByPlaceholderText("Email") as HTMLInputElement
        const password = screen.getByPlaceholderText("Password") as HTMLInputElement
        fireEvent.change(email, {target: {value: "test@gmail.com"}})
        fireEvent.change(password, {target: {value: "test"}})
        expect(email.value).toBe("test@gmail.com")
        expect(password.value).toBe("test")
    })

    test("Check if login button is working for correct credentials", async()=>{
        (fetchApi as jest.Mock).mockResolvedValue({success: true, data: {access_token: "test", refresh_token: "test"}})

        renderComponent()
        const email = screen.getByPlaceholderText("Email") as HTMLInputElement
        const password = screen.getByPlaceholderText("Password") as HTMLInputElement

        fireEvent.change(email, {target: {value: "test@gmail.com"}})
        fireEvent.change(password, {target: {value: "test"}})

        const button = screen.getByTestId("login-button")
        fireEvent.click(button)
        
        await waitFor(() => {
            expect(Cookies.set).toHaveBeenCalledWith("access_token", "test")
            expect(Cookies.set).toHaveBeenCalledWith("refresh_token", "test")

            expect(fetchApi).toHaveBeenCalledWith(`${url}/user_account/login/v1`, expect.any(Object))
            expect(mockNavigate).toHaveBeenCalledWith('/')
        })
    })

    test("Check if login button is working for incorrect credentials", async()=>{
        (fetchApi as jest.Mock).mockResolvedValue({success: false, error: {error_message: "test"}})

        renderComponent()
        const email = screen.getByPlaceholderText("Email") as HTMLInputElement
        const password = screen.getByPlaceholderText("Password") as HTMLInputElement

        fireEvent.change(email, {target: {value: "test@gmail.com"}})
        fireEvent.change(password, {target: {value: "test"}})

        const button = screen.getByTestId("login-button")
        fireEvent.click(button)
        
        await waitFor(() => {
            expect(fetchApi).toHaveBeenCalledWith(`${url}/user_account/login/v1`, expect.any(Object))
            expect(screen.getByTestId("login-error")).toBeInTheDocument()
            expect(mockNavigate).not.toHaveBeenCalled()
        })
    })

    test("Check if forgot password redirection is working", ()=>{
        renderComponent()
        const forgotPassword = screen.getByTestId("forgot-password")
        expect(forgotPassword).toBeInTheDocument()
        expect(forgotPassword).toHaveAttribute("href", "/forgot-password");
    })

    test("Check if the login is working if the user is already logged in", ()=>{
        (Cookies.get as jest.Mock).mockReturnValue("dummy_token")
        
        renderComponent()
        expect(mockNavigate).toHaveBeenCalledWith('/')
    })

    test("Check if error is displayed if email or password is empty", ()=>{
        renderComponent()
        const email = screen.getByPlaceholderText("Email") as HTMLInputElement
        const password = screen.getByPlaceholderText("Password") as HTMLInputElement
        fireEvent.change(email, {target: {value: ""}})
        fireEvent.change(password, {target: {value: ""}})

        const button = screen.getByTestId("login-button")
        fireEvent.click(button)
        const errorMessage = screen.getByText("Please enter email and password")
        expect(errorMessage).toBeInTheDocument()
    })
})