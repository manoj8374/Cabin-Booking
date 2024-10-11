import { Route, Routes } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import Login from './components/Login';
import CreateAccount from './components/CreateAccount'
import ForgotPasswordComponent from './components/ForgotPassword'
import UpdateProfile from './components/UpdateProfile';
import Home from './components/Home';
import MyBookings from './components/MyBookings';
import './App.css';
import Navbar from './components/NavBar';
import { ReactNode } from 'react';
import styled from 'styled-components';


const Layout = ({children}: {children: ReactNode})=>{

  return(
    <LayoutContainer>
      <Navbar/>
      <LayoutSub>
        {children}
      </LayoutSub>
    </LayoutContainer>
  )
}

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const LayoutSub = styled.div`
  @media (max-width: 768px) {
    margin-left: 0px;
  }

  margin-left: 350px;
  flex-grow: 1;
`

function App() {
  return (
    <Routes>
        <Route path="/login" element={<Login />} />
          <Route path = "/create-account" element = {<CreateAccount />} />
          <Route path = "/forgot-password" element = {
            <ForgotPasswordComponent/>} />
          <Route path = "/update-profile" element = {<ProtectedRoute>
            <Layout>
              <UpdateProfile/>
            </Layout>
          </ProtectedRoute>} />
          <Route path = "/" element = {<ProtectedRoute>
            <Layout>
              <Home/>
            </Layout>
          </ProtectedRoute>}/>
          <Route path = "/my-bookings" element = {<ProtectedRoute>
            <Layout>
              <MyBookings/>
            </Layout>
          </ProtectedRoute>} />
    </Routes> 
  );
}

export default App;
