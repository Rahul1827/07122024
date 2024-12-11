import React, { useState } from 'react';
import './BookFieldVisit.css';

export default function BookFieldVisit() {
  const [formData, setFormData] = useState({
    farmerName: '',
    cropType: '',
    farmAddress: '',
    contactNo: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Field Visit Details:", formData);
    alert("Field visit booked successfully!");
    // Perform API call or form submission logic here
  };

  return (
    <div className="serviceimg">
    <div className="visit-container">
      <h2 className="visit-title">Book Field Visit</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label">Farmer Name:</label>
          <input
            type="text"
            name="farmerName"
            className="form-input"
            placeholder="Enter your name"
            value={formData.farmerName}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label className="form-label">Crop Type:</label>
          <select
            name="cropType"
            className="form-select"
            value={formData.cropType}
            onChange={handleChange}
          >
            <option value="">Select Crop Type</option>
            <option value="Wheat">Wheat</option>
            <option value="Maize">Maize</option>
            <option value="Bajra">Bajra</option>
            <option value="Jowar">Jowar</option>
            <option value="Sugarcane">Sugarcane</option>
            <option value="Pomegranate">Pomegranate</option>
            <option value="Banana">Banana</option>
          </select>
        </div>

        <div className="form-group">
          <label className="form-label">Farm Address:</label>
          <input
            type="text"
            name="farmAddress"
            className="form-input"
            placeholder="Enter your farm address"
            value={formData.farmAddress}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label className="form-label">Contact Number:</label>
          <input
            type="text"
            name="contactNo"
            className="form-input"
            placeholder="Enter your contact number"
            value={formData.contactNo}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="btn-submit">
          Book Visit
        </button>
      </form>
    </div>
    </div>
  );
}
