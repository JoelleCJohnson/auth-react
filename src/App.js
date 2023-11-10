import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { createContext, useState } from "react";
import Login from './components/Login';
import Signup from './components/Signup';
import Recipes from './components/Recipes';
import Nav from './components/Nav';
import './App.css';

export const UserContext = createContext(null)

function App() {

  const [loggedin, setLoggedin] = useState(false)
  const [token, setToken] = useState()

  return (
    <>
      <UserContext.Provider value={{ loggedin, setLoggedin, token, setToken }}>
        <BrowserRouter>
        <Nav />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Signup />} />
            <Route path="/recipes" element={< Recipes />} />
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </>
  );
}

export default App;
