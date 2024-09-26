import { render, screen } from "@testing-library/react";
import Cabin from "./index"
import {createStore} from 'redux'
import { getCabinDetails } from '../../Redux/getcabindetailsslice';
import { Provider } from 'react-redux';


interface CabinInterface {
    cabin_id: string,
    cabin_name: string,
    cabin_type: string,
    description: string
}

interface MainFloorInterface {
    floor_name: string,
    cabins: CabinInterface[]
}

const mockReducer = (state = {
    cabindetails: {
        details: [] as MainFloorInterface[],
        isLoading: false,
        error: false,
    },
}, action: any) => {
    switch (action.type) {
        case getCabinDetails.pending.type:
            return { ...state, cabindetails: { ...state.cabindetails, isLoading: true } };
        case getCabinDetails.rejected.type:
            return { ...state, cabindetails: { ...state.cabindetails, isLoading: false, error: true } };
        case getCabinDetails.fulfilled.type:
            return { ...state, cabindetails: { ...state.cabindetails, isLoading: false, details: action.payload } };
        default:
            return state;
    }
};


describe("Home Component Testing", ()=>{
    const renderComponent = (store: any)=>{
        return render(
            <Provider store={store}>
                <Cabin />
            </Provider>
        )
    }

    test("if spinner is rendered when the isLoading is true", ()=>{
        const store = createStore(mockReducer, {
            cabindetails: {
                details: [],
                isLoading: true,
                error: false,
            }
        })

        renderComponent(store)
        expect(screen.getByTestId("spinner container")).toBeInTheDocument()
    }) 
    
    test("if spinner is not rendered when the isLoading is false", ()=>{
        const store = createStore(mockReducer, {
            cabindetails: {
                details: [],
                isLoading: false,
                error: false,
            }
        })

        renderComponent(store)
        expect(screen.queryByTestId("spinner container")).not.toBeInTheDocument()
    })

    test("if error is rendered when the error is true", ()=>{
        const store = createStore(mockReducer, {
            cabindetails: {
                details: [],
                isLoading: false,
                error: true,
            }
        })

        renderComponent(store)
        expect(screen.getByText("Error")).toBeInTheDocument()
    })

    test("if data is rendered properly", ()=>{
        const store = createStore(mockReducer, {
            cabindetails: {
                details: [{
                    floor_name: "first floor",
                    cabins: [{
                        cabin_id: "1",
                        cabin_name: "conference room",
                        cabin_type: "CONFERENCE_ROOM",
                        description: "sufficient for 25 people",
                    },
                    {
                        cabin_id: "2",
                        cabin_name: "conference room(2)",
                        cabin_type: "CONFERENCE_ROOM",
                        description: "sufficient for 25 people",
                    }]
                }],
                isLoading: false,
                error: false,
            },
            Cabin: {
                start_date: "2024-09-24",
                end_date: "2024-09-24",
                cabin_ids: ["1", "2"]
            }
        })

        renderComponent(store)

        expect(screen.getByText("first floor")).toBeInTheDocument()
        expect(screen.getByText("conference room")).toBeInTheDocument() 
        expect(screen.getByText("conference room(2)")).toBeInTheDocument()
    })
    
})