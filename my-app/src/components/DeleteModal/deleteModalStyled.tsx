import styled from 'styled-components'
import {motion} from 'framer-motion'

export const DeleteOverlay = styled(motion.div)`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    width: 100vw;
    height: 100vh;
`

export const DeleteModalContainer = styled(motion.div)`
    background-color: white;
    width: 40%;
    height: 30%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    gap: 16px;
    max-width: 600px;
    max-height: 600px;

    padding: 24px;
   min-width: 300px;
    min-height: 150px;

    @media (max-width: 576px){
        width: 90%;
    }
`

export const DeleteModalContentsContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 16px;
    gap: 24px;
`

export const ButtonsContaier = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 8px;
`

export const DeleteHeading = styled.div`
    font-size: 24px;
    font-weight: 700;
    font-family: 'Poppins', sans-serif;
    width: 100%;
    text-align: center;
    line-height: 32px;

    @media (max-width: 568px){
        font-size: 20px;
    }
`

export const DeleteButton = styled.button`
    background-color: #E72323;
    border: none;
    font-size: 16px;
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    color: white;
    padding: 8px;
    border-radius: 4px;
    cursor: pointer;    
    height: 40px;
    width: 120px;
    font-weight: 600;

    @media screen and (max-width: 768px) {
        width: 85px;
        height: 35px;
        font-size: 14px;
        cursor: none;
    }

`

export const CancelButton = styled(DeleteButton)`
    background-color: #F1F1F1;
    color: rgb(130, 124, 130);
`

export const DeleteSubHeading = styled.p`
    font-size: 16px;
    font-weight: 500;
    font-family: 'Poppins', sans-serif;
    width: 100%;
    text-align: center;
    line-height: 32px;
`

export const HeadingContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8px;
`