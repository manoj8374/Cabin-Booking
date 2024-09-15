import styled from 'styled-components'
import {MainContainer, ResultSubContainer, CrossBar, ResultContentsContainer, ResultCenterImage, ResultHeading, CloseButton} from './successfailurestyled'
import { FaCheck } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";

const ResultScreen = ()=>{
    return(
        <MainContainer>
            <ResultSubContainer>
                <CrossBar>
                    <RxCross2 size={50} color={'black'} strokeWidth={0}/>
                </CrossBar>
                <ResultContentsContainer>
                    <ResultCenterImage>
                        <FaCheck size={130} color={'white'} strokeWidth={0}/>
                        {/* <RxCross2 size={150} color={'white'} strokeWidth={0}/> */}
                    </ResultCenterImage>
                    <ResultHeading>
                        Success
                    </ResultHeading>
                    <CloseButton>
                        CLOSE
                    </CloseButton>
                </ResultContentsContainer>
            </ResultSubContainer>
        </MainContainer>
    )
}

export default ResultScreen