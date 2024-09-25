import Login from ".";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

describe("Login Component Testing", ()=>{
    const renderComponent = ()=>{
        return render(
            <MemoryRouter>
                <Login />
            </MemoryRouter>
        )
    }
    
    test("Check for heading, description", ()=>{
        renderComponent()
        expect(screen.getByTestId("login-heading")).toBeInTheDocument()
        expect(screen.getByTestId("login-description")).toBeInTheDocument()
    })

    test("Check if input elements are rendered properly", ()=>{
        renderComponent()
        expect(screen.getByPlaceholderText("Email")).toBeInTheDocument()
        expect(screen.getByPlaceholderText("Password")).toBeInTheDocument()
    })
})