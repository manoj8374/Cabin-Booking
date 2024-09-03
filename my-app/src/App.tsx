import { Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import CreateAccount from './components/CreateAccount'
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path = "/create-account" element = {<CreateAccount />} />
    </Routes> 
  );
}

export default App;
