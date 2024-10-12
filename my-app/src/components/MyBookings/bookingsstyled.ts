import styled from "styled-components";
import { IoHomeOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";

export const MyBookingsContainer = styled.div`
    display: flex;
    flex-direction: column;
`
export const MyBookingsHeadingContainer = styled.div`
    display: flex;
    align-items: center;
    margin: auto;
    justify-content: space-between;
    margin-top: 24px;

    position: relative;
    width: 100%;

    @media screen and (max-width: 572px) {
        width: 95%;
    }
`

export const MyBookingsHeading = styled.h1`
    font-size: 28px;
    width: 100%;
    text-align: left;
    @media screen and (min-width: 768px) {
        order: 2;
        text-align: center;
        font-size: 40px;
    }
`

export const IconsContainer = styled.div`
    display: flex;
    gap: 24px;
    align-items: center;
    align-self: center;
    right: 0;
    position: absolute;

    

    @media screen and (min-width: 768px) {
        align-items: center;
        left: 50px;
        display: none;
    }
`

export const MyBookingsSubContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 90%;
    margin: auto;
`

export const FiltersContainer = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    margin: auto;
    justify-content: center;
    gap: 16px;
    margin-top: 40px;
`

export const FilterButton = styled.button<{isactive: boolean}>`
    background-color: ${({isactive})=> (isactive ? "#1F41BB" : "white")};
    border: ${({isactive})=> (isactive ? "none" : "1px solid #1F41BB")};
    font-size: 14px;
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    color: ${({isactive})=> (isactive ? "white" : "#1F41BB")};
    padding: 8px;
    border-radius: 8px;
    padding: 8px;
    padding-left: 12px;
    padding-right: 12px;

    @media screen and (min-width: 768px) {
        cursor: pointer;
        font-size: 18px;
    }

    @media screen and (min-width: 1024px) {
        cursor: pointer;
        font-size: 20px;
    }
`

export const UpcomingBookingsContainer = styled.ul`
    width: 85%;
    margin: auto;
    display: flex;
    padding: 0px;
    flex-direction: column;
    gap: 16px;
    padding-top: 32px;
    padding-bottom: 32px;

    @media screen and (min-width: 1024px) {
        flex-direction: row;
        flex-wrap: wrap;
        width: 95%;
        margin: auto;
    }

    @media screen and (min-width: 1440px) {
        width: 80%;
    }
`

export const HomeIconContainer = styled(IoHomeOutline)`
    font-size: 24px;
    color: #1F41BB;
    @media screen and (min-width: 768px) {
        order: 2;
        font-size: 32px;
        color: black;
        cursor: pointer;
    }
`

export const HamburgerContainer = styled(RxHamburgerMenu)`
    font-size: 32px;

    @media screen and (min-width: 768px) {
        display: none;
    }
`

export const NavBarContainer = styled(RxHamburgerMenu)`
    font-size: 32px;
    cursor: pointer;
`

export const NavBarContainerMain = styled.div`
    display: none;
    @media screen and (min-width: 768px) {
        display: block;
    }
`

export const NoBookingsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
    margin-top: 32px;
    height: 50vh;
    justify-content: center;
    @media screen and (min-width: 768px) {
        gap: 28px;
    }
    `

export const NoBookingsHeading = styled.h1`
    font-size: 24px;
    @media screen and (min-width: 768px) {
        font-size: 40px;
    }
`

export const BookNowButton = styled.button`
    background-color: #1F41BB;
    color: white;
    border: none;
    border-radius: 8px;
    padding: 8px;
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    font-weight: 500;
    width: 150px;

    @media screen and (min-width: 768px) {
        font-size: 18px;
        cursor: pointer;
    }
`