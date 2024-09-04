import {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { LoginContainer, LoginSubContainer, LoginContentsContainer, LoginHeadingContents, LoginHeading, LoginDescription, LoginInputContainer, LoginInput, ForgotPassword, LoginButton, CreateNewAccount} from "./loginStyled"

const Login = () => {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const navigate = useNavigate()

    const submitLogin = (e: any)=>{
        e.preventDefault()
        navigate('/')
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
                        <LoginButton type = "submit" onClick = {submitLogin}>Login</LoginButton>
                        <CreateNewAccount href = "/create-account">Create new account</CreateNewAccount>
                    </LoginInputContainer>
                </LoginContentsContainer>
            </LoginSubContainer>
        </LoginContainer>
    )
}

export default Login