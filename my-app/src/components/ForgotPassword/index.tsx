import React from 'react'
import { IoIosArrowBack} from "react-icons/io";
import { FaEyeSlash } from "react-icons/fa";
import {ForgotPasswordContainer, ForgotPasswordSubContainer, ArrowContainer, ForgotPasswordHeadingContents, ForgotPasswordHeading, ForgotPasswordDescription, ForgotPasswordInputContainer, ForgotPasswordInput, ForgotPasswordLabel, PasswordWrapper, EyeIconContainer, ForgotPasswordButton} from './forgotPasswordStyled'

const ForgotPasswordComponent = () => {
    let a;
    return (
        <ForgotPasswordContainer>
            <ForgotPasswordSubContainer>
                <ArrowContainer>
                    <IoIosArrowBack size={24}/>
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
                        <ForgotPasswordLabel htmlFor='email'>Your Email</ForgotPasswordLabel>
                        <ForgotPasswordInput id = "email" placeholder="Email" required = {true}/>
                        <ForgotPasswordLabel htmlFor='password'>Password</ForgotPasswordLabel>
                        <PasswordWrapper>
                            <ForgotPasswordInput id = "password" placeholder="Enter your new password" required = {true} />
                            <EyeIconContainer>
                                <FaEyeSlash color='#E1E1E1'/>
                            </EyeIconContainer>
                        </PasswordWrapper>
                        <ForgotPasswordLabel htmlFor='confirmPassword'>Confirm Password</ForgotPasswordLabel>
                        <PasswordWrapper>
                            <ForgotPasswordInput id = "confirmPassword" placeholder="Confirm password" required = {true} />
                            <EyeIconContainer>
                                <FaEyeSlash color='#E1E1E1'/>
                            </EyeIconContainer>
                        </PasswordWrapper>
                        <ForgotPasswordButton>
                            Reset Password
                        </ForgotPasswordButton>
                </ForgotPasswordInputContainer>
            </ForgotPasswordSubContainer>
        </ForgotPasswordContainer>
    )
}

export default ForgotPasswordComponent