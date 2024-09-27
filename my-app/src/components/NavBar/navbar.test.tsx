import React from "react";
import { screen, render, fireEvent } from "@testing-library/react";
import Navbar from "./index"
import { fetchUserProfile } from "../../Redux/userSlice";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { MemoryRouter, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

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

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom') as any,
    useNavigate: jest.fn(),
}))

jest.mock("js-cookie", () => ({
    set: jest.fn(),
    get: jest.fn(),
    remove: jest.fn()
}))


describe("Laptop NavBar Testing", ()=>{
    const mockNavigate = jest.fn()  
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
        (useNavigate as jest.Mock).mockReturnValue(mockNavigate)
        renderComponent()
        fireEvent.click(screen.getByTestId("myProfileButton"))
        const updateProfile = screen.getByRole("button", {name: "Update"})
        fireEvent.click(updateProfile)
        expect(mockNavigate).toHaveBeenCalledWith("/update-profile")
    })

    test("if logout button is working", ()=>{
        (useNavigate as jest.Mock).mockReturnValue(mockNavigate)
        renderComponent()
        const logoutButton = screen.getByTestId("logoutcontainer")
        fireEvent.click(logoutButton)
        expect(mockNavigate).toHaveBeenCalledWith("/login")
        expect(Cookies.remove).toHaveBeenCalledWith("access_token")
        expect(Cookies.remove).toHaveBeenCalledWith("refresh_token")
    })

    test("if view more navigation is working", ()=>{
        (useNavigate as jest.Mock).mockReturnValue(mockNavigate)
        renderComponent()
        const myBookingsButton = screen.getByTestId("myBookingsButton")
        fireEvent.click(myBookingsButton)

        const viewMore = screen.getByTestId("viewMoreButton")
        fireEvent.click(viewMore)
        expect(mockNavigate).toHaveBeenCalledWith("/my-bookings")
    })

    test("if myBookings and myProfile buttons are working properly", ()=>{
        renderComponent()

        const myBookingsButton = screen.getByTestId("myBookingsButton")
        fireEvent.click(myBookingsButton)

        expect(screen.getByTestId("myBookingsContainer")).toBeInTheDocument()
        expect(screen.queryByTestId("myProfileContents")).toBeNull()

        const myProfileButton = screen.getByTestId("myProfileButton")
        fireEvent.click(myProfileButton)

        expect(screen.getByTestId("myProfileContents")).toBeInTheDocument()
        expect(screen.queryByTestId("myBookingsContainer")).toBeNull()

    })

    test("if navbar closes on click outside the navbar", ()=>{
        renderComponent()
        fireEvent.click(document)
        expect(mockToogleNavBar).toHaveBeenCalledWith(false)
    })


})
