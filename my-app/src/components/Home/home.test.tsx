import {screen, render, fireEvent} from "../../../test.utils"
import { configureStore } from "@reduxjs/toolkit"
import Home from "./index"
import UserSlice from "../../Redux/userSlice"
import getUserDetails from "../../apiCalls/userdetails"

jest.mock('../../apiCalls/userdetails', ()=>({
    getUserDetails: jest.fn()
}))


describe("Home Component Testing", ()=>{

    const renderComponent = ()=>{
        return render(
            <Home />
        )
    }

    test("if home page is rendered", ()=>{
        renderComponent()
        expect(screen.getByTestId("home-container")).toBeInTheDocument()
    })

    test("if mobile navbar is rendered properly when the button is clicked", ()=>{
        renderComponent()
        const navBarIcon = screen.getByTestId("mobile-navbar-button")
        expect(navBarIcon).toBeInTheDocument()
        expect(screen.queryByTestId("mobile-pop-up")).toBeNull()
        
        fireEvent.click(navBarIcon)
        expect(screen.getByTestId("mobile-pop-up")).toBeInTheDocument()
    })

    test("if laptop nav is rendered properly when the button is clicked", ()=>{

    })

    test("if data is fetched properly on mount", ()=>{
        renderComponent()
        const mockUserData = {
            username: 'testuser',
            email: 'testuser@example.com',
            first_name: 'Test',
            last_name: 'User',
            team_name: 'Development',
            contact_number: '1234567890',
        };
        
        expect(getUserDetails).toHaveBeenCalled()
    })
})