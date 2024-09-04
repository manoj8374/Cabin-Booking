import { Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import CreateAccount from './components/CreateAccount'
import ForgotPasswordComponent from './components/ForgotPassword'
import UpdateProfile from './components/UpdateProfile';
import Home from './components/Home';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path = "/create-account" element = {<CreateAccount />} />
      <Route path = "/forgot-password" element = {<ForgotPasswordComponent />} />
      <Route path = "/update-profile" element = {<UpdateProfile />} />
      <Route path = "/" element = {<Home/>}/>
    </Routes> 
  );
}

export default App;
