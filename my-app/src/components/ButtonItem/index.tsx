import React from "react"
import {ItemButton} from "./buttonItemstyled"

interface CabinInterface {
    cabin_id: string,
    name: string,
    cabin_type: string,
    description: string
}

interface ButtonItemProps{
    activeIndex: number,
    changeDescriptionAndIndex: (value: string, index: number, cabinId: string)=>void,
    currentIndex: number,
    cabinDetails: CabinInterface
}

const ButtonItem: React.FC<ButtonItemProps> = ({changeDescriptionAndIndex, activeIndex, currentIndex, cabinDetails})=>{

    return (
        <ItemButton onClick={()=>changeDescriptionAndIndex(cabinDetails.description, currentIndex, cabinDetails.cabin_id)} isActive={activeIndex === currentIndex}>{cabinDetails.name}</ItemButton>
    )
}

export default ButtonItem