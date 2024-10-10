import { useEffect, useState,useRef } from "react";
import {SideBarContainer, ProfileContainer} from './navbarStyled'
import {RxCross2 } from "react-icons/rx";
import { useSelector } from "react-redux";
import { RootState } from "../../Redux/store";
import { FaArrowRight } from "react-icons/fa";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { MdNavigateNext } from "react-icons/md";

const Navbar = ()=>{
    const divRef = useRef<HTMLDivElement | null>(null);

    const {first_name = "", last_name = "", team_name = "", contact_number = ""} = useSelector((state: RootState)=>state.user || {})
    const [myProfile, setMyProfile] = useState(false)
    const [myBookings, setMyBookings] = useState(false)

    const navigate = useNavigate()

    const logout = ()=>{
        Cookies.remove("access_token")
        Cookies.remove("refresh_token")
        navigate("/login")
    }
        

    return(
        <SideBarContainer>
            <ProfileContainer>M</ProfileContainer>
            <ProfileContainer>M</ProfileContainer>
            <ProfileContainer>M</ProfileContainer>
            <ProfileContainer>M</ProfileContainer>


            <ProfileContainer>M</ProfileContainer>
            <ProfileContainer>M</ProfileContainer>
            <ProfileContainer>M</ProfileContainer>
            <ProfileContainer>M</ProfileContainer>
            <ProfileContainer>M</ProfileContainer>

            <ProfileContainer>M</ProfileContainer>
            <ProfileContainer>M</ProfileContainer>
            <ProfileContainer>M</ProfileContainer>
            <ProfileContainer>M</ProfileContainer>
            <ProfileContainer>M</ProfileContainer>
            <ProfileContainer>M</ProfileContainer>
            <ProfileContainer>M</ProfileContainer>
            <ProfileContainer>M</ProfileContainer>
            <ProfileContainer>M</ProfileContainer>
            
        </SideBarContainer>
    )
}

export default Navbar;
