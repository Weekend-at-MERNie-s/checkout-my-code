
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
import Main from './components/main';
import UserPage from './components/user-page';


function App() {
  return (
    <>
      <Router>
        {/* < LandingPage /> */}
        < Header />
        <Routes>
        <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/main" element={<Main />} />
          <Route path="/user-page" element={<UserPage />} />
         
        </Routes>
      </Router>
    </>
  );
}

export default App;
