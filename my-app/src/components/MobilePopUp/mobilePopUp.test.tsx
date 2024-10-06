import React from "react";
import { screen, render, fireEvent } from "@testing-library/react";
import MobilePopUpComponent from "./index"
import { fetchUserProfile } from "../../Redux/userSlice";
import { configureStore, createStore , applyMiddleware} from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";
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
            return { ...state, user: { ...state.user, isLoading: false } };
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
    const renderComponent = (store: any)=>{
        render(
            <MemoryRouter>
                <Provider store={store}>
                    <MobilePopUpComponent closePopUp ={mockToogleNavBar}/>
                </Provider>
            </MemoryRouter>  
        )
    }

    test("if navbar is rendered", ()=>{
        const store = createStore(mockReducer, {
            user: {
                email: '',
                username: '',
                first_name: '',
                last_name: '',
                team_name: '',
                contact_number: '',
                isLoading: false,
                error: false
            }
        }, applyMiddleware(thunk))

        renderComponent(store)
        expect(screen.getByTestId("mobile-pop-up")).toBeInTheDocument()
    })

    test("if the cross is clicked navbar should be hidden", ()=>{
        const store = createStore(mockReducer, {
            user: {
                email: '',
                username: '',
                first_name: '',
                last_name: '',
                team_name: '',
                contact_number: '',
                isLoading: false,
                error: false
            }
        }, applyMiddleware(thunk))

        renderComponent(store)
        const cross = screen.getByTestId("cancelButton")
        fireEvent.click(cross)
        expect(mockToogleNavBar).toHaveBeenCalledWith()
    })

    test("if update profile button is working", ()=>{
        (useNavigate as jest.Mock).mockReturnValue(mockNavigate)

        const store = createStore(mockReducer, {
            user: {
                email: '',
                username: '',
                first_name: '',
                last_name: '',
                team_name: '',
                contact_number: '',
                isLoading: false,
                error: false
            }
        }, applyMiddleware(thunk))

        renderComponent(store)
        fireEvent.click(screen.getByTestId("myProfileButton"))
        const updateProfile = screen.getByRole("button", {name: "Update profile"})
        fireEvent.click(updateProfile)
        expect(mockNavigate).toHaveBeenCalledWith("/update-profile")
    })

    test("if logout button is working", ()=>{
        (useNavigate as jest.Mock).mockReturnValue(mockNavigate)

        const store = createStore(mockReducer, {
            user: {
                email: '',
                username: '',
                first_name: '',
                last_name: '',
                team_name: '',
                contact_number: '',
                isLoading: false,
                error: false
            }
        }, applyMiddleware(thunk))

        renderComponent(store)
        const logoutButton = screen.getByTestId("logoutcontainer")
        fireEvent.click(logoutButton)
        expect(mockNavigate).toHaveBeenCalledWith("/login")
        expect(Cookies.remove).toHaveBeenCalledWith("access_token")
        expect(Cookies.remove).toHaveBeenCalledWith("refresh_token")
    })

    test("if view more navigation is working", ()=>{
        (useNavigate as jest.Mock).mockReturnValue(mockNavigate)

        const store = createStore(mockReducer, {
            user: {
                email: '',
                username: '',
                first_name: '',
                last_name: '',
                team_name: '',
                contact_number: '',
                isLoading: false,
                error: false
            }
        }, applyMiddleware(thunk))

        renderComponent(store)
        const myBookingsButton = screen.getByTestId("myBookingsButton")
        fireEvent.click(myBookingsButton)

        const viewMore = screen.getByTestId("viewMoreButton")
        fireEvent.click(viewMore)
        expect(mockNavigate).toHaveBeenCalledWith("/my-bookings")
    })

    test("if myBookings and myProfile buttons are working properly", ()=>{
        const store = createStore(mockReducer, {
            user: {
                email: '',
                username: '',
                first_name: '',
                last_name: '',
                team_name: '',
                contact_number: '',
                isLoading: false,
                error: true
            }
        }, applyMiddleware(thunk))

        renderComponent(store)

        const myBookingsButton = screen.getByTestId("myBookingsButton")
        fireEvent.click(myBookingsButton)

        expect(screen.getByTestId("viewMoreButton")).toBeInTheDocument()
        expect(screen.queryByTestId("myProfileContents")).toBeNull()

        const myProfileButton = screen.getByTestId("myProfileButton")
        fireEvent.click(myProfileButton)

        expect(screen.getByTestId("myProfileContents")).toBeInTheDocument()
        expect(screen.queryByTestId("viewMoreButton")).toBeNull()

    })
        
})

