import styled from "styled-components";
import { IoIosArrowDown } from "react-icons/io";

export const SideBarContainer = styled.div`
    width: 350px;
    height: 100vh;
    background-color: #F1F4FF;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    overflow: scroll;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const ProfileContainer = styled.div`
    width: 100px;
    height: 100px;
    border-radius: 100px;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 40px;
    color: black;
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
`



interface NavBarInterface {
    isNavBarVisible: boolean
}

interface NavBarMainInterface{
    isNavBarVisible: boolean
}

export const NavBarContainer = styled.div<NavBarInterface>`
    width: ${({isNavBarVisible}) => isNavBarVisible ? '350px' : '0' };
    background-color: #F1F4FF;
    transition: width 0.4s ease-in-out;
    display: flex;
    flex-direction: column;
    overflow: auto;
    min-height: 100vh;
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
    width: 90%;
    display: flex;
    flex-direction: column;
    gap: 48px;
    align-items: center;
    margin: auto;
    margin-top: 68px;
`

export const NavBarMainContainer = styled.div<NavBarMainInterface>`
    width: ${({isNavBarVisible}) => isNavBarVisible ? '100%' : '0' };
    display: flex;
    flex-direction: row;
    position: relative;
    background-color: transparent;
    position: fixed;
    left: ${({isNavBarVisible}) => isNavBarVisible ? '0' : '-5000px'};
    transition: left 0.4s ease-in-out;
    backdrop-filter: blur(2px);
    height: fit-content;
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

interface HeadingContainerProps {
    myprofile?: boolean;
    mybookings?: boolean; 
}

export const HeadingContainer = styled.div<HeadingContainerProps>`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    padding-bottom: ${({myprofile, mybookings}) => myprofile ? '16px' : mybookings ? '16px' : '0'};
    width: 100%;
    border-bottom: ${({myprofile, mybookings}) => myprofile ? '2px solid #444242' : mybookings ? '2px solid #444242' : 'none'};
`
interface ArrowDownMyProfileProps {
    profileselected?: boolean;
}

export const ArrowDownMyProfile = styled(IoIosArrowDown)<ArrowDownMyProfileProps>`
    font-weight: 100;
    font-size: 28px;
    cursor: pointer;
    transition: transform 0.4s ease-in-out;
    transform: ${({profileselected}) => profileselected ? 'rotate(180deg)' : 'rotate(0deg)'};
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

export const LogOutContainer = styled.div`
    flex-grow: 0.8;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;
    width: 95%;
    gap: 16px;
`

export const LogOutSubContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 16px;
    cursor: pointer;
`

export const LogoutElement = styled.p`
    font-size: 22px;
    font-family: 'Poppins', sans-serif;
`

export const ViewMoreNavBar = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    font-size: 18px;
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    color: #D93F3F;
`

export const UpdateButton = styled.button`
    background-color: #1F41BB;
    border: none;
    font-size: 16px;
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    color: white;
    padding: 8px 16px;
    width: 120px;
    border-radius: 8px;
    align-self: flex-end;
    cursor: pointer;
    `

    export const UpdateButtonContainer = styled(DetailsProfileContentsItem)`
        justify-content: center;
        align-self: flex-end;
        width: 100%;
    `

    export const SideBarHeading = styled.p`
        font-size: 20px;
        font-family: 'Poppins', sans-serif;
        font-weight: 500;
    `
interface HeadingContainerProps{
    isselected?: boolean
}

export const HeadingContainerNavBar = styled(MyProfileContainer)<HeadingContainerProps>`
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: ${({isselected}) => isselected ? '#1F41BB' : 'white'};
    color: ${({isselected}) => isselected ? 'white' : 'black'};
    cursor: pointer;
    transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;
`