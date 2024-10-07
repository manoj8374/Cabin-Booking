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
import fetchApi from '../../Utils/fetchDetails';
import { ErrorMessage } from '../ForgotPassword/forgotPasswordStyled';

const UpdateProfile = () => {
    const {first_name, last_name, team_name, contact_number} = useSelector((state: RootState) => state.user)
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [teamName, setTeamName] = useState("")
    const [contactNumber, setContactNumber] = useState("")

    const [isError, setIsError] = useState(false)
    const [errorMsg, setErrorMsg] = useState<string>("")

    const navigate = useNavigate()

    const dispatch = useDispatch<AppDispatch>()

    useEffect(()=>{
        dispatch(fetchUserProfile())
    }, [dispatch])

    useEffect(() => {
        setFirstName(first_name);
        setLastName(last_name);
        setTeamName(team_name);
        setContactNumber(contact_number);
    }, [first_name, last_name, team_name, contact_number]);

    const submitForm = async(e: any) => {
        e.preventDefault()
        const body = {
            firstname: firstName,
            lastname: lastName,
            team_name: teamName,
            contact_number: contactNumber
        }

        const options = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${Cookies.get('access_token')}`
            },
            body: JSON.stringify(body)
        }

        if(!firstName || !lastName || !teamName || !contactNumber){
            setIsError(true)
            setErrorMsg("Please fill all the fields")
            return
        }

        const response = await fetchApi(`${url}/user/profile_update/v1`, options)

        if(response.success){
            setIsError(false)
            setErrorMsg("Profile Updated Successfully")
            setTimeout(() => {
                navigate("/")
            }, 5000)
        }else {
            setIsError(true)
            setErrorMsg("Failed to update profile. Please try again.");
        }
    }

    return (
        <UpdateProfileContainer>
            <ArrowContainerLargeDevices>
                <StyledLink data-testid="back-button" onClick={() => navigate(-1)}>
                    <IoIosArrowBack size={24}/>
                </StyledLink>
            </ArrowContainerLargeDevices>
            <UpdateProfileSubContainer>
                <UpdateProfileArrowContainer>
                    <StyledLink data-testid="back-button-mobile" onClick={() => navigate(-1)}>
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
                    <UpdateProfileInput type = "text" placeholder = "First Name" value={firstName} onChange = {(e) => setFirstName(e.target.value)}/>
                    <UpdateProfileInput type = "text" placeholder = "Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)}/>
                    <UpdateProfileInput type = "text" placeholder = "Team Name" value = {teamName} onChange={(e) => setTeamName(e.target.value)}/>
                    <UpdateProfileInput type = "text" placeholder = "Contact number" value = {contactNumber} onChange={(e) => setContactNumber(e.target.value)}/>
                    {errorMsg && <ErrorMessage error={isError}>{errorMsg}</ErrorMessage>}
                    <UpdateProfileButton data-testid="update-profile-button" onClick={submitForm}>Update Profile</UpdateProfileButton>
                </UpdateProfileForm>
            </UpdateProfileSubContainer>
        </UpdateProfileContainer>
    )
}

export default UpdateProfile