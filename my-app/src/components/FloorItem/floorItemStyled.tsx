import styled from 'styled-components'

export const FloorItemContainer = styled.li`
    list-style-type: none;
    display: flex;
    flex-direction: column;
    background-color: #F1F4FF;
    padding-top: 16px;
    padding-bottom: 16px;
    border-radius: 8px;
    position: relative;

`

export const FloorItemSubContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 90%;
    margin: 0 auto;

    @media (max-width: 420px){
        width: 92%;
    }

    @media (min-width: 768px){
        width: 95%;
        margin: auto;
        gap: 24px;
        margin-top: 16px;
        margin-bottom: 16px;
    }
`

export const FloorHeading = styled.p`
    font-size: 20px;
    font-family: 'Poppins', sans-serif;
    font-weight: 600;

    @media (min-width: 768px){
        font-size: 32px;
        font-weight: 800;
    }
`

export const FloorButtonsContainer = styled.div`
    display: flex;
    gap: 16px;
    flex-wrap: wrap;

    @media (max-width: 420px){
        gap: 8px;
    }
`

export const CabinDescription = styled.p`
    font-size: 16px;
    font-family: 'Poppins', sans-serif;
    font-weight: 500;

    @media (min-width: 768px){
        font-size: 20px;
    }
`