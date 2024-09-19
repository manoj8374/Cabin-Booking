import styled from 'styled-components'
import { RxCross2 } from "react-icons/rx";

export const MainContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background: rgba(0, 0, 0, 0.1);
    z-index: 10000;
    min-height: 100vh;
    overflow: hidden;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    @media (min-width: 768px) {
        background: rgba(0, 0, 0, 0.2);
        backdrop-filter: blur(1px);
    }
`

export const ResultSubContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100vh;
    background: white;
    position: relative;

    @media (min-width: 768px) {
        width: 80%;
        height: 500px;
        border-radius: 16px;
    }

    @media (min-width: 1024px) {
        width: 60%;
        height: 500px;
        border-radius: 16px;
    }

    @media (min-width: 1440px) {
        width: 40%;
        height: 500px;
        border-radius: 16px;
    }
`

export const ResultContentsContainer = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: 24px;
`

interface ResultCenterImageProps {
    result: boolean
}

export const ResultCenterImage = styled.div<ResultCenterImageProps>`
    width: 170px;
    height: 170px;
    padding: 10px;
    border-radius: 100%;
    background-color: ${props => props.result ? '#13C39C' : '#F14A4A'};

    border: 3px solid ${props => props.result ? '#13C39C' : '#F14A4A'};
    display: flex;
    justify-content: center;
    align-items: center;

    @media (min-width: 768px) {
        width: 200px;
        height: 200px;
    } 
`

export const ResultHeading = styled.h1`
    font-size: 30px;
    font-weight: bold;
    color: #7C8691;
    font-family: 'Poppins', sans-serif;
    font-size: 32px;
`

export const CloseButton = styled.button`
    background-color: transparent;
    color: #1F41BB;
    font-size: 18px;
    font-weight: 900;
    padding: 6px 6px;
    border-radius: 8px;
    border: 2px solid #1F41BB;
    font-size: 20px;
    width: 120px;
    cursor: pointer;
`

export const CrossBar = styled(RxCross2)`
    position: absolute;
    top: 20px;
    right: 20px;
    font-size: 32px;
    color: #667085;
    cursor: pointer;
`