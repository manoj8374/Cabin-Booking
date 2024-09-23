import { Route, Routes } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import Login from './components/Login';
import CreateAccount from './components/CreateAccount'
import ForgotPasswordComponent from './components/ForgotPassword'
import UpdateProfile from './components/UpdateProfile';
import Home from './components/Home';
import MyBookings from './components/MyBookings';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path = "/create-account" element = {<CreateAccount />} />
      <Route path = "/forgot-password" element = {
        <ForgotPasswordComponent/>} />
      <Route path = "/update-profile" element = {<ProtectedRoute>
        <UpdateProfile/>
      </ProtectedRoute>} />
      <Route path = "/" element = {<ProtectedRoute>
        <Home/>
      </ProtectedRoute>}/>
      <Route path = "/my-bookings" element = {<ProtectedRoute>
        <MyBookings/>
      </ProtectedRoute>} />
    </Routes> 
  );
}

export default App;
