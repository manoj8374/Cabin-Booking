import {UpdateProfileContainer, UpdateProfileSubContainer, UpdateProfileImageContainer, UpdateProfileHeading, UpdateProfileForm, UpdateProfileInput, UpdateProfileButton, UpdateProfileArrowContainer} from './UpdateProfileStyled'
import { FaArrowLeft } from "react-icons/fa";

const UpdateProfile = () => {
    return (
        <UpdateProfileContainer>
            <UpdateProfileSubContainer>
                <UpdateProfileArrowContainer>
                    <FaArrowLeft strokeWidth={0} size={20}/>
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