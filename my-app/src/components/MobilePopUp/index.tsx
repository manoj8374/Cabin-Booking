import React, {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import {HomeContainer, HomeContainerHeader, SpinnerContainerPopUp, LaptopNavBar, MobileNavBarIcon, HomeSubContainer, SelectDateHeading, MobilePopUp, MobilePopUpCloseButton, MobilePopUpSubContainer, MobilePopUpHeadingContainer, MobileProfilePic, MobilePopUpHeading, MobilePopUpButtonsContainer, MobilePopUpButton, MobilePopUpOption,MobilePopUpButtonSubContainer, MobilePopUpProfileContainer, MobilePopUpProfileDetails, HorizontalLine, UpdateProfileButton, SideArrow, ArrowDownMyProfile, ArrowDownMyBookings, LogoutContainer, ViewMore} from '../Home/homeStyled'
import {useDispatch,useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../Redux/store";
import {RxCross2 } from "react-icons/rx";
import { FaArrowRight } from "react-icons/fa";
import { fetchUserProfile } from '../../Redux/userSlice';
import LoadingComponent from '../LoadingView';
import { MdNavigateNext } from "react-icons/md";

interface MobilePopUpProps {
    closePopUp: () => void
}

const MobilePopUpComponent:React.FC<MobilePopUpProps> = ({closePopUp}) => {
    const {first_name, last_name, team_name, contact_number, isLoading, error} = useSelector((state: RootState) => state.user)
    
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

    const renderContent = ()=>{
        if(isLoading){
            return <SpinnerContainerPopUp><LoadingComponent/></SpinnerContainerPopUp>
        }

        if(error){
            return <h1>Something went wrong</h1>
        }

        if(!isLoading && !error){
            return <MobilePopUpSubContainer>
            <MobilePopUpCloseButton onClick={togglePopup}>
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
                    <MobilePopUpButton onClick={()=>{setMyProfileIsActive(!myProfileIsActive); setMyBookingsActive(false)}}>
                        <MobilePopUpOption>My Profile</MobilePopUpOption>
                        <ArrowDownMyProfile isprofileactive = {myProfileIsActive} size={24} onClick={()=>{setMyProfileIsActive(!myProfileIsActive); setMyBookingsActive(false)}}/>
                    </MobilePopUpButton> 
                    {myProfileIsActive && 
                        <>
                            <HorizontalLine/>
                            <MobilePopUpProfileContainer>
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
                    <MobilePopUpButton onClick={()=>{setMyBookingsActive(!myBookingsIsActive); setMyProfileIsActive(false)}}>
                        <MobilePopUpOption>My Bookings</MobilePopUpOption>
                        <ArrowDownMyBookings isbookingsactive = {myBookingsIsActive} size={24} onClick={()=> {setMyBookingsActive(!myBookingsIsActive); setMyProfileIsActive(false)}}/>
                    </MobilePopUpButton> 
                    {myBookingsIsActive && 
                        <>
                            <HorizontalLine/>
                            <ViewMore onClick={()=>navigate('/my-bookings')}>
                                View More <MdNavigateNext size={28}/>
                            </ViewMore> 
                        </>
                    }
                </MobilePopUpButtonSubContainer>      
            </MobilePopUpButtonsContainer>
            <LogoutContainer>
                <FaArrowRight/>
                <p>Logout</p>
            </LogoutContainer>
        </MobilePopUpSubContainer>
        }
    }

    return (
        <MobilePopUp>
            {renderContent()}
        </MobilePopUp>
    )
}

export default MobilePopUpComponent
