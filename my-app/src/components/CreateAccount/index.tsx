import {useEffect, useState} from 'react'
import {ErrorMsg, LoginContainer, LoginSubContainer, LoginContentsContainer, LoginHeadingContents, LoginHeading, LoginDescription, LoginInputContainer, LoginInput, ForgotPassword, LoginButton, CreateNewAccount, NumberInput} from "./createAccountStyled"
import Cookies from 'js-cookie'
import {url} from '../../Utils'
import { useNavigate } from 'react-router-dom'
import fetchApi from '../../Utils/fetchDetails'

const CreateAccount = () => {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [teamName, setTeamName] = useState<string>('')
    const [contactNumber, setContactNumber] = useState<string>('')
    const [username, setUserName] = useState<string>('')
    const [firstname, setFirstName] = useState<string>('')
    const [lastname, setLastName] = useState<string>('')
    const [error, setError] = useState<string>('')
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(true)

    const onSubmitSuccess = (accessToken: string, refreshToken: string)=> {
        Cookies.set('access_token', accessToken)
        Cookies.set("refresh_token", accessToken)
        navigate('/')
        setError('')
    }

    const navigate = useNavigate()
    const submitSignUp = async (e: any)=>{
        e.preventDefault()
        if(email === '' || firstname === '' || lastname === '' || teamName === '' || contactNumber === ''){
            setError("Please fill all the fields")
        }  
        else if(contactNumber.length !== 10){
            setError("Number must be of 10 digits")
        }else{
            const data = {
                email: email,
                password: password,
                username: username,
                first_name: firstname,
                last_name: lastname,
                team_name: teamName,
                contact_number: contactNumber
            }
            const options = {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            }

            const response = await fetchApi(`${url}/user_account/signup/v1`, options);
            if (response.success) {
                onSubmitSuccess(response.data.access_token, response.data.refresh_token)
            }else{
                setError(response.data.error_message)
            }
        }
    }

    useEffect(()=>{
        if(Cookies.get('access_token')){
            navigate("/")
        }else{
            setIsLoggedIn(false)
        }
    }, [])

    if(isLoggedIn){
        return null
    }

    return (
        <LoginContainer>
            <LoginSubContainer>
                <LoginContentsContainer>
                    <LoginHeadingContents>
                        <LoginHeading data-testid = "create-account-heading">Create Account</LoginHeading>
                        <LoginDescription data-testid = "create-account-description">Please provide your company email and name as per company</LoginDescription>
                    </LoginHeadingContents>
                    <LoginInputContainer>
                        <LoginInput placeholder="Email" required = {true} value = {email} onChange = {(e)=>setEmail(e.target.value)}/>
                        <LoginInput placeholder="Username" type = "text" required = {true} value = {username} onChange = {(e)=>setUserName(e.target.value)}/>
                        <LoginInput placeholder="First Name" type = "text" required = {true} value = {firstname} onChange = {(e)=>setFirstName(e.target.value)}/>
                        <LoginInput placeholder="Last Name" type = "text" required = {true} value = {lastname} onChange = {(e)=>setLastName(e.target.value)}/>
                        <LoginInput placeholder="Team Name" type = "text" required = {true} value = {teamName} onChange = {(e)=>setTeamName(e.target.value)}/>
                        <NumberInput placeholder="Contact Number" type = "number" required = {true} value = {contactNumber} onChange = {(e: any)=> e.target.value.length <= 10 ? setContactNumber(e.target.value) : null}/>
                        <LoginInput placeholder="Password" type = "password" required = {true} value = {password} onChange = {(e)=> setPassword(e.target.value)}/>
                        {error.length > 0 && <ErrorMsg data-testid = "create-account-error">{error}</ErrorMsg>}
                        <LoginButton type = "submit" onClick = {submitSignUp} data-testid = "create-account-button">Sign Up</LoginButton>
                        <CreateNewAccount href = "/login">Already Have an account</CreateNewAccount>
                    </LoginInputContainer>
                </LoginContentsContainer>
            </LoginSubContainer>
        </LoginContainer>
    )
}

export default CreateAccount