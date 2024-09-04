import styled from 'styled-components'

export const TimeSlotsContainer = styled.ul`
    padding: 0px;
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
`

export const ButtonTimeSlot = styled.button<{isavailable:boolean}>`
    background-color: transparent;
    border: 1px solid #999999;
    border-radius: 4px;
    padding: 8px;
    flex-grow: 1;
    cursor: pointer;
    color: ${({isavailable})=> isavailable ? "#4ABD5D" : "#E72323"};
    font-size: 14px;
`