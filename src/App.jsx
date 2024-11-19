import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './Component/Sidebar.jsx';


const App = () => {
  return (
    <BrowserRouter>
        <Routes>
        <Route path="/dashboard/*" element={<Sidebar/>} /> 
        </Routes>
    </BrowserRouter>
  );
};

export default App;