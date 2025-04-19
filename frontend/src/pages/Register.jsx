// src/pages/Register.jsx
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Register.css' // Custom styles

function Register() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  })

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
  e.preventDefault()
  console.log('Registered:', formData)
  navigate('/login') // ✅ Go to login after register
}


  return (
    <div className="register-container">
      <div className="register-card">
        <h2 className="register-title">Create Account</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="btn-submit">Register</button>
          <p className="redirect-text">
            Already have an account?{' '}
            <span onClick={() => navigate('/login')}>Login</span>
          </p>
        </form>
      </div>
    </div>
  )
}

export default Register
