import styled from "styled-components";

export const MyBookingsContainer = styled.div`
    display: flex;
    flex-direction: column;
`
export const MyBookingsHeadingContainer = styled.div`
    display: flex;
    width: 90%;
    align-items: center;
    margin: auto;
    justify-content: space-between;
    margin-top: 24px;
`

export const MyBookingsHeading = styled.h1`
    font-size: 28px;
`

export const IconsContainer = styled.div`
    display: flex;
    gap: 24px;
    align-items: center;
    align-self: center;
`

export const MyBookingsSubContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 90%;
    margin: auto;
`

export const FiltersContainer = styled.div`
    display: flex;
    width: 80%;
    align-items: center;
    margin: auto;
    justify-content: center;
    gap: 16px;
    margin-top: 40px;
`

export const FilterButton = styled.button<{isactive: boolean}>`
    background-color: ${({isactive})=> (isactive ? "#1F41BB" : "white")};
    border: ${({isactive})=> (isactive ? "none" : "1px solid #1F41BB")};
    font-size: 14px;
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    color: ${({isactive})=> (isactive ? "white" : "#1F41BB")};
    padding: 8px;
    border-radius: 8px;
    padding: 8px;
    padding-left: 12px;
    padding-right: 12px;

    @media screen and (min-width: 768px) {
        cursor: pointer;
    }
`