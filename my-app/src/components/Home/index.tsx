import {useState, useEffect, ReactNode} from 'react';
import { useNavigate } from 'react-router-dom';
import {HomeContainer, HomeContainerHeader, HomeSubContainer, SelectDateHeading, MobilePopUp, MobilePopUpCloseButton, MobilePopUpSubContainer, MobilePopUpHeadingContainer, MobileProfilePic, MobilePopUpHeading, MobilePopUpButtonsContainer, MobilePopUpButton, ArrowDown, MobilePopUpOption,MobilePopUpButtonSubContainer, MobilePopUpProfileContainer, MobilePopUpProfileDetails, HorizontalLine, UpdateProfileButton, SideArrow, ArrowDownMyProfile, ArrowDownMyBookings, LogoutContainer} from './homeStyled'
import { RxHamburgerMenu,RxCross2 } from "react-icons/rx";
import { IoIosArrowDown } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa";
import Cabin from '../Floor';

const Home = ()=>{
    const [isPopupVisible, setIsPopupVisible] = useState(false);
    const [myProfileIsActive, setMyProfileIsActive] = useState(false)
    const [myBookingsIsActive, setMyBookingsActive] = useState(false)

    const navigate = useNavigate()

    useEffect(() => {
        if (isPopupVisible) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        // Cleanup when the component is unmounted
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isPopupVisible]);

    const navigateToUpdateProfile = ()=>{
        navigate('/update-profile')
    }

    const togglePopup = () => {
        setIsPopupVisible(!isPopupVisible);
    };

    const renderMobilePopup = (): ReactNode=>{
        return(
        <MobilePopUp ispopupvisible = {isPopupVisible}>
            <MobilePopUpSubContainer>
                <MobilePopUpCloseButton onClick={togglePopup}>
                    <RxCross2 size={28}/>
                </MobilePopUpCloseButton>
                <MobilePopUpHeadingContainer>
                    <MobileProfilePic>
                        VG
                    </MobileProfilePic>
                    <MobilePopUpHeading>
                        Venu Gopal
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
                                    <p>Venu Gopal</p>
                                </MobilePopUpProfileDetails>
                                <MobilePopUpProfileDetails>
                                    <p>Team: </p>
                                    <p>NIAT</p>
                                </MobilePopUpProfileDetails>
                                <MobilePopUpProfileDetails>
                                    <p>Contact no: </p>
                                    <p>+91 95425 86175</p>
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
                                <MobilePopUpProfileContainer>
                                <MobilePopUpProfileDetails>
                                    <p>Name: </p>
                                    <p>Venu Gopal</p>
                                </MobilePopUpProfileDetails>
                                <MobilePopUpProfileDetails>
                                    <p>Team: </p>
                                    <p>NIAT</p>
                                </MobilePopUpProfileDetails>
                                <MobilePopUpProfileDetails>
                                    <p>Contact no: </p>
                                    <p>+91 95425 86175</p>
                                </MobilePopUpProfileDetails>
                                <MobilePopUpProfileDetails>
                                    <p>Password: </p>
                                    <p>********</p>
                                </MobilePopUpProfileDetails>
                                <UpdateProfileButton>
                                    Update profile <SideArrow rotate={90}/>
                                </UpdateProfileButton>
                            </MobilePopUpProfileContainer>
                            </>
                        }
                    </MobilePopUpButtonSubContainer>      
                </MobilePopUpButtonsContainer>
                <LogoutContainer>
                    <p>Logout</p>
                    <FaArrowRight/>
                </LogoutContainer>
            </MobilePopUpSubContainer>
        </MobilePopUp>
        )
    }

    return (
        <HomeContainer>
            <HomeContainerHeader>
                <SelectDateHeading>Select Date</SelectDateHeading>   
                <RxHamburgerMenu size={24} onClick={togglePopup}/>
            </HomeContainerHeader>
            <HomeSubContainer>
                {/* Date Picker Component Here */}
                {/* // Cabin Component Here */}
                <Cabin/>
            </HomeSubContainer>
            {isPopupVisible && renderMobilePopup()}
        </HomeContainer>
    )
}

export default Home