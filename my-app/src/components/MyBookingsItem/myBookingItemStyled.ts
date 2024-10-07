import styled from "styled-components";

export const MyBookingItemContainer = styled.li`
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    padding: 16px;
    padding-left: 8px;
    border-radius: 8px;

    @media screen and (min-width: 768px) {
        flex-direction: row;
        flex-wrap: wrap;
        width: 45%;
        flex-grow: 0.5;
    }

    @media screen and (min-width: 1024px) {
        flex-grow: 0;
        width: 40%;
    }
`

export const MyBookingItemSubContainer = styled.div`
    width: 95%;
    gap: 12px;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-direction: column;

    @media screen and (min-width: 768px) {
   
    }
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
`

export const TimeSlotsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
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