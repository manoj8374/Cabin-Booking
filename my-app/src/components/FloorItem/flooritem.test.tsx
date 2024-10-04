import { render, screen, fireEvent } from "../../../test.utils";
import FloorItem from "./index"
import { Provider } from "react-redux";

const cabins = [{
    "cabin_id": "1",
    "cabin_name": "Conference Room",
    "floor": "first floor",
    "description": "sufficient for 10 people",
    "cabin_type": "CONFERENCE_ROOM",
},
{
    "cabin_id": "2",
    "cabin_name": "Conference Room 2",
    "floor": "first floor",
    "description": "sufficient for 20 people",
    "cabin_type": "CONFERENCE_ROOM",
}]

describe("Home Component Testing", ()=>{

    const renderComponent = ()=>{
        return render(
            <FloorItem floor = "First Floor" cabins = {cabins} />
        )
    }

    test("if component is rendering properly", ()=>{
        renderComponent()
    })

    test("if headings are displayed properly", ()=>{
        renderComponent()
        expect(screen.getByText("First Floor")).toBeInTheDocument()
        expect(screen.getByText("Conference Room")).toBeInTheDocument()
        expect(screen.getByText("Conference Room 2")).toBeInTheDocument()

        //check for description
        expect(screen.getByText("sufficient for 10 people")).toBeInTheDocument()
    })

    test("updates description when cabins are updated", ()=>{
        renderComponent()
        const button = screen.getByText("Conference Room 2")
        fireEvent.click(button)
        expect(screen.getByText("sufficient for 20 people")).toBeInTheDocument()
    })

    test("if time slots are updated when cabin is updated", ()=>{
        renderComponent()
        const button = screen.getByText("Conference Room 2")
        fireEvent.click(button)

        const timeSlots = screen.getByTestId("time slots")
        expect(timeSlots).toHaveAttribute("data-cabinId", "2")
    })
})