import { Link } from "react-router-dom";
import { IoIosArrowBack} from "react-icons/io";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import {ForgotPasswordContainer, ErrorMessage, ForgotPasswordSubContainer, ArrowContainer, ForgotPasswordHeadingContents, ForgotPasswordHeading, ForgotPasswordDescription, ForgotPasswordInputContainer, ForgotPasswordInput, ForgotPasswordLabel, PasswordWrapper, EyeIconContainer, ForgotPasswordButton, ForgotPasswordInsideContainer, ForgotPasswordInputDiv, ArrowContainerLargeDevices, StyledLink} from './forgotPasswordStyled'
import { useState } from "react";
import { url } from "../../Utils";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import fetchApi from "../../Utils/fetchDetails";

const ForgotPasswordComponent = () => {
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [email, setEmail] = useState("")
    const [errorMessage, setErrorMessage] = useState("")
    const [error, setError] = useState(false)
    const [isPasswordShown, setIsPasswordShown] = useState(false)
    const [isNewPasswordShown, setIsNewPasswordShown] = useState(false)

    const navigate = useNavigate()

    const changePassword = async (e: any)=>{
        e.preventDefault()
        if(password === "" || confirmPassword === "" || email === ""){
            setErrorMessage("Please fill all the fields")
            setError(true)
            return
        }else if(password === confirmPassword){
            setErrorMessage("Same Password")
            setError(true)
            return
        }else{
            const options = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${Cookies.get('access_token')}`
                },
                body: JSON.stringify({
                    email: email,
                    old_password: password,
                    new_password: confirmPassword
                })}

            const response = await fetchApi(`${url}/user_accounts/update_password/v1`, options)

            if(response.success){
                setErrorMessage("Password Updated Successfully")
                setTimeout(()=>{navigate('/login')}, 2000)
                setError(false)
            }else{
                setErrorMessage(response.data.error_message)
                setError(true)
            }
        }
    }
    return (
        <ForgotPasswordContainer>
            <ArrowContainerLargeDevices>
                <StyledLink data-testid="back-arrow" to = "#" onClick = {()=> navigate(-1)}>
                    <IoIosArrowBack size={28}/>
                </StyledLink>
            </ArrowContainerLargeDevices>
            <ForgotPasswordSubContainer>
                <ForgotPasswordInsideContainer>
                <ArrowContainer>
                    <StyledLink to = "#" onClick = {()=> navigate(-1)}>
                        <IoIosArrowBack size={24}/>
                    </StyledLink>
                </ArrowContainer>
                <ForgotPasswordHeadingContents>
                    <ForgotPasswordHeading>
                        Change Password
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
                                <ForgotPasswordInput id = "password" type = {isPasswordShown ? "text" : "password"} onChange = {(e)=> {setPassword(e.target.value)}} placeholder="Enter your old password" required = {true} />
                                <EyeIconContainer onClick={() => setIsPasswordShown(!isPasswordShown)}>
                                    {isPasswordShown ? <FaEye size={20} color='#E1E1E1'/> : <FaEyeSlash size={20} color='#E1E1E1'/>}
                                </EyeIconContainer>
                            </PasswordWrapper>
                        </ForgotPasswordInputDiv>
                        <ForgotPasswordInputDiv>
                            <ForgotPasswordLabel htmlFor='confirmPassword'>New Password</ForgotPasswordLabel>
                            <PasswordWrapper>
                                <ForgotPasswordInput id = "confirmPassword" type = {isNewPasswordShown ? "text" : "password"} onChange = {(e)=> {setConfirmPassword(e.target.value)}} placeholder="New password" required = {true} />
                                <EyeIconContainer onClick={() => setIsNewPasswordShown(!isNewPasswordShown)}>
                                    {isNewPasswordShown ? <FaEye size={20} color='#E1E1E1'/> : <FaEyeSlash size={20} color='#E1E1E1'/>}
                                </EyeIconContainer>
                            </PasswordWrapper>
                        </ForgotPasswordInputDiv>
                        {errorMessage && <ErrorMessage error = {error}>{errorMessage}</ErrorMessage>}
                        <ForgotPasswordButton onClick={changePassword} data-testid = "forgot-password-button">
                            Reset Password
                        </ForgotPasswordButton>
                </ForgotPasswordInputContainer>
                </ForgotPasswordInsideContainer>
            </ForgotPasswordSubContainer>
        </ForgotPasswordContainer>
    )
}

export default ForgotPasswordComponent