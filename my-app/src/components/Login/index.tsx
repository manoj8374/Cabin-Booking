import {useEffect, useState, useRef} from 'react'
import { useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'
import { url } from '../../Utils'
import fetchApi from '../../Utils/fetchDetails'
import {ErrorMessage,LoginContainer, LoginSubContainer, LoginContentsContainer, LoginHeadingContents, LoginHeading, LoginDescription, LoginInputContainer, LoginInput, ForgotPassword, LoginButton, CreateNewAccount} from "./loginStyled"
import { EyeIconContainer, PasswordWrapper } from '../ForgotPassword/forgotPasswordStyled'
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { fetchUserProfile } from '../../Redux/userSlice'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../../Redux/store'

const Login = () => {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [error, setError] = useState<string>('')
    const [loggedIn, setLoggedIn] = useState(true)
    const [isPasswordShown, setIsPasswordShown] = useState(false)

    const passwordInputRef = useRef<HTMLInputElement | null>(null);

    const navigate = useNavigate()
    const dispatch = useDispatch<AppDispatch>()

    const onSubmitSuccess = (accessToken: string, refreshToken: string)=>{
        Cookies.set('access_token', accessToken, {expires: 1})
        Cookies.set("refresh_token", accessToken, {expires: 1})
        navigate('/')
        setLoggedIn(true)
    }

    const submitLogin = async(e: any)=>{
        e.preventDefault()
        if(email === "" || password === ""){
            setError("Please enter email and password")
        }else{
            const data = {email: email, password: password}

            const options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            }

            const response = await fetchApi(`${url}/user_account/login/v1/`, options);

            if(response.success){
                onSubmitSuccess(response.data.access_token, response.data.refresh_token)
            }else{
                if(response.error){
                    setError("Something went wrong")
                }else{
                    setError(response.data.error_message)
                }
            }
        }
    }

    useEffect(()=>{
        if(Cookies.get('access_token')){
            setLoggedIn(true)
            navigate('/')
        }else{
            setLoggedIn(false)
        }
    }, [navigate])


    if(loggedIn){
        return null
    }

    return (
        <LoginContainer>
            <LoginSubContainer>
                <LoginContentsContainer>
                    <LoginHeadingContents>
                        <LoginHeading data-testid = "login-heading">Login</LoginHeading>
                        <LoginDescription data-testid = "login-description">Please provide company’s email</LoginDescription>
                    </LoginHeadingContents>
                    <LoginInputContainer>
                        <LoginInput placeholder="Email" required = {true} value = {email} onChange = {(e)=>setEmail(e.target.value)}/>
                        <PasswordWrapper>
                            <LoginInput placeholder="Password" type = {isPasswordShown ? "text" : "password"} required = {true} value = {password} onChange = {(e)=>setPassword(e.target.value)}/>
                            <EyeIconContainer onClick = {(e)=>{e.preventDefault(); setIsPasswordShown(!isPasswordShown); passwordInputRef.current?.focus();}}>
                                {isPasswordShown ? <FaEye size={20} color='#E1E1E1'/> : <FaEyeSlash size={20} color='#E1E1E1'/>}
                                    
                            </EyeIconContainer>
                        </PasswordWrapper>
                        <ForgotPassword data-testid = "forgot-password" href = "/forgot-password">Forgot Password?</ForgotPassword>
                        {error && <ErrorMessage data-testid = "login-error">{error}</ErrorMessage>}
                        <LoginButton data-testid = "login-button" type = "submit" onClick = {submitLogin}>Login</LoginButton>
                        <CreateNewAccount href = "/create-account">Create new account</CreateNewAccount>
                    </LoginInputContainer>
                </LoginContentsContainer>
            </LoginSubContainer>
        </LoginContainer>
    )
}

export default Login