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

    const [popUpButtonClicked, setPopUpClicked] = useState(false)

    const dispatch = useDispatch<AppDispatch>()

    useEffect(() => {
        dispatch(fetchUserProfile());
    }, []);

    const togglePopup = () => {
        setPopUpClicked(!popUpButtonClicked);
    };

    return (
        <HomeContainer data-testid = "home-container">
            <HomeContainerHeader>
                <SelectDateHeading>Select Date</SelectDateHeading>   
                <MobileNavBarIcon data-testid = "mobile-navbar-button" size = {24} onClick={togglePopup}/>
            </HomeContainerHeader>
            <HomeSubContainer>
                <DatePickerComponent/>
                <Cabin/>
            </HomeSubContainer>
            <AnimatePresence initial = {false} mode = "wait" onExitComplete={() => null}>
                {popUpButtonClicked && <MobilePopUpComponent closePopUp = {()=> setPopUpClicked(false)}/>}
            </AnimatePresence>
        </HomeContainer>
    )
}

export default Home