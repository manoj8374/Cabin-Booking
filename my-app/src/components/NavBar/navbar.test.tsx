import React from "react";
import { screen, render, fireEvent } from "@testing-library/react";
import Navbar from "./index"
import { fetchUserProfile } from "../../Redux/userSlice";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";

const mockReducer = (state = {
    user: {
        email: '',
        username: '',
        first_name: '',
        last_name: '',
        team_name: '',
        contact_number: '',
        isLoading: false,
        error: false
    },
}, action: any) => {
    switch (action.type) {
        case fetchUserProfile.pending.type:
            return { ...state, user: { ...state.user, isLoading: true } };
        case fetchUserProfile.rejected.type:
            return { ...state, user: { ...state.user, isLoading: false, error: true } };
        case fetchUserProfile.fulfilled.type:
            return { ...state, user: { ...state.user, isLoading: false, username: "", email: "", first_name: "", last_name: "", team_name: "", contact_number: "" } };
        default:
            return state;
    }
}


describe("Laptop NavBar Testing", ()=>{
    const mockToogleNavBar = jest.fn()
    const renderComponent = ()=>{
        const store = configureStore({
            reducer: {
                user: mockReducer
            }
        })
        render(
            <MemoryRouter>
                <Provider store={store}>
                    <Navbar toogleNavbar={mockToogleNavBar} isNavBarVisible={true} laptopNavRef={React.createRef()}/>
                </Provider>
            </MemoryRouter>  
        )
    }

    test("if navbar is rendered", ()=>{
        renderComponent()
        expect(screen.getByTestId("laptop-navbar-container")).toBeInTheDocument()
    })

    test("if the cross is clicked navbar should be hidden", ()=>{
        renderComponent()
        const cross = screen.getByTestId("cancelButton")
        fireEvent.click(cross)
        expect(mockToogleNavBar).toHaveBeenCalledWith(false)
    })

    test("if update profile button is working", ()=>{
        renderComponent()
        fireEvent.click(screen.getByTestId("myProfileButton"))
        const updateProfile = screen.getByRole("button", {name: "Update"})
        fireEvent.click(updateProfile)
    })
})