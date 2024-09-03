import styled from 'styled-components'

export const ForgotPasswordContainer = styled.div`
    background-color: white;
    min-height: 100vh;
    padding-top: 40px;
    padding-bottom: 40px;
    display: flex;
    justify-content: center;
`

export const ForgotPasswordSubContainer = styled.div`
    background-color: white;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 90%;
`

export const ArrowContainer = styled.div`
    background-color: #ECECEC;
    width: fit-content;
    border-radius: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 6px;
`

export const ForgotPasswordHeadingContents = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`

export const ForgotPasswordHeading = styled.h1`
    font-size: 20px;
    font-family: 'Poppins', sans-serif;
`

export const ForgotPasswordDescription = styled.p`
    font-size: 16px;
    font-family: 'Poppins', sans-serif;
    color: #989898;
`

export const ForgotPasswordInputContainer = styled.form`
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