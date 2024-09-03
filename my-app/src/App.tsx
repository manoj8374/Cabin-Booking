import { Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import CreateAccount from './components/CreateAccount'
import ForgotPasswordComponent from './components/ForgotPassword'
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path = "/create-account" element = {<CreateAccount />} />
      <Route path = "/forgot-password" element = {<ForgotPasswordComponent />} />
    </Routes> 
  );
}

export default App;
