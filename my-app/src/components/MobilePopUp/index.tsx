import React, {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import {HomeContainer, HomeContainerHeader, SpinnerContainerPopUp, LaptopNavBar, MobileNavBarIcon, HomeSubContainer, SelectDateHeading, MobilePopUp, MobilePopUpCloseButton, MobilePopUpSubContainer, MobilePopUpHeadingContainer, MobileProfilePic, MobilePopUpHeading, MobilePopUpButtonsContainer, MobilePopUpButton, MobilePopUpOption,MobilePopUpButtonSubContainer, MobilePopUpProfileContainer, MobilePopUpProfileDetails, HorizontalLine, UpdateProfileButton, SideArrow, ArrowDownMyProfile, ArrowDownMyBookings, LogoutContainer, ViewMore, Logout, LogoutSubContainer} from '../Home/homeStyled'
import {useDispatch,useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../Redux/store";
import {RxCross2 } from "react-icons/rx";
import { FaArrowRight } from "react-icons/fa";
import { fetchUserProfile } from '../../Redux/userSlice';
import LoadingComponent from '../LoadingView';
import { MdNavigateNext } from "react-icons/md";
import Cookies from 'js-cookie';

const popUpVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: {
        type: "spring",
        stiffness: 500,
        damping: 35,
    } },
    exit: { opacity: 0, x: 50 }
};

const buttonVariants = {
    collapsed: { height: 0, opacity: 0, transition: { duration: 0.3 } },
    expanded: { height: "auto", opacity: 1, transition: { duration: 3 } }
};

interface MobilePopUpProps {
    closePopUp: () => void
}

const MobilePopUpComponent:React.FC<MobilePopUpProps> = ({closePopUp}) => {
    const {first_name = "", last_name = "", team_name = "", contact_number = "", error, isLoading} = useSelector((state: RootState)=>state.user || {})
    
    const [myProfileIsActive, setMyProfileIsActive] = useState(false)
    const [myBookingsIsActive, setMyBookingsActive] = useState(false)

    const navigate = useNavigate()
    const dispatch = useDispatch<AppDispatch>()

    const navigateToUpdateProfile = ()=>{
        navigate('/update-profile')
    }

    const togglePopup = () => {
        closePopUp()
    };

    useEffect(() => {
        dispatch(fetchUserProfile())
    }, [])

    const logout = ()=>{
        Cookies.remove("access_token")
        Cookies.remove("refresh_token")
        navigate("/login")
    }

    const renderContent = ()=>{
        if(isLoading){
            return <SpinnerContainerPopUp data-testid = "loading container"><LoadingComponent/></SpinnerContainerPopUp>
        }

        if(error){
            return <h1>Something went wrong</h1>
        }

        if(!isLoading && !error){
            return <MobilePopUpSubContainer>
            <MobilePopUpCloseButton data-testid = "cancelButton" onClick={togglePopup}>
                <RxCross2 size={28}/>
            </MobilePopUpCloseButton>
            <MobilePopUpHeadingContainer>
                <MobileProfilePic>
                    {first_name.charAt(0).toUpperCase() + last_name.charAt(0).toUpperCase()}
                </MobileProfilePic>
                <MobilePopUpHeading>
                    {first_name + ' ' + last_name}
                </MobilePopUpHeading>
            </MobilePopUpHeadingContainer>
            <MobilePopUpButtonsContainer>
                <MobilePopUpButtonSubContainer>
                    <MobilePopUpButton data-testid = "myProfileButton" onClick={()=>{setMyProfileIsActive(!myProfileIsActive); setMyBookingsActive(false)}}>
                        <MobilePopUpOption>My Profile</MobilePopUpOption>
                        <ArrowDownMyProfile isprofileactive = {myProfileIsActive} size={24} onClick={()=>{setMyProfileIsActive(!myProfileIsActive); setMyBookingsActive(false)}}/>
                    </MobilePopUpButton> 
                    {myProfileIsActive && 
                        <>
                            <HorizontalLine/>
                            <MobilePopUpProfileContainer data-testid = "myProfileContents" variants={buttonVariants} initial = {false} animate = {myProfileIsActive ? 'expanded' : 'collapsed'}>
                            <MobilePopUpProfileDetails>
                                <p>Name: </p>
                                <p>{first_name + ' ' + last_name}</p>
                            </MobilePopUpProfileDetails>
                            <MobilePopUpProfileDetails>
                                <p>Team: </p>
                                <p>{team_name}</p>
                            </MobilePopUpProfileDetails>
                            <MobilePopUpProfileDetails>
                                <p>Contact no: </p>
                                <p>+91 {contact_number}</p>
                            </MobilePopUpProfileDetails>
                            <MobilePopUpProfileDetails>
                                <p>Password: </p>
                                <p>********</p>
                            </MobilePopUpProfileDetails>
                            <UpdateProfileButton onClick = {navigateToUpdateProfile}>
                                Update profile <SideArrow rotate={90}/>
                            </UpdateProfileButton>
                        </MobilePopUpProfileContainer>
                        </>
                    }
                </MobilePopUpButtonSubContainer>      
                <MobilePopUpButtonSubContainer>
                    <MobilePopUpButton data-testid = "myBookingsButton" onClick={()=>{setMyBookingsActive(!myBookingsIsActive); setMyProfileIsActive(false)}}>
                        <MobilePopUpOption>My Bookings</MobilePopUpOption>
                        <ArrowDownMyBookings isbookingsactive = {myBookingsIsActive} size={24} onClick={()=> {setMyBookingsActive(!myBookingsIsActive); setMyProfileIsActive(false)}}/>
                    </MobilePopUpButton> 
                    {myBookingsIsActive && 
                        <>
                            <HorizontalLine/>
                            <ViewMore data-testid = "viewMoreButton" onClick={()=>navigate('/my-bookings')}>
                                View More <MdNavigateNext size={28}/>
                            </ViewMore> 
                        </>
                    }
                </MobilePopUpButtonSubContainer>      
            </MobilePopUpButtonsContainer>
            <LogoutContainer>
                <LogoutSubContainer data-testid = "logoutcontainer" onClick = {logout}>
                    <FaArrowRight size = {20}/>
                    <Logout>Logout</Logout>
                </LogoutSubContainer> 
            </LogoutContainer>
        </MobilePopUpSubContainer>
        }
    }

    return (
        <MobilePopUp variants={popUpVariants} initial="hidden" animate="visible" exit="exit" data-testid="mobile-pop-up">
            {renderContent()}
        </MobilePopUp>
    )
}

export default MobilePopUpComponent
