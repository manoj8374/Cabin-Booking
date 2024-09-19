import styled from "styled-components";
import { IoIosArrowDown } from "react-icons/io";

interface NavBarInterface {
    isNavBarVisible: boolean
}

interface NavBarMainInterface{
    isNavBarVisible: boolean
}

export const NavBarContainer = styled.div<NavBarInterface>`
    width: ${({isNavBarVisible}) => isNavBarVisible ? '350px' : '0' };
    height: 100vh;
    background-color: #F1F4FF;
    transition: width 0.4s ease-in-out;
    display: flex;
    flex-direction: column;
`

export const NavBarSubContainer = styled.div`
    width: 90%;
    margin: 0 auto;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 32px;
`

export const NavBarHeader = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    padding: 16px;
    padding-left: 24px;
`

export const NavBarBodyContents = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 48px;
    align-items: center;
    height: 100%;
`

export const NavBarMainContainer = styled.div<NavBarMainInterface>`
    width: ${({isNavBarVisible}) => isNavBarVisible ? '100%' : '0' };
    display: flex;
    flex-direction: row;
    position: relative;
    background-color: transparent;
    height: 100%;
    position: fixed;
    left: ${({isNavBarVisible}) => isNavBarVisible ? '0' : '-5000px'};
    transition: left 0.4s ease-in-out;
    backdrop-filter: blur(2px);

`

export const CircleContainer = styled.div`
    width: 150px;
    height: 150px;
    background-color: white;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 32px;
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    color: black;
`

export const ProfilePicContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
`

export const ProfileName = styled.p`
    font-size: 24px;
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    color: black;
`

export const OptionsContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 32px;
`

export const MyProfileContainer = styled.div`
    width: 100%;
    background-color: white;
    border-radius: 8px;
    padding: 16px;
    display: flex;
    flex-direction: column;
    gap: 24px;
`

export const HeadingContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    padding-bottom: 16px;
    width: 100%;
    border-bottom: 2px solid #E0E0E0;
`

export const ArrowDownMyProfile = styled(IoIosArrowDown)`
    font-weight: 100;
    font-size: 28px;
    cursor: pointer;
`

export const HeadingElementInside = styled.p`
    font-size: 20px;
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    color: black;
`

export const DetailsProfileContents = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`
export const DetailsProfileContentsItem = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;
`

export const ProfileParaElement = styled.p`
    font-size: 18px;
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    color: black;
`