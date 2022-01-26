import React from 'react';
import { Routes, Route } from "react-router-dom"

// Pages
import LoginPage from './pages/Login'

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginPage />} />
      </Routes>
    </div>
  )
}
