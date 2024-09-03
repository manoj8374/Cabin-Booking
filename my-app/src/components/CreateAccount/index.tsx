import {useState} from 'react'
import { LoginContainer, LoginSubContainer, LoginContentsContainer, LoginHeadingContents, LoginHeading, LoginDescription, LoginInputContainer, LoginInput, ForgotPassword, LoginButton, CreateNewAccount} from "./createAccountStyled"

const CreateAccount = () => {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [fullName, setFullName] = useState<string>('')
    const [teamName, setTeamName] = useState<string>('')
    const [contactNumber, setContactNumber] = useState<string>('')

    const submitLogin = (e: any)=>{
        e.preventDefault()
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
                        <LoginInput placeholder="Password" type = "password" required = {true} value = {password} onChange = {(e)=>setPassword(e.target.value)}/>
                        <LoginInput placeholder="Full Name" type = "text" required = {true} value = {fullName} onChange = {(e)=>setFullName(e.target.value)}/>
                        <LoginInput placeholder="Team Name" type = "text" required = {true} value = {teamName} onChange = {(e)=>setTeamName(e.target.value)}/>
                        <LoginInput placeholder="Contact Number" type = "text" required = {true} value = {contactNumber} onChange = {(e)=>setContactNumber(e.target.value)}/>
                        <LoginButton type = "submit" onClick = {submitLogin}>Sign Up</LoginButton>
                        <CreateNewAccount href = "/login">Already Have an account</CreateNewAccount>
                    </LoginInputContainer>
                </LoginContentsContainer>
            </LoginSubContainer>
        </LoginContainer>
    )
}

export default CreateAccount