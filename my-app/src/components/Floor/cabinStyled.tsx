import styled from 'styled-components'

interface FloorContainerProps {
    isloading: boolean
}

export const FloorContainer = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 40px;
    padding: 0px;
    
`

export const SpinnerContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`
