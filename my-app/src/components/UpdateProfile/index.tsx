import { useState, useEffect } from 'react';
import {UpdateProfileContainer, UpdateProfileSubContainer, UpdateProfileImageContainer, UpdateProfileHeading, UpdateProfileForm, UpdateProfileInput, UpdateProfileButton, UpdateProfileArrowContainer, StyledLink, ArrowContainerLargeDevices} from './UpdateProfileStyled'
import { FaArrowLeft } from "react-icons/fa";
import { IoIosArrowBack} from "react-icons/io";
import { useSelector } from 'react-redux';
import { RootState } from '../../Redux/store';
import { url } from '../../Utils';
import Cookies from 'js-cookie';

const UpdateProfile = () => {
    const {first_name, last_name} = useSelector((state: RootState) => state.user)
    const [username, setUsername] = useState<string>("")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [teamName, setTeamName] = useState("")
    const [contactNumber, setContactNumber] = useState("")

    useEffect(()=>{
    }, [])

    const submitForm = async(e: any) => {
        e.preventDefault()
        try{
            const response = await fetch(`${url}/user/profile_update/v1`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${Cookies.get('access_token')}`
                },
                body: JSON.stringify({
                    username: username,
                    first_name: firstName,
                    last_name: lastName,
                    team_name: teamName,
                    contact_number: contactNumber
                })
            })

            console.log({
                username: username,
                first_name: firstName,
                last_name: lastName,
                team_name: teamName,
                contact_number: contactNumber
            })

            const data = await response.json()
            console.log(data)
        }catch(e){

        }
    }

    return (
        <UpdateProfileContainer>
            <ArrowContainerLargeDevices>
                <StyledLink to = "/login">
                    <IoIosArrowBack size={24}/>
                </StyledLink>
            </ArrowContainerLargeDevices>
            <UpdateProfileSubContainer>
                <UpdateProfileArrowContainer>
                    <StyledLink to = "/login">
                        <FaArrowLeft strokeWidth={0} size={20}/>
                    </StyledLink>
                </UpdateProfileArrowContainer>
                <UpdateProfileImageContainer>
                    M
                </UpdateProfileImageContainer>
                <UpdateProfileHeading>
                    Manoj Vakiti
                </UpdateProfileHeading>
                <UpdateProfileForm>
                    <UpdateProfileInput type = "text" placeholder = "Username" value={username} onChange={(e) => setUsername(e.target.value)}/>
                    <UpdateProfileInput type = "text" placeholder = "First Name" value={firstName} onChange = {(e) => setFirstName(e.target.value)}/>
                    <UpdateProfileInput type = "text" placeholder = "Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)}/>
                    <UpdateProfileInput type = "text" placeholder = "Team Name" value = {teamName} onChange={(e) => setTeamName(e.target.value)}/>
                    <UpdateProfileInput type = "text" placeholder = "Contact number" value = {contactNumber} onChange={(e) => setContactNumber(e.target.value)}/>
                    <UpdateProfileButton onClick={submitForm}>Update Profile</UpdateProfileButton>
                </UpdateProfileForm>
            </UpdateProfileSubContainer>
        </UpdateProfileContainer>
    )
}

export default UpdateProfile