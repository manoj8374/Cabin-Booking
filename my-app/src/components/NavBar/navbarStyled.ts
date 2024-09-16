import styled from "styled-components";

interface NavBarInterface {
    isOpen: boolean
}

export const NavBarContainer = styled.div<NavBarInterface>`
    position: fixed;
    width: 35%;
    height: 100vh;
    background-color: #F1F4FF;
    transition: left 0.5s ease-in-out;
`