import styled from 'styled-components'

export const ItemButton = styled.button<{isActive: boolean}>`
    min-width: 120px;
    height: 40px;
    background-color: ${({isActive}) => isActive ? '#1F41BB' : 'white'};
    font-size: 16px;
    font-family: 'Poppins', sans-serif;
    color: ${({isActive}) => isActive ? 'white' : '#1F41BB'};
    border: ${({isActive}) => isActive ? 'none' : '1px solid #999999'};
    border-radius: 8px;
    padding: 8px;
`