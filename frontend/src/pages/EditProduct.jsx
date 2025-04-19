// src/pages/EditProduct.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import './EditProduct.css';

function EditProduct() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState({
    name: '',
    category: '',
    price: '',
    stock: '',
    manufacturingDate: '',
  });

  useEffect(() => {
    // Fetch product data from the server
    axios
      .get(`http://localhost:5000/api/products/${id}`)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => {
        console.error('Error fetching product:', err);
        alert('Failed to fetch product data.');
      });
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate input
    if (!product.name || !product.category || !product.price || !product.stock || !product.manufacturingDate) {
      alert('All fields are required!');
      return;
    }

    try {
      await axios.put(`http://localhost:5000/api/products/${id}`, product);
      alert('Product updated successfully!');
      navigate('/products');
    } catch (err) {
      console.error('Error updating product:', err);
      alert('Failed to update product.');
    }
  };

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  return (
    <div className="product-form-container">
      <h2>Edit Product</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Product Name"
          value={product.name}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="category"
          placeholder="Category"
          value={product.category}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="price"
          placeholder="Price ($)"
          value={product.price}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="stock"
          placeholder="Stock"
          value={product.stock}
          onChange={handleChange}
          required
        />
        <input
          type="date"
          name="manufacturingDate"
          placeholder="Manufacturing Date"
          value={product.manufacturingDate}
          onChange={handleChange}
          required
        />
        <button type="submit">Update Product</button>
      </form>
    </div>
  );
}

export default EditProduct;
