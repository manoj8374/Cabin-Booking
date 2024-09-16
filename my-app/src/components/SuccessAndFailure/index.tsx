import styled from 'styled-components'
import {MainContainer, ResultSubContainer, CrossBar, ResultContentsContainer, ResultCenterImage, ResultHeading, CloseButton} from './successfailurestyled'
import { FaCheck } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../../Redux/store';
import {setError} from '../../Redux/confirmslotsslice'
import React from 'react';

interface ResultScreenProps{
    error?: boolean
}

const ResultScreen: React.FC<ResultScreenProps> = ()=>{
    const dispatch = useDispatch<AppDispatch>()
    const errorPopUp = useSelector((state: RootState) => state.confirmSlots.error)
    const closePopUp = ()=>{
        console.log("Erro")
        dispatch(setError({error: undefined}))
    }
    return(
        <MainContainer>
            <ResultSubContainer>
                <CrossBar>
                    <RxCross2 onClick = {closePopUp} size={50} color={'black'} strokeWidth={0}/>
                </CrossBar>
                <ResultContentsContainer>
                    <ResultCenterImage>
                        <FaCheck size={130} color={'white'} strokeWidth={0}/>
                        {/* <RxCross2 size={150} color={'white'} strokeWidth={0}/> */}
                    </ResultCenterImage>
                    <ResultHeading>
                        Success
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