// src/components/AdminLayout.jsx

import './AdminLayout.css'
import { Link, Outlet, useLocation } from 'react-router-dom';

function AdminLayout() {
  const location = useLocation();

 
  const hideNav = location.pathname === '/login' || location.pathname === '/register';

  return (
    <div className="admin-layout">
      {/* Conditional rendering of navbar */}
      {!hideNav && (
        <nav className="top-nav">
          <div className="nav-title">Jewellery Product</div>
          <ul className="nav-links">
            <li>
              <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/create" className={location.pathname === '/create' ? 'active' : ''}>
                Add Product
              </Link>
            </li>
            <li>
              <Link to="/products" className={location.pathname === '/products' ? 'active' : ''}>
                View Products
              </Link>
            </li>
            {/* Hide Register and Login links when logged in */}
            {!hideNav && (
              <>
                <li>
                  <Link to="/register" className={location.pathname === '/register' ? 'active' : ''}>
                    Register
                  </Link>
                </li>
                <li>
                  <Link to="/login" className={location.pathname === '/login' ? 'active' : ''}>
                    Login
                  </Link>
                </li>
              </>
            )}
          </ul>
        </nav>
      )}

      {/* Main content rendered by child routes */}
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
}

export default AdminLayout;
