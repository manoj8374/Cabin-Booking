import styled from 'styled-components'

export const TimeSlotsContainer = styled.ul`
    padding: 0px;
    display: flex;
    gap: 12px;
    flex-direction: column;

    @media (min-width: 768px) {
        flex-direction: row;
    }
`

interface ButtonTimeSlotContext {
    isavailable: boolean;
    selected: boolean;
  }

export const ButtonTimeSlot = styled.button<ButtonTimeSlotContext>`
    background-color: transparent;
    border: 1px solid #999999;
    border-color: ${({isavailable, selected})=> selected ? "#4ABD5D" : isavailable ? "#999999" : "#999999"};
    border-radius: 4px;
    padding: 8px;
    cursor: pointer;
    color: ${({isavailable, selected})=> selected ? "#FFFFFF" : isavailable ? "#4ABD5D" : "#E72323"};
    font-size: 14px;
    background-color: ${({selected})=> selected ? "#4ABD5D" : "transparent"};

    @media (max-width: 385px) {
        flex-basis: 30%;
    }

    @media (min-width: 768px) {
        font-size: 20px;
        padding: 10px;
    }
`

export const TimeSlotsSubContainer = styled.div`
    padding: 0px;
    display: flex;
    gap: 12px;
    flex-wrap: wrap;

    @media (max-width: 420px) {
        gap: 10px;
    }

    @media (min-width: 768px) {
        width: 70%;
    }

    @media (min-width: 1024px) {
        width: 60%;
    }

    @media (min-width: 1440px) {
        width: 50%;
    }
`

export const MobileViewMoreContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    color: #1F41BB;
    margin-top: 12px;
    margin-bottom: 12px;
    gap: 40px;
`

export const SubmitTimeSlotsButton = styled.button`
    background-color: #1F41BB;
    color: #FFFFFF;
    border-radius: 4px;
    padding: 8px;
    border: none;
    font-size: 14px;
    align-self: flex-end;
`

export const LaptopDeviceSubmitContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    flex-grow: 1;
    align-self: flex-end;
`

export const LaptopDeviceSubmitButton = styled.button`
    background-color: #1F41BB;
    color: #FFFFFF;
    border-radius: 4px;
    padding: 8px;
    border: none;
    cursor: pointer;
    font-size: 20px;
    width: 120px;
    padding: 12px;
`