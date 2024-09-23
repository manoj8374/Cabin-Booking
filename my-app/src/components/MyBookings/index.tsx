import {MyBookingsContainer, MyBookingsHeadingContainer, MyBookingsHeading, IconsContainer, MyBookingsSubContainer, FiltersContainer, FilterButton} from './bookingsstyled'
import { IoHomeOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { useEffect, useState } from 'react';
import MobilePopUpComponent from '../MobilePopUp';
import {getUserBookings} from '../../Redux/userBookings'
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../Redux/store';
import LoadingComponent from '../LoadingView';
import { render } from '@testing-library/react';

const MyBookings = ()=>{
    const [open, setOpen] = useState(false)
    const {bookings, isLoading, error} = useSelector((state: RootState)=>state.userBookings)

    const [upComing, setUpComing] = useState(true)
    const [previous, setPrevious] = useState(false)

    const dispatch = useDispatch<AppDispatch>()

    useEffect(()=>{
        dispatch(getUserBookings())
        console.log(bookings)
    }, [])

    const renderBookings = ()=>{
        if(isLoading){
            return (
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
                <LoadingComponent/>
              </div>    
            )
        }

        if(error){
            return <h1>Error</h1>
        }

        if(bookings.length === 0){
            return <h1>No Bookings Found</h1>
        }


    }
    

    return (
        <MyBookingsContainer>
            <MyBookingsHeadingContainer>
                <MyBookingsHeading>My Bookings</MyBookingsHeading>
                <IconsContainer>
                    <IoHomeOutline size = {24} color='1F41BB'/>
                    <RxHamburgerMenu onClick = {()=> setOpen(!open)} size = {24} color = '1F41BB'/>
                </IconsContainer>
            </MyBookingsHeadingContainer>
            <FiltersContainer>
                <FilterButton isactive = {upComing} onClick = {()=> {setUpComing(!upComing); setPrevious(!previous)}}>Upcoming Slots</FilterButton>
                <FilterButton isactive = {previous} onClick = {()=> {setUpComing(!upComing); setPrevious(!previous)}}>Previous Slots</FilterButton>
            </FiltersContainer>
            {renderBookings()}
            {open && <MobilePopUpComponent closePopUp={()=> setOpen(!open)}/>}
        </MyBookingsContainer>
    )
}

export default MyBookings