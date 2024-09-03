import {UpdateProfileContainer, UpdateProfileSubContainer, UpdateProfileImageContainer, UpdateProfileHeading, UpdateProfileForm, UpdateProfileInput, UpdateProfileButton, UpdateProfileArrowContainer, StyledLink, ArrowContainerLargeDevices} from './UpdateProfileStyled'
import { FaArrowLeft } from "react-icons/fa";
import { IoIosArrowBack} from "react-icons/io";

const UpdateProfile = () => {
    return (
        <UpdateProfileContainer>
            <ArrowContainerLargeDevices>
                <StyledLink to = "/login">
                    <IoIosArrowBack size={24}/>
                </StyledLink>
            </ArrowContainerLargeDevices>
            <UpdateProfileSubContainer>
                <UpdateProfileArrowContainer>
                    <StyledLink to = "/login">
                        <FaArrowLeft strokeWidth={0} size={20}/>
                    </StyledLink>
                </UpdateProfileArrowContainer>
                <UpdateProfileImageContainer>
                    M
                </UpdateProfileImageContainer>
                <UpdateProfileHeading>
                    Manoj Vakiti
                </UpdateProfileHeading>
                <UpdateProfileForm>
                    <UpdateProfileInput type = "text" placeholder = "Name" />
                    <UpdateProfileInput type = "text" placeholder = "Team Name" />
                    <UpdateProfileInput type = "text" placeholder = "Email" />
                    <UpdateProfileInput type = "text" placeholder = "Phone number" />
                    <UpdateProfileButton>Update Profile</UpdateProfileButton>
                </UpdateProfileForm>
            </UpdateProfileSubContainer>
        </UpdateProfileContainer>
    )
}

export default UpdateProfile