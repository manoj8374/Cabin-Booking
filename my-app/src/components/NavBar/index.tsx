import styled from "styled-components";
import { useEffect, useRef } from "react";
import {NavBarContainer} from "./navbarStyled";

interface NavBarInterface {
    isNavBarVisible: boolean;
    toogleNavbar: () => void;
}

const Navbar: React.FC<NavBarInterface> = ({isNavBarVisible, toogleNavbar})=>{
    const divRef = useRef<HTMLDivElement | null>(null);

    useEffect(()=>{
        const handleClick = (event: MouseEvent)=>{
            if(divRef.current && !divRef.current.contains(event.target as Node)){
                toogleNavbar()
            }
        }

        document.addEventListener("click", handleClick)
    }, [])

    return(
        <NavBarContainer ref={divRef} isOpen = {isNavBarVisible}>Hello WOrld</NavBarContainer>
    )
}

export default Navbar;
