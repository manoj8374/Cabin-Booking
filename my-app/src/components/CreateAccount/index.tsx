import {useEffect, useState} from 'react'
import {ErrorMsg, LoginContainer, LoginSubContainer, LoginContentsContainer, LoginHeadingContents, LoginHeading, LoginDescription, LoginInputContainer, LoginInput, ForgotPassword, LoginButton, CreateNewAccount} from "./createAccountStyled"
import Cookies from 'js-cookie'
import {url} from '../../Utils'
import { useNavigate } from 'react-router-dom'

const CreateAccount = () => {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [fullName, setFullName] = useState<string>('')
    const [teamName, setTeamName] = useState<string>('')
    const [contactNumber, setContactNumber] = useState<string>('')
    const [username, setUserName] = useState<string>('')
    const [error, setError] = useState<string>('')
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(true)

    const navigate = useNavigate()
    const submitSignUp = async (e: any)=>{
        e.preventDefault()
        if(email === '' || password === '' || fullName === '' || teamName === '' || contactNumber === ''){
            setError("Please fill all the fields")
        }else{
            //make an api call here
            const data = {
                email: email,
                password: password,
                username: username,
                first_name: fullName.split(' ')[0],
                last_name: fullName.split(' ')[1],
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
            try{
                const response: Response = await fetch(`${url}/user_account/signup/v1`, options)
                const data = await response.json()
                if (response.status === 200) {
                setError('')
                Cookies.set('access_token', data.access_token)
                Cookies.set('refresh_token', data.refresh_token)
                navigate('/')
            }else{
                setError(data.error_message)
            }
            }catch(error){
                console.log(error)
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
                        <LoginHeading>Create Account</LoginHeading>
                        <LoginDescription>Please provide your company email and name as per company</LoginDescription>
                    </LoginHeadingContents>
                    <LoginInputContainer>
                        <LoginInput placeholder="Email" required = {true} value = {email} onChange = {(e)=>setEmail(e.target.value)}/>
                        <LoginInput placeholder="Username" type = "text" required = {true} value = {username} onChange = {(e)=>setUserName(e.target.value)}/>
                        <LoginInput placeholder="Password" type = "password" required = {true} value = {password} onChange = {(e)=>setPassword(e.target.value)}/>
                        <LoginInput placeholder="Full Name" type = "text" required = {true} value = {fullName} onChange = {(e)=>setFullName(e.target.value)}/>
                        <LoginInput placeholder="Team Name" type = "text" required = {true} value = {teamName} onChange = {(e)=>setTeamName(e.target.value)}/>
                        <LoginInput placeholder="Contact Number" type = "text" required = {true} value = {contactNumber} onChange = {(e)=>setContactNumber(e.target.value)}/>
                        {error.length > 0 && <ErrorMsg>{error}</ErrorMsg>}
                        <LoginButton type = "submit" onClick = {submitSignUp}>Sign Up</LoginButton>
                        <CreateNewAccount href = "/login">Already Have an account</CreateNewAccount>
                    </LoginInputContainer>
                </LoginContentsContainer>
            </LoginSubContainer>
        </LoginContainer>
    )
}

export default CreateAccount