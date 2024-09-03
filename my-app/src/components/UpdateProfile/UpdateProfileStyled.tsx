import styled from 'styled-components'

export const UpdateProfileContainer = styled.div`
    background-color: #F9F9F9;
    min-height: 100vh;
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
`

export const UpdateProfileImageContainer = styled.div`
    width: 142px;
    height: 142px;
    background-color: white;
    border-radius: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 50px;
    font-weight: 500;
`

export const UpdateProfileHeading = styled.p`
    font-size: 18px;
    font-family: 'Poppins', sans-serif;
    font-weight: bold;
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
`

export const UpdateProfileArrowContainer = styled.div`
    background-color: transparent;
    width: fit-content;
    position: absolute;
    top: 8%;
    left: 5%;
    cursor: pointer;
    font-weight: normal;
` 