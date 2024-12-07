import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminDashboard.css';

export default function AdminDashboard() {
    const navigate = useNavigate();

    // redirect to add product page 
    const handleAddProduct = () => {
        navigate('/addProduct');
    };

    // redirect to manage stock page 
    const handleManageStock = () => {
        navigate('/manageStock');
    };

    // Redirect to View Order page
    const handleViewOrders = () => {
        navigate('/viewOrders');
    };

    // Handle logout
    const handleLogout = () => {
        localStorage.removeItem('adminLoggedIn');
        window.location.href = '/';
    };

    return (
        <div className="admin-dashboard">
            <h2>Admin Dashboard</h2>
            <button onClick={handleLogout} className="btn btn-outline-danger">Logout</button>

            <div className="dashboard-cards">
                <div className="dashboard-card" onClick={handleAddProduct}>
                    <h3>Add Product</h3>
                    <p>Click to add new products to your inventory.</p>
                </div>
                <div className="dashboard-card" onClick={handleManageStock}>
                    <h3>Manage Stock</h3>
                    <p>Click to manage your stock levels.</p>
                </div>
                <div className="dashboard-card" onClick={handleViewOrders}>
                    <h3>View Orders</h3>
                    <p>Click to view customer orders.</p>
                </div>
            </div>
        </div>
    );
}
