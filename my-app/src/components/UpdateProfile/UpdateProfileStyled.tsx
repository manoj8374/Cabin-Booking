import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const UpdateProfileContainer = styled.div`
    background-color: #F9F9F9;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 48px;
    @media (min-width: 768px) {
        background-color: #CFD6D9;
        justify-content: center;
        position: relative;
    }
`

export const UpdateProfileSubContainer = styled.div`
    background-color: #F9F9F9;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 40px;
    gap: 40px;
    position: relative;
    width: 100%;

    @media (min-width: 768px){
        padding-bottom: 64px;
        background-color: white;
        border-radius: 40px;
        gap: 24px;
    }

    @media (min-width: 768px) and (max-width: 1024px) {
        width: 60%;
    }

    @media (min-width: 1024px) and (max-width: 1440px) {
        width: 45%;
    }

    @media (min-width: 1440px){
        width: 35%;
    }
`

export const UpdateProfileImageContainer = styled.div`
    width: 120px;
    height: 120px;
    background-color: white;
    border-radius: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 50px;
    font-weight: 500;

    @media (min-width: 768px) {
        width: 100px;
        height: 100px;
        background-color: #CFD6D9;
    }
`

export const UpdateProfileHeading = styled.p`
    font-size: 18px;
    font-family: 'Poppins', sans-serif;
    font-weight: bold;

    @media (min-width: 768px) {
        font-size: 24px;
    }
`

export const UpdateProfileForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;  
    width: 90%; 
`

export const UpdateProfileInput = styled.input`
    width: 100%;
    height: 55px;
    border-radius: 8px;
    font-size: 16px;
    padding-left: 16px;
    border: none;

    @media (min-width: 768px) {
        width: 80%;
        background-color: #F1F4FF;  
        &:focus {
            border: 1.8px solid #1F41BB;
        }
    }
`

export const UpdateProfileButton = styled.button`
    width: 100%;
    height: 50px;
    border-radius: 8px;
    border: none;
    background-color: #1F41BB;
    color: white;
    font-size: 16px;
    margin-top: 24px;

    @media (min-width: 768px) {
        width: 80%;
    }
`

export const UpdateProfileArrowContainer = styled.div`
    background-color: transparent;
    width: fit-content;
    position: absolute;
    top: 8%;
    left: 5%;
    cursor: pointer;
    font-weight: normal;

    @media (min-width: 768px) {
        display: none;
    }
` 

export const StyledLink = styled.div`
    text-decoration: none;
    color: black;
`

export const ArrowContainerLargeDevices = styled.div`
    display: none;

    @media (min-width: 768px) {
        display: block;
        background-color: #ECECEC;
        width: fit-content;
        border-radius: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 6px;
        position: absolute;
        top: 8%;
        left: 5%;
        cursor: pointer;
    }
`