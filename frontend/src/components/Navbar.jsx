import React from 'react'
import { Link, useLocation } from 'react-router-dom'

function Navbar() {
  const location = useLocation()

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm">
      <div className="container px-4 text-center">
        <Link className="navbar-brand fw-bold w-100 mb-2" to="/">
          💎 Jewellery Admin
        </Link>

        <button
          className="navbar-toggler mx-auto"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav d-inline-block">
            <li className="nav-item d-inline-block mx-2">
              <Link
                className={`nav-link ${location.pathname === '/' ? 'active fw-semibold' : ''}`}
                to="/"
              >
                Dashboard
              </Link>
            </li>
            <li className="nav-item d-inline-block mx-2">
              <Link
                className={`nav-link ${location.pathname === '/create' ? 'active fw-semibold' : ''}`}
                to="/create"
              >
                Add Product
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
