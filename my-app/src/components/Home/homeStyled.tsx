import styled from 'styled-components'
import { IoIosArrowDown } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa";

export const HomeContainer = styled.div`
    min-height: 100vh;
    background-color: white;
    display: flex;
    flex-direction: column;
`

export const HomeContainerHeader = styled.div`
    width: 80%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-self: center;
    padding-top: 24px;
    align-items: center;
`

export const HomeSubContainer = styled.div`
    width: 90%;
    min-height: 90vh;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-self: center;
    padding-top: 24px;
    padding-bottom: 24px;
`

export const SelectDateHeading = styled.h1`
    font-family: 'Poppins', sans-serif;
    color: #1F41BB;
    font-weight: bolder;
    font-size: 28px;
`

export const MobilePopUp = styled.div<{ispopupvisible: boolean}>`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    z-index: 1000;
    min-height: 100vh;
    transition: opacity 0.3s ease-in-out;
    padding-top: 24px;
    opacity: ${({ispopupvisible}) => ispopupvisible ? 1 : 0};
`

export const MobilePopUpCloseButton = styled.button`
    position: absolute;
    top: 20px;
    right: 20px;
    border: none;
    background-color: transparent;
    cursor: pointer;
`

export const MobilePopUpSubContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    width: 90%;
    min-height: 85vh;
    background-color: #F1F4FF; 
    padding-top: 40px;
    position: relative;
    border-radius: 16px;
`

export const MobilePopUpHeadingContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    align-items: center;
`

export const MobileProfilePic = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 125px;
    height: 125px;
    background-color: white;
    border-radius: 100px;
    color: black;
    font-size: 40px;
`

export const MobilePopUpHeading = styled.h1`
    font-size: 24px;
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
`

export const MobilePopUpButtonsContainer = styled.div`
    width: 90%;
    display: flex;
    flex-direction: column;
    gap: 16px;
    align-items: center;
    margin-top: 24px;
`

export const MobilePopUpButtonSubContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: white;
    border-radius: 8px;
    padding-top: 16px;
    // padding-bottom: 16px;
`

export const MobilePopUpButton = styled.div`
    width: 90%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    height: fit-content;
    padding-bottom: 16px;
    align-items: center;
    background-color: white;
    border-radius: 8px;
`

export const ArrowDown = styled(IoIosArrowDown)`
    font-weight: 100;
`

export const ArrowDownMyProfile = styled(IoIosArrowDown)<{isprofileactive: boolean}>`
    font-weight: 100;
    transform: ${({isprofileactive}) => isprofileactive ? 'rotate(180deg)' : 'rotate(0deg)'}
`

export const ArrowDownMyBookings = styled(IoIosArrowDown)<{isbookingsactive: boolean}>`
    font-weight: 100;
    transform: ${({isbookingsactive}) => isbookingsactive ? 'rotate(180deg)' : 'rotate(0deg)'}
`


export const SideArrow = styled(IoIosArrowDown)`
    font-weight: 100;
    transform: rotate(-90deg);
`

export const MobilePopUpOption = styled.p`
    font-size: 16x;
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
`

export const MobilePopUpProfileContainer = styled.div`
    width: 90%;
    align-self: center;
    display: flex;
    flex-direction: column;
    margin-top: 24px;
    gap: 16px;
    padding-bottom: 32px;
`

export const MobilePopUpProfileDetails = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;
    font-size: 14px;
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
`

export const HorizontalLine = styled.hr`
    width: 90%;
    margin: 0 auto;
    border: 0.5px solid #444242;
`

export const UpdateProfileButton = styled.button`
    width: fit-content;
    height: 20px;
    border-radius: 6px;
    border: none;
    background-color: #1F41BB;
    color: white;
    font-size: 12px;
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    padding: 15px;
    cursor: pointer;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    align-self: center;
`
export const LogoutContainer = styled.div`
    display: none;
`

