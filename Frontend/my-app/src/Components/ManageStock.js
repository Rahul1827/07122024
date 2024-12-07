import React, { useState, useEffect } from 'react';
 import './ManageStock.css';

export default function ManageStock() {
    const [productList, setProductList] = useState([]);

    useEffect(() => {
        const storedProductList = JSON.parse(localStorage.getItem('productList')) || [];
        setProductList(storedProductList);
    }, []);

    const handleStockChange = (index, newStock) => {
        const updatedProductList = [...productList];
        updatedProductList[index].stock = newStock;
        setProductList(updatedProductList);
        localStorage.setItem('productList', JSON.stringify(updatedProductList));
    };

    return (
        <div className="manage-stock">
            <h2>Manage Product Stock</h2>
            <div className="product-list">
                {productList.length > 0 ? (
                    productList.map((product, index) => (
                        <div className="product-card" key={index}>
                            <img src={product.image} alt={product.name} className="product-image" />
                            <h4>{product.name}</h4>
                            <p>{product.description}</p>
                            <p>Price: ₹{product.price}</p>
                            <div>
                                <label>Stock Quantity: </label>
                                <input
                                    type="number"
                                    value={product.stock}
                                    onChange={(e) => handleStockChange(index, e.target.value)}
                                />
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No products available</p>
                )}
            </div>
        </div>
    );
}
