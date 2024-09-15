import styled from 'styled-components'
import {RxCross2} from "react-icons/rx";

export const WhoBookedTheSlotContainer = styled.div`
   position: fixed;
   top: 0;
   left: 0;
   width: 100%;
   background: rgba(0, 0, 0, 0.3);
   z-index: 10000;
   min-height: 100vh;
   padding-top: 24px;
   backdrop-filter: blur(5px);
   overflow: hidden;
   display: flex;
   justify-content: center;

`
export const WhoBookedTheSlotSubContainer = styled.div`
   background-color: #F1F4FF;
   width: 90%;
   margin: auto;
   padding-bottom: 24px;
   padding-top: 8px;
   border-radius: 8px;
   align-self: center;

   @media screen and (min-width: 768px) {
      width: 60%;
   }

   @media screen and (min-width: 1024px) {
      width: 40%;
   }

   @media screen and (min-width: 1440px) {
      width: 30%;
   }
`

export const WhoBookedTheSlotFormMainContainer = styled.div`
   width: 90%;
   display: flex;
   flex-direction: column;
   margin: auto;
`
export const WhoBookedTheSlotHeadingContainer = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;
   margin-top: 8px;
`

export const WhoBookedTheSlotFormContainer = styled.form`
   display: flex;
   flex-direction: column;
   gap: 14px;
   margin-top: 12px;

   @media screen and (min-width: 1024px) {
      margin-top: 16px;
   }
`

export const WhoBookedTheSlotInputFieldContainer = styled.div`
   display: flex;
   flex-direction: column;
   gap: 6px;
`

export const WhoBookedTheSlotInputField = styled.input`
   width: 100%;
   height: 30px;
   background-color: #EBE8E8;
   border-radius: 4px;
   border: #D0D5DD 2px solid;
   padding: 16px;
   padding-top: 18px;
   padding-bottom: 18px;
   outline: none;
   font-size: 16px;
   color: black;

   @media screen and (min-width: 1024px) {
      font-size: 18px;
   }
   `

export const LabelElement = styled.label`
   font-size: 12px;
   font-family: 'Poppins', sans-serif;
   font-weight: 600;
   color: #344054;

   @media screen and (min-width: 768px) {
      font-size: 14px;
   }

   @media screen and (min-width: 1024px) {
      font-size: 16px;
   }

   @media screen and (min-width: 1440px) {
      font-size: 16px;
   }
`

export const BookedContainer = styled.div`
   display: flex;
   flex-direction: column;
   gap: 8px;
   margin-top: 8px;
`

export const BookedContainerHeading = styled.p`
   font-size: 14px;
   font-family: 'Poppins', sans-serif;
   color: black;

   @media screen and (min-width: 1024px) {
      font-size: 20px;
   }
`

export const CloseButton = styled.button`
   background-color: #1F41BB;
   border: none;
   font-size: 14px;
   font-family: 'Poppins', sans-serif;
   font-weight: 500;
   color: white;
   margin-top: 24px;
   width: 90px;
   border-radius: 4px;
   padding: 4px;
   margin-top: 10px;
   align-self: center;
   cursor: pointer;

   @media screen and (min-width: 1024px) {
      font-size: 18px;
      padding: 8px;
      width: 120px;

   }
`

export const HeadingElement = styled.p`
   font-size: 16px;
   font-family: 'Poppins', sans-serif;
   font-weight: 600;
   color: black;

   @media screen and (min-width: 1024px) {
      font-size: 20px;
   }
`

export const DateParaElement = styled.p`
   font-size: 16px;
   font-family: 'Poppins', sans-serif;
   color: black;

   @media screen and (min-width: 1024px) {
      font-size: 20px;
   }
`

export const RxCross2Element = styled(RxCross2)`
   color: black;
   font-size: 16px;
   cursor: pointer;

   @media screen and (min-width: 1024px) {
      font-size: 22px;
   }
`