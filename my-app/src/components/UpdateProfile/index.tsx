import { useState, useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import {UpdateProfileContainer, UpdateProfileSubContainer, UpdateProfileImageContainer, UpdateProfileHeading, UpdateProfileForm, UpdateProfileInput, UpdateProfileButton, UpdateProfileArrowContainer, StyledLink, ArrowContainerLargeDevices} from './UpdateProfileStyled'
import { FaArrowLeft } from "react-icons/fa";
import { IoIosArrowBack} from "react-icons/io";
import { AppDispatch, RootState } from '../../Redux/store';
import { url } from '../../Utils';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import {fetchUserProfile} from '../../Redux/userSlice'
import { set } from 'date-fns';

const UpdateProfile = () => {
    const {first_name, last_name, team_name, contact_number, username} = useSelector((state: RootState) => state.user)
    const [setusername, setUsername] = useState<string>("")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [teamName, setTeamName] = useState("")
    const [contactNumber, setContactNumber] = useState("")

    const [errorMsg, setErrorMsg] = useState<string>("")

    const navigate = useNavigate()

    const dispatch = useDispatch<AppDispatch>()

    

    useEffect(()=>{
        dispatch(fetchUserProfile())
        setFirstName(first_name)
        setLastName(last_name)
        setTeamName(team_name)
        setContactNumber(contact_number)
        setUsername(username)
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
                    username: setusername,
                    firstname: firstName,
                    lastname: lastName,
                    team_name: teamName,
                    contact_number: contactNumber
                })
            })

            const data = await response.json()

            if(response.status === 200){
                dispatch(fetchUserProfile())
                setUsername("")
                setFirstName("")
                setLastName("")
                setTeamName("")
                setContactNumber("")
                setErrorMsg("Profile Updated Successfully")
                setTimeout(() => {
                    navigate("/")
                }, 1000)
            }

        }catch(e){

        }
    }

    return (
        <UpdateProfileContainer>
            <ArrowContainerLargeDevices>
                <StyledLink onClick={() => navigate(-1)}>
                    <IoIosArrowBack size={24}/>
                </StyledLink>
            </ArrowContainerLargeDevices>
            <UpdateProfileSubContainer>
                <UpdateProfileArrowContainer>
                    <StyledLink onClick={() => navigate(-1)}>
                        <FaArrowLeft strokeWidth={0} size={20}/>
                    </StyledLink>
                </UpdateProfileArrowContainer>
                <UpdateProfileImageContainer>
                    {first_name.charAt(0).toUpperCase()}
                </UpdateProfileImageContainer>
                <UpdateProfileHeading>
                    {first_name} {last_name}
                </UpdateProfileHeading>
                <UpdateProfileForm>
                    <UpdateProfileInput type = "text" placeholder = "Username" onChange={(e) => setUsername(e.target.value)}/>
                    <UpdateProfileInput type = "text" placeholder = "First Name" value={firstName} onChange = {(e) => setFirstName(e.target.value)}/>
                    <UpdateProfileInput type = "text" placeholder = "Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)}/>
                    <UpdateProfileInput type = "text" placeholder = "Team Name" value = {teamName} onChange={(e) => setTeamName(e.target.value)}/>
                    <UpdateProfileInput type = "text" placeholder = "Contact number" value = {contactNumber} onChange={(e) => setContactNumber(e.target.value)}/>
                    {errorMsg && <p>{errorMsg}</p>}
                    <UpdateProfileButton onClick={submitForm}>Update Profile</UpdateProfileButton>
                </UpdateProfileForm>
            </UpdateProfileSubContainer>
        </UpdateProfileContainer>
    )
}

export default UpdateProfile