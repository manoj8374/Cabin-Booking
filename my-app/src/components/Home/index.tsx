import {useState, useEffect, ReactNode, useRef} from 'react';
import { useNavigate } from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux'
import {RootState, AppDispatch} from '../../Redux/store'
import {HomeContainer, HomeContainerHeader, LaptopNavBar, MobileNavBarIcon, HomeSubContainer, SelectDateHeading, MobilePopUp, MobilePopUpCloseButton, MobilePopUpSubContainer, MobilePopUpHeadingContainer, MobileProfilePic, MobilePopUpHeading, MobilePopUpButtonsContainer, MobilePopUpButton, ArrowDown, MobilePopUpOption,MobilePopUpButtonSubContainer, MobilePopUpProfileContainer, MobilePopUpProfileDetails, HorizontalLine, UpdateProfileButton, SideArrow, ArrowDownMyProfile, ArrowDownMyBookings, LogoutContainer} from './homeStyled'
import { RxHamburgerMenu,RxCross2 } from "react-icons/rx";
import { IoIosArrowDown } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa";
import Cabin from '../Floor';
import WhoBookedTheSlot from '../WhoBookedTheSlot';
import confirmslotsslice from '../../Redux/confirmslotsslice';
import ConfirmSlotPopUpComponent from '../ConfirmSlotsPopUp';
import ResultScreen from '../SuccessAndFailure';
import NavBar from '../NavBar';
import DatePickerComponent from '../DatePicker';


const Home = ()=>{
    const [isPopupVisible, setIsPopupVisible] = useState(false);
    const [isNavBarVisible, setIsNavBarVisible] = useState(false);
    const [myProfileIsActive, setMyProfileIsActive] = useState(false)
    const [myBookingsIsActive, setMyBookingsActive] = useState(false)

    const laptopNavRef = useRef<HTMLDivElement | null>(null);

    const whoBookedSlotPopUp = useSelector((state: RootState) => state.whobooked.isClicked)
    const confirmSlotPopUp = useSelector((state: RootState) => state.confirmSlots.isClicked)
    const errorPopUp = useSelector((state: RootState) => state.confirmSlots.error)

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

    const toggleNavBar = (value: boolean)=>{
        setIsNavBarVisible(value)
    }

    return (
        <HomeContainer>
            <HomeContainerHeader>
                <SelectDateHeading>Select Date</SelectDateHeading>   
                <div ref = {laptopNavRef}>
                    <LaptopNavBar size = {32} onClick={()=> toggleNavBar(true)}/>
                </div>
                <MobileNavBarIcon size = {24} onClick={togglePopup}/>
            </HomeContainerHeader>
            <HomeSubContainer>
                <DatePickerComponent/>
                <Cabin/>
            </HomeSubContainer>
            {isPopupVisible && renderMobilePopup()}
            <NavBar isNavBarVisible = {isNavBarVisible} toogleNavbar = {toggleNavBar} laptopNavRef = {laptopNavRef}/> 
            {whoBookedSlotPopUp && <WhoBookedTheSlot/>}
        </HomeContainer>
    )
}

export default Home