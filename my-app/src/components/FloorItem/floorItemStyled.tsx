import styled from 'styled-components'

export const FloorItemContainer = styled.li`
    list-style-type: none;
    display: flex;
    flex-direction: column;
    background-color: #F1F4FF;
    padding-top: 16px;
    padding-bottom: 16px;
    border-radius: 8px;

`

export const FloorItemSubContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 90%;
    margin: 0 auto;
`

export const FloorHeading = styled.p`
    font-size: 20px;
    font-family: 'Poppins', sans-serif;
    font-weight: bold;
`

export const FloorButtonsContainer = styled.div`
    display: flex;
    gap: 16px;
    flex-wrap: wrap;
`

export const CabinDescription = styled.p`
    font-size: 16px;
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
`