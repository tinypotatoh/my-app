import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useLocalStorage } from 'react-use';
import './App.css';
import LoginRegistration from "../LoginRegistration/LoginRegistration";
import Profile from "../Profile/Profile";

function App() {
  const [token, setToken, removeToken] = useLocalStorage('token');

  return (
    <div className="wrapper">
      <BrowserRouter>
      {token && (
        <Routes>
          <Route path="/" element={<LoginRegistration setToken={setToken} />} />
          <Route path="/profile" element={<Profile removeToken={removeToken} token={token} />} />
        </Routes>
      )}

      {!token && (
        <LoginRegistration setToken={setToken} />
      )}
        </BrowserRouter>
        
    </div>
  )
}

export default App;
