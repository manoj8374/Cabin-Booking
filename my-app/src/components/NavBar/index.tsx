import styled from "styled-components";
import { useEffect, useRef } from "react";
import {NavBarContainer, ArrowDownMyProfile,HeadingElementInside, OptionsContainer, MyProfileContainer, HeadingContainer, ProfileName, NavBarSubContainer, ProfilePicContainer, CircleContainer, NavBarHeader, NavBarBodyContents, NavBarMainContainer, DetailsProfileContents, DetailsProfileContentsItem, ProfileParaElement} from "./navbarStyled";
import { RxHamburgerMenu,RxCross2 } from "react-icons/rx";

interface NavBarInterface {
    toogleNavbar: (value: boolean) => void;
    isNavBarVisible: boolean;
    laptopNavRef: React.MutableRefObject<HTMLDivElement | null>;
}

const Navbar: React.FC<NavBarInterface> = ({toogleNavbar, isNavBarVisible, laptopNavRef})=>{
    const divRef = useRef<HTMLDivElement | null>(null);

    useEffect(()=>{
        const handleClick = (event: MouseEvent)=>{
            if(isNavBarVisible){
                document.body.style.overflow = 'hidden';
                if(divRef.current && !divRef.current.contains(event.target as Node) && !laptopNavRef.current?.contains(event.target as Node)){
                    toogleNavbar(false)
                    document.body.style.overflow = 'auto';
                }
            }else{
                document.body.style.overflow = 'auto';
            }  
        }

        if(isNavBarVisible){
            document.addEventListener("click", handleClick)
        }else{
            document.removeEventListener("click", handleClick)
        }
    }, [isNavBarVisible])

    return(
        <NavBarMainContainer isNavBarVisible = {isNavBarVisible}>
                <NavBarContainer isNavBarVisible = {isNavBarVisible} ref={divRef}>
            <NavBarSubContainer>
                <NavBarHeader>
                    <RxCross2 size={30} onClick = {()=>toogleNavbar(false)}/>
                </NavBarHeader>
                <NavBarBodyContents>
                    <ProfilePicContainer>
                        <CircleContainer>
                            VG
                        </CircleContainer>
                        <ProfileName>Venu Gopal</ProfileName>
                    </ProfilePicContainer>
                    <OptionsContainer>
                        <MyProfileContainer>
                            <HeadingContainer>
                                <HeadingElementInside>My Profile</HeadingElementInside>
                                <ArrowDownMyProfile/>
                            </HeadingContainer>
                            <DetailsProfileContents>
                                <DetailsProfileContentsItem>
                                    <ProfileParaElement>Name: </ProfileParaElement>
                                    <ProfileParaElement>Venu Gopal</ProfileParaElement>
                                </DetailsProfileContentsItem>
                                <DetailsProfileContentsItem>
                                    <ProfileParaElement>Team: </ProfileParaElement>
                                    <ProfileParaElement>Designing Team</ProfileParaElement>
                                </DetailsProfileContentsItem>
                                <DetailsProfileContentsItem>
                                    <ProfileParaElement>Contact no: </ProfileParaElement>
                                    <ProfileParaElement>+91 987456123</ProfileParaElement>
                                </DetailsProfileContentsItem>
                                <DetailsProfileContentsItem>
                                    <ProfileParaElement>Password: </ProfileParaElement>
                                    <ProfileParaElement>*********</ProfileParaElement>
                                </DetailsProfileContentsItem>
                            </DetailsProfileContents>
                        </MyProfileContainer>
                        <MyProfileContainer>
                            <HeadingContainer>
                                <HeadingElementInside>My Bookings</HeadingElementInside>
                                <ArrowDownMyProfile/>
                            </HeadingContainer>
                        </MyProfileContainer>
                    </OptionsContainer>
                </NavBarBodyContents>

            </NavBarSubContainer>
        </NavBarContainer>
        </NavBarMainContainer>
        

    )
}

export default Navbar;
