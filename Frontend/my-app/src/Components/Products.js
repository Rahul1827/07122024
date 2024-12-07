import React, { useState, useEffect } from "react";
import "./Products.css"; // Add your CSS file for styling

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem("products")) || [];
    setProducts(storedProducts);
  }, []);

  return (
    <div className="products-page">
      <h2>Products</h2>
      <div className="product-cards">
        {products.map((item, index) => (
          <div key={index} className="product-card">
            <img src={item.image} alt={item.name} className="product-image" />
            <div className="product-info">
              <h3 className="product-name">{item.name}</h3>
              <p className="product-description">{item.description}</p>
              <p className="product-price">Price: ₹{item.price}</p>
              <p className="product-quantity">Quantity: {item.quantity}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
