import styled from 'styled-components'

export const LoginContainer = styled.div`
    height: 100vh;
    width: 100vw;
    background-color: red;
    @media (min-width: 768px) {
        background-color: #CFD6D9;
        height: 100vh;
        display: grid;
    }
`

export const LoginSubContainer = styled.div`
    width: 100%;
    height: 100%;
    background-color: white;
    display: flex;
    flex-direction: column; 
    
    @media (min-width: 768px) and (max-width: 1024px) {
        background-color: white;
        align-self: center;
        width: 80%;
        height: 90%;
        justify-self: center;
        border-radius: 40px;
    }

    @media (min-width: 1024px) {
        background-color: white;
        align-self: center;
        width: 40%;
        height: 80%;
        justify-self: center;
        border-radius: 40px;
    }
    )
`

export const LoginContentsContainer = styled.div`
    width: 80%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    align-self: center;
    gap: 48px;

    @media (min-width: 768px) {
        width: 65%;
        
    }
`

export const LoginHeadingContents = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 24px;
    width: 70%
`

export const LoginHeading = styled.h1`
    color: #1F41BB;
    font-size: 32px;
    font-family: 'Poppins', sans-serif;
    font-weight: semi-bold;
    @media (min-width: 768px) {
        font-size: 40px;
    }
`

export const LoginDescription = styled.p`
    font-size: 16px;
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    text-align: center;
    @media (min-width: 768px) {
        font-size: 24px;
    }
`

export const LoginInputContainer = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: 24px;
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
`

export const CreateNewAccount = styled.a`
    font-size: 16px;
    font-family: 'Poppins', sans-serif;
    text-align: center;
    color: #494949;
    align-self: center;
    text-decoration: none;
`