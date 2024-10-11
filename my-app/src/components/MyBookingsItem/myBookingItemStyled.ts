import styled from "styled-components";

export const MyBookingItemContainer = styled.li`
    display: flex;
    flex-direction: column;
    border: 0.5px solid rgb(150, 140, 120);
    padding: 16px;
    padding-left: 8px;
    border-radius: 8px;
    position: relative;
    min-height: 200px;

    @media (min-width: 1024px) {
        width: 48%;
    }
`

export const MyBookingItemSubContainer = styled.div`
    width: 95%;
    gap: 12px;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-direction: column;
`

export const FloorNameHeading = styled.p`
    font-size: 20px;
    font-weight: 600;
    // font-family: 'poppins';

    @media screen and (min-width: 1024px) {
        font-size: 28px;
    }

`

export const CabinNameContainer = styled.div`
    border: 1px solid #1F41BB;
    width: fit-content;
    padding: 4px 8px;
    color: #1F41BB;
    border-radius: 8px;

    @media screen and (min-width: 1024px) {
        font-size: 20px;
    }
`

export const DateContainer = styled.div`
    display: flex;
    gap: 12px;
    align-items: center;
    font-size: 16px;
    // font-family: 'poppins';
    font-weight: 500;
    position: relative;
`

export const TimeSlotsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    position: relative;
`

export const TimeSlotsItemsContainer = styled.div`
    display: flex;
    gap: 12px;
    align-items: center;
    font-size: 16px;
    // font-family: 'poppins';
    font-weight: 500;
    flex-wrap: wrap;
`

export const DateIconContainer = styled.div`
    align-self: flex-start;
    margin-top: 5px;
    display: none;
    @media screen and (min-width: 576px) {
        display: block;
    }
`

export const TimeSlotItem = styled.div`
    background-color: #4ABD5D;
    color: white;
    padding: 8px;
    border-radius: 8px;
    font-size: 14px;

    @media screen and (min-width: 576px) {
        font-size: 16px;
    }

    @media screen and (min-width: 768px) {
        font-size: 18px;
    }

    @media screen and (min-width: 1024px) {
        font-size: 20px;
    }
`

export const StartEndDate = styled.p`
    font-size: 16px;
    // font-family: 'poppins';
    font-weight: 500;

    @media screen and (min-width: 1024px) {
        font-size: 20px;
    }
`

export const DeleteSlotsBtn = styled.button`
    background-color: transparent;
    width: 150px;
    height: 40px;
    border-radius: 8px;
    color: #E72323;
    font-size: 16px;
    border: 1px solid #E72323;
    right: 16px;
    bottom: 16px;
    align-self: flex-end;
    margin-top: 16px;

    @media screen and (min-width: 1024px) {
        &:hover {
            cursor: pointer;
            background-color: #E72323;
            color: white;
            border: none;
        }
    } 

    @media screen and (max-width: 768px) {
        width: 75px;
        height: 30px;
    }
    
`