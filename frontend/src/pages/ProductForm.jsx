//frontend/src/pages/

import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function ProductForm() {
  const [product, setProduct] = useState({
    name: '',
    category: '',
    price: '',
    stock: '',
    manufacturingDate: '',
    description: '',
    image: null,
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
  
 
  
    const data = new FormData();
    data.append("name", product.name);
    data.append("category", product.category);
    data.append("price", product.price);
    data.append("stock", product.stock);
    data.append("manufacturingDate", product.manufacturingDate);
    data.append("description", product.description);
  
    if (product.image) {
      data.append("image", product.image);
    }
  
    try {
      const response = await fetch("http://localhost:5000/api/products", {
        method: "POST",
        body: data,
      });
      
  
      const contentType = response.headers.get("content-type");
  
      if (response.ok) {
        const result = contentType.includes("application/json")
          ? await response.json()
          : {};
        console.log("Product created:", result);
        alert("Product Created!");
        setProduct({
          name: '',
          category: '',
          price: '',
          stock: '',
          manufacturingDate: '',
          description: '',
          image: null,
        });
        navigate("/products");
      } else {
        const error = await response.text();
        console.error("Error response:", error);
        alert("Failed to create product: " + error);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong!");
    }
  };
  
  


  const handleImageChange = (e) => {
  const file = e.target.files[0];
  if (file && ['image/jpeg', 'image/png', 'image/jpg'].includes(file.type)) {
    setProduct({
      ...product,
      image: file,
    });
  } else {
    alert('Please select a valid image file (JPG, JPEG, PNG)');
  }
};






  return (
    <div className="product-form-container">
      <h2>Add Product</h2>
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
        <textarea
          name="description"
          placeholder="Product Description"
          value={product.description}
          onChange={handleChange}
          required
        />
       <input
  type="file"
  name="image"
  onChange={handleImageChange}
  accept="image/*"
  required
/>

        <button type="submit">Add Product</button>
      </form>
    </div>
  );
}

export default ProductForm;