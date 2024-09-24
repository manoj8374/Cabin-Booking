import React from "react"
import {ItemButton} from "./buttonItemstyled"

interface CabinInterface {
    cabin_id: string,
    cabin_name: string,
    cabin_type: string,
    description: string
}

interface ButtonItemProps{
    activeIndex: number,
    changeDescriptionAndIndex: (value: string, index: number, cabinId: string)=>void,
    currentIndex: number,
    cabinDetails: CabinInterface,
    changeCabin: (eachCabin: CabinInterface)=>void
}

const ButtonItem: React.FC<ButtonItemProps> = ({changeDescriptionAndIndex, activeIndex, currentIndex, cabinDetails, changeCabin})=>{
   
    return (
        <ItemButton onClick={()=>{changeDescriptionAndIndex(cabinDetails.description, currentIndex, cabinDetails.cabin_id); changeCabin(cabinDetails)}} isActive={activeIndex === currentIndex}>{cabinDetails.cabin_name}</ItemButton>
    )
}

export default ButtonItem