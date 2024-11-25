import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './Component/Sidebar.jsx';
import Login from './pages/Login.jsx';


const App = () => {
  return (
    <BrowserRouter>
        <Routes>
        <Route path="/dashboard/*" element={<Sidebar/>} /> 
        <Route path="/login" element={<Login/>} /> 

        </Routes>
    </BrowserRouter>
  );
};

export default App;