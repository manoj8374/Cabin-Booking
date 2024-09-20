import { Link } from "react-router-dom";
import { IoIosArrowBack} from "react-icons/io";
import { FaEyeSlash } from "react-icons/fa";
import {ForgotPasswordContainer, ErrorMessage, ForgotPasswordSubContainer, ArrowContainer, ForgotPasswordHeadingContents, ForgotPasswordHeading, ForgotPasswordDescription, ForgotPasswordInputContainer, ForgotPasswordInput, ForgotPasswordLabel, PasswordWrapper, EyeIconContainer, ForgotPasswordButton, ForgotPasswordInsideContainer, ForgotPasswordInputDiv, ArrowContainerLargeDevices, StyledLink} from './forgotPasswordStyled'
import { useState } from "react";
import { url } from "../../Utils";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const ForgotPasswordComponent = () => {
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [email, setEmail] = useState("")
    const [errorMessage, setErrorMessage] = useState("")
    const [error, setError] = useState(false)

    const navigate = useNavigate()

    const changePassword = async (e: any)=>{
        e.preventDefault()
        const response = await fetch(`${url}/user_accounts/update_password/v1`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${Cookies.get('access_token')}`
            },
            body: JSON.stringify({
                email: email,
                password: password,
                new_password: confirmPassword
            })
        })
        const data = await response.json()
        if(response.status == 200){
            setErrorMessage("Password Updated Successfully")
            setTimeout(()=>{navigate('/login')}, 2000)
            setError(false)
        }else{
            setErrorMessage(data.error_message)
            setError(true)
        }
    }
    return (
        <ForgotPasswordContainer>
            <ArrowContainerLargeDevices>
                <StyledLink to = "/update-profile">
                    <IoIosArrowBack size={28}/>
                </StyledLink>
            </ArrowContainerLargeDevices>
            <ForgotPasswordSubContainer>
                <ForgotPasswordInsideContainer>
                <ArrowContainer>
                    <StyledLink to = "/update-profile">
                        <IoIosArrowBack size={24}/>
                    </StyledLink>
                </ArrowContainer>
                <ForgotPasswordHeadingContents>
                    <ForgotPasswordHeading>
                        Forgot Password
                    </ForgotPasswordHeading>
                    <ForgotPasswordDescription>
                        Please enter your email to reset the password
                    </ForgotPasswordDescription>
                </ForgotPasswordHeadingContents>
                <ForgotPasswordInputContainer>
                        <ForgotPasswordInputDiv>
                            <ForgotPasswordLabel htmlFor='email'>Your Email</ForgotPasswordLabel>
                            <ForgotPasswordInput id = "email" onChange={(e)=>{setEmail(e.target.value)}}  placeholder="Enter your email" required = {true}/>
                        </ForgotPasswordInputDiv>
                        <ForgotPasswordInputDiv>
                            <ForgotPasswordLabel htmlFor='password'>Password</ForgotPasswordLabel>
                            <PasswordWrapper>
                                <ForgotPasswordInput id = "password" onChange = {(e)=> {setPassword(e.target.value)}} placeholder="Enter your new password" required = {true} />
                                <EyeIconContainer>
                                    <FaEyeSlash color='#E1E1E1'/>
                                </EyeIconContainer>
                            </PasswordWrapper>
                        </ForgotPasswordInputDiv>
                        <ForgotPasswordInputDiv>
                            <ForgotPasswordLabel htmlFor='confirmPassword'>Confirm Password</ForgotPasswordLabel>
                            <PasswordWrapper>
                                <ForgotPasswordInput id = "confirmPassword" onChange = {(e)=> {setConfirmPassword(e.target.value)}} placeholder="Confirm password" required = {true} />
                                <EyeIconContainer>
                                    <FaEyeSlash color='#E1E1E1'/>
                                </EyeIconContainer>
                            </PasswordWrapper>
                        </ForgotPasswordInputDiv>
                        {errorMessage && <ErrorMessage error = {error}>{errorMessage}</ErrorMessage>}
                        <ForgotPasswordButton onClick={changePassword}>
                            Reset Password
                        </ForgotPasswordButton>
                </ForgotPasswordInputContainer>
                </ForgotPasswordInsideContainer>
            </ForgotPasswordSubContainer>
        </ForgotPasswordContainer>
    )
}

export default ForgotPasswordComponent