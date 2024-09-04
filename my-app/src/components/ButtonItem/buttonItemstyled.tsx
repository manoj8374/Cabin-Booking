import styled from 'styled-components'

export const ItemButton = styled.button<{isActive: boolean}>`
    min-width: 120px;
    height: 25px;
    background-color: ${({isActive}) => isActive ? '#1F41BB' : 'white'};
    font-size: 14px;
    font-family: 'Poppins', sans-serif;
    color: ${({isActive}) => isActive ? 'white' : '#1F41BB'};
    border: ${({isActive}) => isActive ? 'none' : '1px solid #999999'};
    border-radius: 5px;
    padding: 12px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
`