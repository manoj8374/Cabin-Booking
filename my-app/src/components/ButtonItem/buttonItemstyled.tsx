import styled from 'styled-components'

export const ItemButton = styled.button<{isActive: boolean}>`
    background-color: ${({isActive}) => isActive ? '#1F41BB' : 'white'};
    font-size: 14px;
    font-family: 'Poppins', sans-serif;
    color: ${({isActive}) => isActive ? 'white' : '#1F41BB'};
    border: ${({isActive}) => isActive ? 'none' : '1px solid #999999'};
    border-radius: 5px;
    padding: 8px;

    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;

    @media (max-width: 420px) {
        font-size: 14px;
    }

    @media (min-width: 768px) {
        font-size: 20px;
    }
`