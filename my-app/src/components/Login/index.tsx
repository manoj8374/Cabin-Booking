import {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'
import { url } from '../../Utils'
import {ErrorMessage,LoginContainer, LoginSubContainer, LoginContentsContainer, LoginHeadingContents, LoginHeading, LoginDescription, LoginInputContainer, LoginInput, ForgotPassword, LoginButton, CreateNewAccount} from "./loginStyled"

const Login = () => {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [error, setError] = useState<string>('')
    const [loggedIn, setLoggedIn] = useState(true)

    const navigate = useNavigate()

    const submitLogin = async(e: any)=>{
        e.preventDefault()
        if(email === "" || password === ""){
            setError("Please enter email and password")
        }else{
            try{
                const data = {
                    email: email,
                    password: password
                }

                console.log(data)

                const response = await fetch(`${url}/user_account/login/v1/`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                })

                const responseJson = await response.json()
                if(response.status === 200){
                    Cookies.set('access_token', responseJson.access_token)
                    Cookies.set('refresh', responseJson.refresh_token)
                    navigate('/')
                }else{
                    console.log(responseJson)
                    setError(responseJson.error_message)
                }
            }catch(e){
                console.log(e)
            }
        }
        // 
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
                        <LoginHeading>Login</LoginHeading>
                        <LoginDescription>Please provide company’s email</LoginDescription>
                    </LoginHeadingContents>
                    <LoginInputContainer>
                        <LoginInput placeholder="Email" required = {true} value = {email} onChange = {(e)=>setEmail(e.target.value)}/>
                        <LoginInput placeholder="Password" type = "password" required = {true} value = {password} onChange = {(e)=>setPassword(e.target.value)}/>
                        <ForgotPassword href = "/forgot-password">Forgot Password?</ForgotPassword>
                        {error && <ErrorMessage>{error}</ErrorMessage>}
                        <LoginButton type = "submit" onClick = {submitLogin}>Login</LoginButton>
                        <CreateNewAccount href = "/create-account">Create new account</CreateNewAccount>
                    </LoginInputContainer>
                </LoginContentsContainer>
            </LoginSubContainer>
        </LoginContainer>
    )
}

export default Login