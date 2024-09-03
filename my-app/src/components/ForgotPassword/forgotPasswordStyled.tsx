import styled from 'styled-components'

export const ForgotPasswordContainer = styled.div`
    background-color: white;
    min-height: 100vh;
    padding-top: 40px;
    padding-bottom: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    @media (min-width: 768px) {
        background-color: #CFD6D9;
        justify-content: center;
        position: relative;
    }
`

export const ForgotPasswordSubContainer = styled.div`
    background-color: white;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 90%;
    align-items: center;
    justify-content: center;

    @media (min-width: 768px) and (max-width: 1024px) {
        width: 60%;
        padding: 50px;
        border-radius: 40px;
    }

    @media (min-width: 1024px) and (max-width: 1440px) {
        width: 50%;
        padding: 50px;
        border-radius: 40px;
    }

    @media (min-width: 1440px) {
        width: 35%;
        padding: 50px;
        border-radius: 40px;
        padding-top: 64px;
        padding-bottom: 64px;
    }
`

export const ForgotPasswordInsideContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 16px;
    @media (min-width: 768px) and (max-width: 1024px) {
        width: 90%;
        gap: 48px;
    }

    @media (min-width: 1024px) {
        width: 80%;
        gap: 40px;
    }


`

export const ArrowContainer = styled.div`
    background-color: #ECECEC;
    width: fit-content;
    border-radius: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 6px;

    @media (min-width: 768px) {
        display: none;
    }
`

export const ForgotPasswordHeadingContents = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;

    @media (min-width: 768px) {
        align-items: center;
        gap: 24px;
    }
`

export const ForgotPasswordHeading = styled.h1`
    font-size: 20px;
    font-family: 'Poppins', sans-serif;

    @media (min-width: 768px) {
        font-size: 32px;
        color: #1F41BB;
        text-align: center;
    }
`

export const ForgotPasswordDescription = styled.p`
    font-size: 16px;
    font-family: 'Poppins', sans-serif;
    color: #989898;

    @media (min-width: 768px) {
        font-size: 18px;
        text-align: center;
        color: black;
        font-weight: 600;
    }
`

export const ForgotPasswordInputContainer = styled.form`
    display: flex;
    flex-direction: column;
    gap: 16px;

    @media (min-width: 768px) {
        gap: 24px;
    }
`

export const ForgotPasswordInputDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`

export const PasswordWrapper = styled.div`
    position: relative;
    width: 100%;
`

export const EyeIconContainer = styled.div`
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-40%);
    cursor: pointer;
    color: #666;
    font-size: 16px;
`

export const ForgotPasswordLabel = styled.label`
    font-size: 16px;
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
`

export const ForgotPasswordInput = styled.input`
    border: 2px solid #ECECEC;
    border-radius: 8px;
    padding: 16px;
    font-size: 16px;
    font-family: 'Poppins', sans-serif;
    outline: none;
    width: 100%;

    &::placeholder {
        color: #B3B3B3;
        font-size: 16px;
        font-weight: 550;
    }

    @media (min-width: 768px) {
        font-size: 18px;
        border: none;
        background-color: #F1F4FF;
        outline: #1F41BB;
        &:focus {
            border: 1.8px solid #1F41BB; 
          }
        
          &::placeholder {
            font-weight: normal;
        }
    }
`

export const ForgotPasswordButton = styled.button`
    width: 100%;
    height: 45px;
    border-radius: 8px;
    border: none;
    background-color: #1F41BB;
    color: white;
    font-size: 16px;
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
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