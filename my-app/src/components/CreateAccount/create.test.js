import '@testing-library/jest-dom';

import { render, screen, fireEvent, waitFor } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import CreateAccount from '../CreateAccount';

console.log(CreateAccount, "Hello")
jest.mock('react-router-dom', () => ({
    useNavigate: jest.fn(),
  }))

describe("Login Component Testing", ()=>{
    const renderComponent = ()=>{
        return render(
            <MemoryRouter>
                <CreateAccount/>
            </MemoryRouter>
        )
    }
    test("Renders the Login Component", ()=>{
        renderComponent()
        expect(screen.getByTestId("login-heading")).toBeInTheDocument()
    })
})