import { useEffect, useState,useRef } from "react";
import {SideBarContainer, ProfileContainer, NavBarContainer, ArrowDownMyProfile,HeadingElementInside, 
    OptionsContainer, MyProfileContainer, HeadingContainer, ProfileName, NavBarSubContainer, 
    ProfilePicContainer, CircleContainer, NavBarHeader, NavBarBodyContents, NavBarMainContainer, 
    DetailsProfileContents, DetailsProfileContentsItem, ProfileParaElement, LogoutContainer, 
    LogOutSubContainer, LogoutElement, ViewMoreNavBar, UpdateButton, UpdateButtonContainer, SideBarHeading, HeadingContainerNavBar, LogoutButton, CenterContents} from './navbarStyled'
import {RxCross2 } from "react-icons/rx";
import { useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../Redux/store";
import { FaArrowRight } from "react-icons/fa";
import Cookies from "js-cookie";
import { MdNavigateNext } from "react-icons/md";
import { IoHomeSharp } from "react-icons/io5";
import { FaCalendar } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";
import {AnimatePresence, motion} from "framer-motion"
import { MdOutlineLogout } from "react-icons/md";
import LoadingComponent from "../LoadingView";
import { useDispatch } from "react-redux";
import { fetchUserProfile } from "../../Redux/userSlice";

const dropdownVariants = {
    hidden: { opacity: 0, height: 0, scale: 0.8 },
    visible: { opacity: 1, height: "auto", scale: 1 },
    exit: { opacity: 0, height: 0, scale: 0.8 }
  };

const Navbar = ()=>{
    const divRef = useRef<HTMLDivElement | null>(null);

    const location = useLocation();

    const {first_name, last_name, team_name, contact_number, isLoading, error} = useSelector((state: RootState)=>state.user)
    const [myProfile, setMyProfile] = useState(false)
    const [myBookings, setMyBookings] = useState(false)

    const navigate = useNavigate()

    const logout = ()=>{
        Cookies.remove("access_token")
        Cookies.remove("refresh_token")
        navigate("/login")
    }

    const isHome = location.pathname === "/"
    const isMyBookings = location.pathname === "/my-bookings"

    const dispatch = useDispatch<AppDispatch>()

    useEffect(() => {
        dispatch(fetchUserProfile());
    }, []);
        
    const renderContents = ()=>{
        if(isLoading){
            return (
                <CenterContents>
                    <LoadingComponent/>
                </CenterContents>            
        )
        }

        if(error){
            return (
                <CenterContents>
                    <h3>Something went wrong</h3>
                </CenterContents>
            )
        }

        return (
            <>
                <NavBarBodyContents>
                    <ProfilePicContainer>
                        <CircleContainer>
                            {first_name.charAt(0).toUpperCase() + last_name.charAt(0).toUpperCase()}
                        </CircleContainer>
                        <ProfileName>{first_name + ' ' + last_name}</ProfileName>
                    </ProfilePicContainer>
                    <OptionsContainer>
                        <HeadingContainerNavBar isselected = {isHome} onClick = {()=> navigate("/")}>
                            <IoHomeSharp size = {24} color = {isHome ? 'white' : 'black'} />
                            <SideBarHeading>Home</SideBarHeading>
                        </HeadingContainerNavBar>
                        <HeadingContainerNavBar isselected = {isMyBookings} onClick = {()=> navigate("/my-bookings")}>
                            <FaCalendar color = {isMyBookings ? 'white' : 'black'} size = {24}/>
                            <SideBarHeading>Bookings</SideBarHeading>
                        </HeadingContainerNavBar>
                        <MyProfileContainer>
                            <HeadingContainer myprofile = {myProfile} onClick = {()=>{setMyProfile(!myProfile); setMyBookings(false)}}>
                                <HeadingElementInside>My Profile</HeadingElementInside>
                                <ArrowDownMyProfile profileselected = {myProfile}/>
                            </HeadingContainer>
                            <AnimatePresence initial = {false} mode = "wait" onExitComplete={() => null}>
                                {myProfile && (        
                                    <motion.div
                                        initial="hidden"
                                        animate="visible"
                                        exit="exit"
                                        variants={dropdownVariants}
                                        transition={{ duration: 0.3 }}
                                    >
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
                                            <UpdateButton onClick={() => {navigate("/update-profile"); setMyProfile(false)}}>Update</UpdateButton>
                                        </UpdateButtonContainer>
                                        </DetailsProfileContents>
                                    </motion.div>
                                )}   
                            </AnimatePresence>                         
                        </MyProfileContainer>    
                    </OptionsContainer>
            </NavBarBodyContents>
            <LogoutContainer>
                <LogoutButton onClick = {logout}>
                    <MdOutlineLogout/>
                    <LogoutElement>Logout</LogoutElement>
                </LogoutButton>
            </LogoutContainer>
            </>
        )

    }

    return(
        <SideBarContainer>
            {renderContents()}
        </SideBarContainer>
    )
}

export default Navbar;
