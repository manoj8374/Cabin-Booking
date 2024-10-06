import {MainContainer, ResultSubContainer, CrossBar, ResultContentsContainer, ResultCenterImage, ResultHeading, CloseButton, SuccessElement, FailureElement} from './successfailurestyled'
import { RxCross2 } from "react-icons/rx";
import React from 'react';


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


interface ResultScreenProps{
    changeErrorToUndefined: () => void,
    result: boolean
}

const ResultScreen: React.FC<ResultScreenProps> = ({result, changeErrorToUndefined})=>{
    const closePopUp = ()=>{
        changeErrorToUndefined()
    }

    return(
        <MainContainer data-testid = "result-screen" initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
            <ResultSubContainer variants = {dropIn} initial = 'hidden' animate = 'visible' exit = 'exit'>
                <CrossBar onClick = {closePopUp}>
                    <RxCross2 size={50} color={'black'} strokeWidth={0}/>
                </CrossBar>
                <ResultContentsContainer>
                    <ResultCenterImage result = {result} >
                        {result ? <SuccessElement color={'white'} /> : <FailureElement color={'white'}/>}
                    </ResultCenterImage>
                    <ResultHeading>
                        {result ? 'Success' : 'Failure'}
                    </ResultHeading>
                    <CloseButton data-testid = "close-button" onClick = {closePopUp}>
                        CLOSE
                    </CloseButton>
                </ResultContentsContainer>
            </ResultSubContainer>
        </MainContainer>
    )
}

export default ResultScreen