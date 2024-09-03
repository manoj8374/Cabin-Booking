import styled from 'styled-components'

export const LoginContainer = styled.div`
    min-height: 100vh;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 50px;
    padding-bottom: 50px;
    @media (min-width: 768px) {
        background-color: #CFD6D9;
        min-height: 100vh;
    }
`

export const LoginSubContainer = styled.div`
    width: 100%;
    background-color: white;
    display: flex;
    flex-direction: column; 
    overflow: auto;

    @media (min-width: 768px){
        padding-top: 64px;
        padding-bottom: 64px;
    }

    @media (min-width: 768px) and (max-width: 1024px) {
        width: 80%;
        border-radius: 40px;
    }

    @media (min-width: 1024px) and (max-width: 1440px) {
        width: 60%;
        border-radius: 40px;
    }

    @media (min-width: 1440px) {
        width: 40%;
        border-radius: 40px;
    }
`

export const LoginContentsContainer = styled.div`
    width: 80%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    align-self: center;
    gap: 24px;
`

export const LoginHeadingContents = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 24px;
    width: 90%
    @media (max-width: 568px) {
        width: 100%;
    }
`

export const LoginHeading = styled.h1`
    color: #1F41BB;
    font-size: 32px;
    font-family: 'Poppins', sans-serif;
    font-weight: semi-bold;
    @media (min-width: 768px) {
        font-size: 36px;
    }
`

export const LoginDescription = styled.p`
    font-size: 16px;
    font-family: 'Poppins', sans-serif;
    font-weight: 550;
    text-align: center;
    @media (min-width: 768px) {
        font-size: 20px;
    }
`

export const LoginInputContainer = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: 24px;

    @media (min-width: 768px) {
        width: 80%;
    }
`

export const LoginInput = styled.input`
    width: 100%;
    height: 50px;
    border-radius: 8px;
    border: none;
    background-color: #F1F4FF;
    outline: #1F41BB;
    padding-left: 16px;

    &:focus {
        border: 1.8px solid #1F41BB; 
      }
    @media (min-width: 1024px) {
        height: 65px;
        &::placeholder {
            font-size: 18px;
        }
        font-size: 18px;
    }
`

export const ForgotPassword = styled.p`
      font-size: 16px;
      font-family: 'Poppins', sans-serif;
      text-align: right;
      align-self: flex-end;
      color: #1F41BB;
`

export const LoginButton = styled.button`
    width: 100%;
    height: 50px;
    border-radius: 8px;
    border: none;
    background-color: #1F41BB;
    color: white;
    font-size: 16px;
    @media (min-width: 768px) {
        font-size: 18px;
    }
`

export const CreateNewAccount = styled.a`
    font-size: 16px;
    font-family: 'Poppins', sans-serif;
    text-align: center;
    color: #494949;
    align-self: center;
    text-decoration: none;
`