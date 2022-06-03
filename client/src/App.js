
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
import Join from './components/join';
import NoMatch from '../../client/src/pages/NoMatch'


function App() {
  return (
    <>
      <Router>
        {/* < LandingPage /> */}
        < Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/join" element={<Join />} />
          <Route path="/login" element={<Login />} />
          <Route path="/main" element={<Main />} />
          <Route path="/user-page" element={<UserPage />} />
          <Route
            path="*"
            element={<NoMatch />}
          />

        </Routes>
      </Router>
   
    </>
  );
}

export default App;
