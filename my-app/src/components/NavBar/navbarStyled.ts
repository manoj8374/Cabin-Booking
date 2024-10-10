import styled from "styled-components";

export const SideBarContainer = styled.div`
    width: 350px;
    height: 100vh;
    background-color: #F1F4FF;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    overflow: scroll;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const ProfileContainer = styled.div`
    width: 100px;
    height: 100px;
    border-radius: 100px;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 40px;
    color: black;
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
`