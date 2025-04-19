// src/pages/Dashboard.jsx
import React from 'react'
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Dashboard.css'

function Dashboard() {
  return (
    <div className="dashboard-container">
      <h2 className="dashboard-title">Welcome To Home Page</h2>
      <div className="row mt-2">
        <div className="col-lg-4 col-md-3 col-sm-6">
          <div className="card custom-card text-white bg-primary mb-4">
            <div className="card-body">
              <Link to="/products" style={{ color: 'white', textDecoration: 'none' }}>
                <h5 className="card-title">View Products</h5>
                <p className="card-text">Manage your product listings.</p>
              </Link>
            </div>
          </div>
        </div>
        {/* You can add more cards here for additional statistics */}
      </div>
    </div>
  )
}

export default Dashboard
