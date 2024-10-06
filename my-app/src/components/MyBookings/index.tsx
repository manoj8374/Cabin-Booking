import {MyBookingsContainer, MyBookingsHeadingContainer, MyBookingsHeading, 
IconsContainer, MyBookingsSubContainer, FiltersContainer, FilterButton,
UpcomingBookingsContainer, HomeIconContainer, HamburgerContainer, NavBarContainer, 
NavBarContainerMain, NoBookingsContainer, NoBookingsHeading, BookNowButton} from './bookingsstyled'
import { IoHomeOutline } from "react-icons/io5";
import { useEffect, useState, useRef} from 'react';
import MobilePopUpComponent from '../MobilePopUp';
import {getUserBookings} from '../../Redux/userBookings'
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../Redux/store';
import LoadingComponent from '../LoadingView';
import { render } from '@testing-library/react';
import MyBookingItem from '../MyBookingsItem';
import { useNavigate } from 'react-router-dom';
import Navbar from '../NavBar';
import { fetchUserProfile } from '../../Redux/userSlice';

interface BookingsObj {
    floorName: string
    cabinName: string
    bookingId: string
    startDate: string
    endDate: string
    timeSlots: string[]
}

const MyBookings = ()=>{
    const [open, setOpen] = useState(false)
    const {bookings, isLoading, error, errorMessage} = useSelector((state: RootState)=>state.userBookings)

    const [upComing, setUpComing] = useState(true)
    const [previous, setPrevious] = useState(false)

    const [isNavBarVisible, setIsNavBarVisible] = useState(false);

    const laptopNavRef = useRef<HTMLDivElement | null>(null);

    const navigate = useNavigate()

    const [upcomingBookings, setUpcomingBookings] = useState<BookingsObj[]>([])
    const [previousBookings, setPreviousBookings] = useState<BookingsObj[]>([])

    const dispatch = useDispatch<AppDispatch>()

    const toggleNavBar = (value: boolean)=>{
        setIsNavBarVisible(value)
    }

    useEffect(()=>{
        dispatch(getUserBookings())
        dispatch(fetchUserProfile())
    }, [dispatch, previous, upComing])

    useEffect(() => {
        const currentDate = new Date();
        currentDate.setHours(0, 0, 0, 0);
        let upcomingBookingArr: BookingsObj[] = []
        let previousBookingsArr: BookingsObj[] = []
        bookings.forEach((booking) => {
            if (new Date(booking.startDate) >= currentDate){
                upcomingBookingArr.push(booking)
            }else{
                previousBookingsArr.push(booking)
            }
        });
        setUpcomingBookings(upcomingBookingArr);
        setPreviousBookings(previousBookingsArr);
    }, [bookings]);

    const renderBookings = ()=>{
        if(isLoading){
            return (
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
                <LoadingComponent/>
              </div>    
            )
        }

        if(error){
            return (
                <NoBookingsContainer>
                    <NoBookingsHeading>No Bookings Found</NoBookingsHeading>
                    <BookNowButton onClick={()=> navigate("/")}>Book Now</BookNowButton>
                </NoBookingsContainer>
            )
        }
 
        
        if(previous && previousBookings.length === 0){
            return (
                <NoBookingsContainer>
                    <NoBookingsHeading>No Previous Bookings Found</NoBookingsHeading>
                    <BookNowButton onClick={()=> navigate("/")}>Book Now</BookNowButton>
                </NoBookingsContainer>
            )
        }

        if(previous){
            return (
                <UpcomingBookingsContainer>
                    {previousBookings.map((eachItem)=>{
                        return <MyBookingItem key = {eachItem.bookingId} details = {eachItem}/>
                    })}
                </UpcomingBookingsContainer>
            )
        }

        return (
            <UpcomingBookingsContainer>
                {upComing ? (
                    upcomingBookings.map((eachItem)=>{
                        return <MyBookingItem key = {eachItem.bookingId} details = {eachItem}/>
                    })
                ): null}
            </UpcomingBookingsContainer>
        )
    }
    
    return (
        <MyBookingsContainer>
            <MyBookingsHeadingContainer>
                <MyBookingsHeading>My Bookings</MyBookingsHeading>
                <IconsContainer>
                    <HomeIconContainer onClick = {()=> navigate("/")}  />
                    <HamburgerContainer onClick = {()=> setOpen(!open)} size = {24} color = '1F41BB'/>
                    <NavBarContainerMain ref = {laptopNavRef}>
                        <NavBarContainer onClick = {()=> toggleNavBar(!isNavBarVisible)}/>
                    </NavBarContainerMain>
                </IconsContainer>
            </MyBookingsHeadingContainer>
            <FiltersContainer>
                <FilterButton isactive = {upComing} onClick = {()=> {setUpComing(!upComing); setPrevious(!previous)}}>Upcoming Slots</FilterButton>
                <FilterButton isactive = {previous} onClick = {()=> {setUpComing(!upComing); setPrevious(!previous)}}>Previous Slots</FilterButton>
            </FiltersContainer>
            {renderBookings()}
            {open && <MobilePopUpComponent closePopUp={()=> setOpen(!open)}/>}
            <Navbar isNavBarVisible = {isNavBarVisible} toogleNavbar = {toggleNavBar} laptopNavRef = {laptopNavRef}/>
        </MyBookingsContainer>
    )
}

export default MyBookings