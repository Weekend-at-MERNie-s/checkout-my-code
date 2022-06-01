
import './App.css';

import React from 'react';
import Header from './components/header'
import LandingPage from './components/landing-page';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Login from './components/login';


function App() {
  return (
    <>
      <Router>
        {/* < LandingPage /> */}
        < Header />
        <Routes>
        <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          
        </Routes>
      </Router>
    </>
  );
}

export default App;
