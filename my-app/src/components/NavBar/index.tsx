import { useEffect, useState,useRef } from "react";
import {NavBarContainer, ArrowDownMyProfile,HeadingElementInside, 
    OptionsContainer, MyProfileContainer, HeadingContainer, ProfileName, NavBarSubContainer, 
    ProfilePicContainer, CircleContainer, NavBarHeader, NavBarBodyContents, NavBarMainContainer, 
    DetailsProfileContents, DetailsProfileContentsItem, ProfileParaElement, LogOutContainer, 
    LogOutSubContainer, LogoutElement, ViewMoreNavBar, UpdateButton, UpdateButtonContainer} from "./navbarStyled";
import {RxCross2 } from "react-icons/rx";
import { useSelector } from "react-redux";
import { RootState } from "../../Redux/store";
import { FaArrowRight } from "react-icons/fa";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { ViewMore } from "../Home/homeStyled";
import { MdNavigateNext } from "react-icons/md";

interface NavBarInterface {
    toogleNavbar: (value: boolean) => void;
    isNavBarVisible: boolean;
    laptopNavRef: React.MutableRefObject<HTMLDivElement | null>;
}

const Navbar: React.FC<NavBarInterface> = ({toogleNavbar, isNavBarVisible, laptopNavRef})=>{
    const divRef = useRef<HTMLDivElement | null>(null);

    const {first_name = "", last_name = "", team_name = "", contact_number = ""} = useSelector((state: RootState)=>state.user || {})
    const [myProfile, setMyProfile] = useState(false)
    const [myBookings, setMyBookings] = useState(false)

    const navigate = useNavigate()

    const logout = ()=>{
        Cookies.remove("access_token")
        Cookies.remove("refresh_token")
        navigate("/login")
    }

    useEffect(()=>{
        setMyBookings(false)
        setMyBookings(false)
        const handleClick = (event: MouseEvent)=>{
            if(isNavBarVisible){
                document.body.style.overflow = 'auto';
                if(divRef.current && !divRef.current.contains(event.target as Node) && !laptopNavRef.current?.contains(event.target as Node)){
                    toogleNavbar(false)
                    document.body.style.overflow = 'auto';
                }else{
                    console.log("Clicked Inside")
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
                            {first_name.charAt(0).toUpperCase() + last_name.charAt(0).toUpperCase()}
                        </CircleContainer>
                        <ProfileName>{first_name + ' ' + last_name}</ProfileName>
                    </ProfilePicContainer>
                    <OptionsContainer>
                        <MyProfileContainer>
                            <HeadingContainer myprofile = {myProfile} onClick = {()=>{setMyProfile(!myProfile); setMyBookings(false)}}>
                                <HeadingElementInside>My Profile</HeadingElementInside>
                                <ArrowDownMyProfile/>
                            </HeadingContainer>
                            {myProfile &&
                            <DetailsProfileContents>
                                <DetailsProfileContentsItem>
                                    <ProfileParaElement>Name: </ProfileParaElement>
                                    <ProfileParaElement>{first_name + ' ' + last_name}</ProfileParaElement>
                                </DetailsProfileContentsItem>
                                <DetailsProfileContentsItem>
                                    <ProfileParaElement>Team: </ProfileParaElement>
                                    <ProfileParaElement>{team_name}</ProfileParaElement>
                                </DetailsProfileContentsItem>
                                <DetailsProfileContentsItem>
                                    <ProfileParaElement>Contact no: </ProfileParaElement>
                                    <ProfileParaElement>+91 {contact_number}</ProfileParaElement>
                                </DetailsProfileContentsItem>
                                <DetailsProfileContentsItem>
                                    <ProfileParaElement>Password: </ProfileParaElement>
                                    <ProfileParaElement>*********</ProfileParaElement>
                                </DetailsProfileContentsItem>
                                <UpdateButtonContainer>
                                    <UpdateButton onClick={()=> navigate("/update-profile")}>Update</UpdateButton>
                                </UpdateButtonContainer>
                            </DetailsProfileContents>
                            }
                            
                        </MyProfileContainer>
                        <MyProfileContainer>
                            <HeadingContainer mybookings = {myBookings} onClick = {()=>{setMyBookings(!myBookings); setMyProfile(false)}}>
                                <HeadingElementInside>My Bookings</HeadingElementInside>
                                <ArrowDownMyProfile/>
                            </HeadingContainer>
                            {myBookings &&
                            <DetailsProfileContents>
                                <ViewMoreNavBar onClick={()=>navigate('/my-bookings')}>
                                View More <MdNavigateNext size={28}/>
                                </ViewMoreNavBar> 
                            </DetailsProfileContents>
                            }
                        </MyProfileContainer>
                    </OptionsContainer>
                </NavBarBodyContents>
                <LogOutContainer>
                    <LogOutSubContainer onClick = {logout}>
                        <FaArrowRight size = {24}/>
                        <LogoutElement>Logout</LogoutElement>
                    </LogOutSubContainer>
                </LogOutContainer>
            </NavBarSubContainer>
        </NavBarContainer>
        </NavBarMainContainer>
    )
}

export default Navbar;
