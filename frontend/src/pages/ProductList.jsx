// src/pages/ProductList.jsx

import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import './ProductList.css'

function ProductList() {
  const [products, setProducts] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    axios.get("http://localhost:5000/api/products")
      .then(res => setProducts(res.data))
      .catch(err => console.error(err));
  }, []);
  

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      axios.delete(`http://localhost:5000/api/products/${id}`)
        .then(() => {
          // Remove the deleted product from the list without needing to fetch all products again
          setProducts(products.filter(product => product._id !== id))
          alert('Product deleted successfully!');
        })
        .catch(err => {
          console.error('Error deleting product:', err)
          alert('Failed to delete product.')
        })
    }
  }

  const handleEdit = (id) => {
    navigate(`/edit-product/${id}`)
  }

  return (
    <div className="product-list-container">
      <div className="header">
        <h2 className="title">📦 Product List</h2>
      </div>

      <div className="card">
        <div className="card-body">
          {products.length === 0 ? (
            <p className="no-products-message">No products found.</p>
          ) : (
            <div className="table-container">
              <table className="product-table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Category</th>
                    <th>Price ($)</th>
                    <th>Stock</th>
                    <th>Manufactured Date</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map(p => (
                    <tr key={p._id}>
                      <td>{p.name}</td>
                      <td>{p.category}</td>
                      <td>${parseFloat(p.price).toFixed(2)}</td>
                      <td>{p.stock}</td>
                      <td>{new Date(p.manufacturingDate).toLocaleDateString()}</td>
                      <td>
                        <button 
                          className="edit-btn" 
                          onClick={() => handleEdit(p._id)}>
                          Edit
                        </button>
                        <button 
                          className="delete-btn" 
                          onClick={() => handleDelete(p._id)}>
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProductList;
