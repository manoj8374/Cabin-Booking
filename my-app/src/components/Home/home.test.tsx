import {screen, render, fireEvent, act} from "../../../test.utils"
import { configureStore } from "@reduxjs/toolkit"
import Home from "./index"
import * as getUserDetails from "../../apiCalls/userdetails"

describe("Home Component Testing", ()=>{
    // const getUserDetailsSpyFn = jest.spyOn(getUserDetails, 'getUserDetails')
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

    test("if laptop navbar is working properly", ()=>{
        renderComponent()
        const laptop = screen.getByTestId("laptop-navbar-button")
        expect(screen.queryByTestId("laptop-navbar-container")).not.toBeNull()

        fireEvent.click(laptop)
        expect(screen.getByTestId("laptop-navbar-container")).toBeInTheDocument()
    })

    
    
})