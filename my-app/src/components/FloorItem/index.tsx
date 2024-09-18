import {useState} from 'react'
import {FloorItemContainer, FloorItemSubContainer, FloorHeading, FloorButtonsContainer, CabinDescription} from './floorItemStyled'
import ButtonItem from '../ButtonItem'
import TimeSlots from '../TimeSlots'

interface CabinInterface {
    cabin_id: string,
    cabin_name: string,
    cabin_type: string,
    description: string
}

interface FloorProps {
    floor: string,
    cabins: CabinInterface[]
}


//extract all the buttons here from the data
const FloorItem: React.FC<FloorProps> = ({floor, cabins})=>{
    const [cabinDescription, setCabinDescription] = useState<string>(cabins[0].description)
    const [activeIndex, setActiveIndex] = useState<number>(0)
    const [selectedCabinId, setSelectedCabinId] = useState<string>(cabins[0].cabin_id)

    const changeDescriptionAndIndex = (value: string, index: number, cabinId: string)=>{
        setCabinDescription(value)
        setActiveIndex(index)
        setSelectedCabinId(cabinId)
    }

    return(
        <FloorItemContainer>
            <FloorItemSubContainer>
                <FloorHeading>{floor}</FloorHeading>
                <FloorButtonsContainer>
                    {cabins?.map((eachCabin, index)=>{
                        return(
                            <ButtonItem key = {eachCabin.cabin_id} cabinDetails = {eachCabin} changeDescriptionAndIndex = {changeDescriptionAndIndex} activeIndex = {activeIndex} currentIndex = {index}/>
                        )
                    })}
                </FloorButtonsContainer>
                <CabinDescription>
                    {cabinDescription}
                </CabinDescription>
                <TimeSlots cabinId = {selectedCabinId}/>
                {/* //render the time slots here */}
            </FloorItemSubContainer>
        </FloorItemContainer>
    )
}

export default FloorItem