// src/App.jsx
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AdminLayout from './components/AdminLayout'
import Dashboard from './pages/Dashboard'
import ProductForm from './pages/ProductForm'
import ProductList from './pages/ProductList'
import EditProduct from './pages/EditProduct'

import Register from './pages/Register' // Import Register page
import Login from './pages/Login' // Import Login page

function App() {
  
  return (
    <Router>
      <Routes>
        
        <Route element={<AdminLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/create" element={<ProductForm />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/edit-product/:id" element={<EditProduct />} />
          <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        </Route>

        {/* <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} /> */}
      </Routes>
    </Router>
  )
}

export default App
