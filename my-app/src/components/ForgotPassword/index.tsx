import { Link } from "react-router-dom";
import { IoIosArrowBack} from "react-icons/io";
import { FaEyeSlash } from "react-icons/fa";
import {ForgotPasswordContainer, ForgotPasswordSubContainer, ArrowContainer, ForgotPasswordHeadingContents, ForgotPasswordHeading, ForgotPasswordDescription, ForgotPasswordInputContainer, ForgotPasswordInput, ForgotPasswordLabel, PasswordWrapper, EyeIconContainer, ForgotPasswordButton, ForgotPasswordInsideContainer, ForgotPasswordInputDiv, ArrowContainerLargeDevices, StyledLink} from './forgotPasswordStyled'

const ForgotPasswordComponent = () => {
    let a;
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
                            <ForgotPasswordInput id = "email" placeholder="Enter your email" required = {true}/>
                        </ForgotPasswordInputDiv>
                        <ForgotPasswordInputDiv>
                            <ForgotPasswordLabel htmlFor='password'>Password</ForgotPasswordLabel>
                            <PasswordWrapper>
                                <ForgotPasswordInput id = "password" placeholder="Enter your new password" required = {true} />
                                <EyeIconContainer>
                                    <FaEyeSlash color='#E1E1E1'/>
                                </EyeIconContainer>
                            </PasswordWrapper>
                        </ForgotPasswordInputDiv>
                        <ForgotPasswordInputDiv>
                            <ForgotPasswordLabel htmlFor='confirmPassword'>Confirm Password</ForgotPasswordLabel>
                            <PasswordWrapper>
                                <ForgotPasswordInput id = "confirmPassword" placeholder="Confirm password" required = {true} />
                                <EyeIconContainer>
                                    <FaEyeSlash color='#E1E1E1'/>
                                </EyeIconContainer>
                            </PasswordWrapper>
                        </ForgotPasswordInputDiv>
                        <ForgotPasswordButton>
                            Reset Password
                        </ForgotPasswordButton>
                </ForgotPasswordInputContainer>
                </ForgotPasswordInsideContainer>
            </ForgotPasswordSubContainer>
        </ForgotPasswordContainer>
    )
}

export default ForgotPasswordComponent