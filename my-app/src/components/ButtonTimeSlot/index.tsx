import {ButtonTimeSlot} from '../TimeSlots/timeSlotsStyled'

interface TimeSlotsObj{
    availability: boolean,
    time_string: string
}
interface TimeSlotProps{
    timeSlot: TimeSlotsObj,
    isSelected: boolean,
    handleToggleSelect: (timeString: string, availability: boolean) => void
}

const ButtonTimeSlotComponent: React.FC<TimeSlotProps> = ({timeSlot, isSelected, handleToggleSelect})=>{
    return(
        <ButtonTimeSlot onClick = {()=> handleToggleSelect(timeSlot.time_string, timeSlot.availability)} isavailable = {timeSlot.availability} selected = {isSelected}>{timeSlot.time_string}</ButtonTimeSlot>
    )
}

export default ButtonTimeSlotComponent