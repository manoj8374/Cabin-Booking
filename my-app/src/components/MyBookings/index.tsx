import {MyBookingsContainer, MyBookingsHeadingContainer, MyBookingsHeading, 
IconsContainer, MyBookingsSubContainer, FiltersContainer, FilterButton,
UpcomingBookingsContainer, HomeIconContainer, HamburgerContainer, NavBarContainer, 
NavBarContainerMain, NoBookingsContainer, NoBookingsHeading, BookNowButton} from './bookingsstyled'
import { useEffect, useState, useRef} from 'react';
import MobilePopUpComponent from '../MobilePopUp';
import {getUserBookings} from '../../Redux/userBookings'
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../Redux/store';
import LoadingComponent from '../LoadingView';
import MyBookingItem from '../MyBookingsItem';
import { useNavigate } from 'react-router-dom';
import Navbar from '../NavBar';
import { fetchUserProfile } from '../../Redux/userSlice';
import { url } from '../../Utils';
import Cookies from 'js-cookie';
import DeleteModal from '../DeleteModal';
import { AnimatePresence } from 'framer-motion';

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
    const [deletePopUp, setDeletePopUp] = useState(false)

    const [isNavBarVisible, setIsNavBarVisible] = useState(false);
    const [selectedId, setSelectedId] = useState('')

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
            if (new Date(booking.endDate) >= currentDate){
                upcomingBookingArr.push(booking)
            }else{
                previousBookingsArr.push(booking)
            }
        });
        setUpcomingBookings(upcomingBookingArr);
        setPreviousBookings(previousBookingsArr);
    }, [bookings]);

    const showPopUp = async(id: string)=>{
        setDeletePopUp(true)
        setSelectedId(id)
    }

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
                    <NoBookingsHeading>{errorMessage}</NoBookingsHeading>
                    {errorMessage === "No Bookings Found" && <BookNowButton onClick={()=> navigate("/")}>Book Now</BookNowButton>}
                </NoBookingsContainer>
            )
        }

        if(upComing && upcomingBookings.length === 0){
            return (
                <NoBookingsContainer>
                    <NoBookingsHeading>No Upcoming Bookings Found</NoBookingsHeading>
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
                        return <MyBookingItem key = {eachItem.bookingId} upcoming = {false} details = {eachItem}/>
                    })}
                </UpcomingBookingsContainer>
            )
        }

        return (
            <UpcomingBookingsContainer>
                {upComing ? (
                    upcomingBookings.map((eachItem)=>{
                        return <MyBookingItem confirmPopUp = {showPopUp} upcoming = {true} key = {eachItem.bookingId} details = {eachItem}/>
                    })
                ): null}
            </UpcomingBookingsContainer>
        )
    }

    const deleteBooking = async()=>{
        try{
            const response = await fetch(`${url}/delete/user/bookings/v1`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${Cookies.get('access_token')}`
                },
                body: JSON.stringify({
                    booking_id: selectedId
                })
            })
            setDeletePopUp(false)
            if(response.status === 200){
                dispatch(getUserBookings())
            }
        }catch(e){
            console.log(e)
        }
    }   
    
    return (
        <>
        <MyBookingsContainer>
            <MyBookingsHeadingContainer>
                <MyBookingsHeading>My Bookings</MyBookingsHeading>
            </MyBookingsHeadingContainer>
            <FiltersContainer>
                <FilterButton isactive = {upComing} onClick = {()=> {setUpComing(!upComing); setPrevious(!previous)}}>Upcoming Slots</FilterButton>
                <FilterButton isactive = {previous} onClick = {()=> {setUpComing(!upComing); setPrevious(!previous)}}>Previous Slots</FilterButton>
            </FiltersContainer>
            {renderBookings()}
            {open && <MobilePopUpComponent closePopUp={()=> setOpen(!open)}/>}
        </MyBookingsContainer>
        <AnimatePresence initial = {false} mode = "wait" onExitComplete={() => null}>
            {deletePopUp && <DeleteModal closePopUp = {()=> setDeletePopUp(false)} deleteBooking = {deleteBooking}/>}
        </AnimatePresence>
        </>
    )
}

export default MyBookings