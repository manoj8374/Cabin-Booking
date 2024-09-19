import styled from 'styled-components'
import {MainContainer, ResultSubContainer, CrossBar, ResultContentsContainer, ResultCenterImage, ResultHeading, CloseButton} from './successfailurestyled'
import { FaCheck } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../../Redux/store';
import {setError} from '../../Redux/confirmslotsslice'
import React from 'react';

interface ResultScreenProps{
    changeErrorToUndefined: () => void,
    result: boolean
}

const ResultScreen: React.FC<ResultScreenProps> = ({result, changeErrorToUndefined})=>{
    const dispatch = useDispatch<AppDispatch>()
    const closePopUp = ()=>{
        changeErrorToUndefined()
    }
    return(
        <MainContainer>
            <ResultSubContainer>
                <CrossBar>
                    <RxCross2 onClick = {closePopUp} size={50} color={'black'} strokeWidth={0}/>
                </CrossBar>
                <ResultContentsContainer>
                    <ResultCenterImage result = {result} >
                        {result ? <FaCheck size={130} color={'white'} strokeWidth={0}/> : <RxCross2 size={150} color={'white'} strokeWidth={0}/>}
                    </ResultCenterImage>
                    <ResultHeading>
                        {result ? 'Success' : 'Failure (Try Again)'}
                    </ResultHeading>
                    <CloseButton onClick = {closePopUp}>
                        CLOSE
                    </CloseButton>
                </ResultContentsContainer>
            </ResultSubContainer>
        </MainContainer>
    )
}

export default ResultScreen