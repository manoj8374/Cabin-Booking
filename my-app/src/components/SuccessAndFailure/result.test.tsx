import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ResultScreen from './index';

describe('ResultScreen Component', () => {
    const mockChangeErrorToUndefined = jest.fn();

    afterEach(() => {
        jest.clearAllMocks();
    });

    const renderComponent = (result: boolean = true)=>{
        return render(
            <ResultScreen result={result} changeErrorToUndefined={mockChangeErrorToUndefined} />
        )
    }

    test('should render ResultScreen', () => {
        renderComponent(true)
        expect(screen.getByTestId('result-screen')).toBeInTheDocument();
    })

    test("if success message is shown", ()=>{
        renderComponent(true)
        expect(screen.getByText("Success")).toBeInTheDocument()
    })

    test("if failure message is shown", ()=>{
        renderComponent(false)
        expect(screen.getByText("Failure")).toBeInTheDocument()
    })

    test("if close button is working", ()=>{
        renderComponent(true)
        const button = screen.getByTestId("close-button")
        fireEvent.click(button)
        expect(mockChangeErrorToUndefined).toHaveBeenCalled()
    })
});
