import {useState, useEffect, useRef} from 'react';
import { useNavigate } from 'react-router-dom';
import {useDispatch} from 'react-redux'
import {AppDispatch} from '../../Redux/store'
import {HomeContainer, HomeContainerHeader, LaptopNavBar, MobileNavBarIcon, HomeSubContainer, SelectDateHeading, MobilePopUp, MobilePopUpCloseButton, MobilePopUpSubContainer, MobilePopUpHeadingContainer, MobileProfilePic, MobilePopUpHeading, MobilePopUpButtonsContainer, MobilePopUpButton, MobilePopUpOption,MobilePopUpButtonSubContainer, MobilePopUpProfileContainer, MobilePopUpProfileDetails, HorizontalLine, UpdateProfileButton, SideArrow, ArrowDownMyProfile, ArrowDownMyBookings, LogoutContainer} from './homeStyled'
import Cabin from '../Floor';
import NavBar from '../NavBar';
import DatePickerComponent from '../DatePicker';
import { fetchUserProfile } from '../../Redux/userSlice';
import MobilePopUpComponent from '../MobilePopUp';
import { AnimatePresence } from 'framer-motion';


const Home = ()=>{
    const [isNavBarVisible, setIsNavBarVisible] = useState(false);

    const [popUpButtonClicked, setPopUpClicked] = useState(false)
    const laptopNavRef = useRef<HTMLDivElement | null>(null);

    const dispatch = useDispatch<AppDispatch>()

    useEffect(() => {
        dispatch(fetchUserProfile());
    }, []);

    const togglePopup = () => {
        setPopUpClicked(!popUpButtonClicked);
    };

    const toggleNavBar = (value: boolean)=>{
        setIsNavBarVisible(value)
    }

    return (
        <HomeContainer data-testid = "home-container">
            <HomeContainerHeader>
                <SelectDateHeading>Select Date</SelectDateHeading>   
                <div ref = {laptopNavRef}>
                    <LaptopNavBar data-testid = "laptop-navbar-button" size = {32} onClick={()=> toggleNavBar(true)}/>
                </div>
                <MobileNavBarIcon data-testid = "mobile-navbar-button" size = {24} onClick={togglePopup}/>
            </HomeContainerHeader>
            <HomeSubContainer>
                <DatePickerComponent/>
                <Cabin/>
            </HomeSubContainer>
            <AnimatePresence initial = {false} mode = "wait" onExitComplete={() => null}>
                {popUpButtonClicked && <MobilePopUpComponent closePopUp = {()=> setPopUpClicked(false)}/>}
            </AnimatePresence>
            <NavBar isNavBarVisible = {isNavBarVisible} toogleNavbar = {toggleNavBar} laptopNavRef = {laptopNavRef}/> 
        </HomeContainer>
    )
}

export default Home