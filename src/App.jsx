import React from 'react';
import { Routes, Route } from "react-router-dom"

// Layouts
import AuthLayout from './layouts/Auth'
// Pages
import LoginPage from './pages/Login'

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<AuthLayout />}>
          <Route path="/" element={<LoginPage />} />
        </Route>
      </Routes>
    </div>
  )
}
