import styled from "styled-components";
import { IoCalendarNumberSharp } from "react-icons/io5";
import { GoDash } from "react-icons/go";


export const DatePickerContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background-color: #F1F4FF;
    border-radius: 8px; 
    padding: 8px;

    @media (min-width: 500px){
        padding: 16px;
    }
`

export const DatePickerSubContainer = styled.div`
    width: 100%;
    margin: auto;
    display: flex;
    gap: 16px;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 400px){
        gap: 10px;
    }

    @media (min-width: 768px){
        justify-content: center;
        width: 90%;
    }

    @media (min-width: 1024px){
        width: 90%;
        justify-content: space-around;
    }
`

export const DateFromContainer = styled.div`
    display: flex;
    gap: 3px;
    border: 1px solid #1F41BB;
    width: 200px;
    padding: 8px;

    @media (min-width: 768px){
        width: 300px;
        border-radius: 6px;
        border: 2px solid #1F41BB;
        padding: 16px;
        padding-left: 16px;

    }

    @media (min-width: 1024px){
        width: 350px;
    }
`

export const CalenderIcon = styled(IoCalendarNumberSharp)`
    margin-right: 8px;
    color: #A4A6AE;
    font-size: 32px;
    display: none;

    @media (min-width: 400px){
        display: block;
    }

    @media (min-width: 1024px){
        font-size: 48px;
    }
`

export const DateContentsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`

export const HeadingElement = styled.p`
    color: #797979;
    font-size: 14px;

    @media (min-width: 768px){
        font-size: 20px;
    }

    @media (min-width: 1024px){
        font-size: 24px;
    }
`

export const DateElement = styled.p`
    color: black;
    font-size: 14px;

    @media (min-width: 768px){
        font-size: 24px;
    }
`

export const HyphenIcon = styled(GoDash)`
    color: #797979;
    font-size: 28px;

    @media (min-width: 1024px){
        font-size: 48px;
    }
`