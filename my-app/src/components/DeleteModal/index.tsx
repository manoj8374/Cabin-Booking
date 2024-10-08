import Cookies from "js-cookie"
import { url } from "../../Utils"
import { DeleteOverlay, DeleteModalContainer, DeleteModalContentsContainer, ButtonsContaier, DeleteHeading, DeleteButton, CancelButton, DeleteSubHeading, HeadingContainer} from "./deleteModalStyled"

interface DeleteModalProps{
    closePopUp: () => void
    deleteBooking: ()=> void
}

const dropIn = {
    hidden: {
        opacity: 0,
        scale: 0.5
    },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.1,
            type: "spring",
            damping: 35,
            stiffness: 500,
        }
    },
    exit: {
        opacity: 0,
        scale: 0.5,
        tranisition: {
            duration: 0.2
        }
    }
}

const DeleteModal: React.FC<DeleteModalProps> = ({closePopUp, deleteBooking})=>{

    return (
        <DeleteOverlay onClick = {closePopUp} initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
            <DeleteModalContainer onClick={e => e.stopPropagation()} variants={dropIn} initial='hidden' animate='visible' exit='exit'>
                <DeleteModalContentsContainer>
                    <HeadingContainer>
                        <DeleteHeading>Are you sure you want to delete the booking?</DeleteHeading>
                        <DeleteSubHeading>This action cannot be undone</DeleteSubHeading>
                    </HeadingContainer>
                    <ButtonsContaier>
                        <CancelButton onClick={closePopUp}>Cancel</CancelButton>
                        <DeleteButton onClick={deleteBooking}>Confirm</DeleteButton>
                    </ButtonsContaier>
                </DeleteModalContentsContainer>      
            </DeleteModalContainer>
        </DeleteOverlay>
    )
}

export default DeleteModal