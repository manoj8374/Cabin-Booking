import {ButtonTimeSlot} from '../TimeSlots/timeSlotsStyled'

interface TimeSlotsObj{
    start_date: string,
    end_date: string,
    availability: boolean,
    time_string: string
}
interface TimeSlotProps{
    timeSlot: TimeSlotsObj,
    isSelected: boolean,
    handleToggleSelect: (timeString: string) => void
}

const ButtonTimeSlotComponent: React.FC<TimeSlotProps> = ({timeSlot, isSelected, handleToggleSelect})=>{
    return(
        <ButtonTimeSlot disabled = {!timeSlot.availability} onClick = {()=> handleToggleSelect(timeSlot.time_string)} isavailable = {timeSlot.availability} selected = {isSelected}>{timeSlot.time_string}</ButtonTimeSlot>
    )
}

export default ButtonTimeSlotComponent