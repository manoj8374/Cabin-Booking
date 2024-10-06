// import { render, screen, fireEvent, waitFor } from "../../../test.utils";
// import TimeSlots from "./index";
// import fetchApi from "../../Utils/fetchDetails";
// import { url } from "../../Utils";


// jest.mock('../../Utils/fetchDetails', () => {
//     return jest.fn();
// });
  
// describe("TimeSlots Component Testing", ()=>{
 
//     beforeEach(()=>{
//         (fetchApi as jest.Mock).mockClear();
//     })

//     const renderComponent = ()=>{
//         return(
//         render(<TimeSlots cabinId="1" floor="first floor" cabinDetails={{cabin_id: "1",cabin_name: "Conference Room",cabin_type: "CONFERENCE_ROOM",description: "sufficient for 10 people"}}/>)
//     )
//     }

//     test("if component is rendering properly", ()=>{
//         renderComponent()
//     })

//     test("if time slots are rendered properly", ()=>{
//         renderComponent()
//         expect(screen.getByTestId("time slots")).toBeInTheDocument()
//     })

//     test("if time slots are rendered properly on api call", ()=>{
//         (fetchApi as jest.Mock).mockReturnValue({
//             success: true,
//             time_slots: [{
//                 slot: "09:00:00",
//                 availability: true
//             },{
//                 slot: "10:00:00",
//                 availability: false
//             }, {
//                 slot: "11:00:00",
//                 availability: true
//             }, {
//                 slot: "12:00:00",
//                 availability: false
//             }]
//         })
//         const result = fetchApi("kj", {})
//         expect(result).toBe({
//             success: true,
//             time_slots: [{
//                 slot: "09:00:00",
//                 availability: true
//             },{
//                 slot: "10:00:00",
//                 availability: false
//             }, {
//                 slot: "11:00:00",
//                 availability: true
//             }, {
//                 slot: "12:00:00",
//                 availability: false
//             }]
//         })
//         renderComponent()
//         expect(screen.getByText("09:00 AM")).toBeInTheDocument()
//         expect(screen.getByText("10:00 AM")).toBeInTheDocument()
//         expect(screen.getByText("11:00 AM")).toBeInTheDocument()
//         expect(screen.getByText("12:00 PM")).toBeInTheDocument()
//     })


// })



import returnData from './testing';
jest.mock('./testing', () => {
    return jest.fn();
});

describe('Testing returnData function', () => {
    beforeEach(() => {
        (returnData as jest.Mock).mockClear();
    });

    test("should return mocked value", ()=>{
        (returnData as jest.Mock).mockReturnValue("Hello")
        const result = returnData()
        expect(result).toBe("Hello")
    })

});
