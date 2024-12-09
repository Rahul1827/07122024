// import React, { useState } from "react";
// import "./AddProduct.css"; 

// const AddProduct = () => {
//   const [product, setProduct] = useState({
//     name: "",
//     brand: "",
//     description: "",
//     price: "",
//     image: "",
//     quantity: 1,
//   });

//   const [imagePreview, setImagePreview] = useState(null); 
//   const [products, setProducts] = useState(
//     JSON.parse(localStorage.getItem("products")) || []
//   );

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setProduct((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   const handleImageUpload = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const imageUrl = URL.createObjectURL(file); 
//       setProduct((prevState) => ({
//         ...prevState,
//         image: imageUrl,
//       }));
//       setImagePreview(imageUrl); 
//     }
//   };

//   // Handle adding product
//   const handleAddProduct = (e) => {
//     e.preventDefault();
//     const updatedProducts = [...products, product];
//     setProducts(updatedProducts);
//     localStorage.setItem("products", JSON.stringify(updatedProducts)); // Store products in localStorage
//     setProduct({ name: "", brand: "", description: "", price: "", image: "", quantity: 1 }); // Reset product state
//     setImagePreview(null); 
//   };

//   const handleDeleteProduct = (index) => {
//     const updatedProducts = products.filter((_, i) => i !== index);
//     setProducts(updatedProducts);
//     localStorage.setItem("products", JSON.stringify(updatedProducts));
//   };

//   return (
//     <div className="add-product-container">
//       <h2>Add New Product</h2>

//       {/* Product Form */}
//       <form onSubmit={handleAddProduct} className="product-form">
//         <div className="form-group">
//           <input
//             type="text"
//             name="name"
//             placeholder="Product Name"
//             value={product.name}
//             onChange={handleChange}
//             className="form-control"
//           />
//         </div>

//         <div className="form-group">
//           <input
//             type="text"
//             name="brand"
//             placeholder="Brand Name"
//             value={product.brand}
//             onChange={handleChange}
//             className="form-control"
//           />
//         </div>

//         <div className="form-group">
//           <textarea
//             name="description"
//             placeholder="Product Description"
//             value={product.description}
//             onChange={handleChange}
//             className="form-control description-textarea"
//             rows="4"
//           />
//         </div>

//         <div className="form-group">
//           <input
//             type="number"
//             name="price"
//             placeholder="Price"
//             value={product.price}
//             onChange={handleChange}
//             className="form-control"
//           />
//         </div>

//         <div className="form-group">
//           <input
//             type="file"
//             name="image"
//             onChange={handleImageUpload} // Image file input
//             className="form-control"
//           />
//         </div>

//         {imagePreview && (
//           <div className="image-preview">
//             <img src={imagePreview} alt="Preview" className="image-preview-img" />
//           </div>
//         )}

//         <div className="form-group">
//           <input
//             type="number"
//             name="quantity"
//             placeholder="Quantity"
//             value={product.quantity}
//             onChange={handleChange}
//             className="form-control"
//           />
//         </div>

//         <button type="submit" className="submit-button">
//           Add Product
//         </button>
//       </form>

//       {/* Display Added Products Below the Form */}
//       {products.length > 0 && (
//         <div className="product-cards">
//           {products.map((item, index) => (
//             <div key={index} className="product-card">
//               <img src={item.image} alt={item.name} className="product-image" />
//               <div className="product-info">
//                 <h3 className="product-name">{item.name}</h3>
//                 <p className="product-brand">Brand: {item.brand}</p> {/* Display Brand Name */}
//                 <p className="product-description">{item.description}</p>
//                 <p className="product-price">Price: ₹{item.price}</p>
//                 <p className="product-quantity">Quantity: {item.quantity}</p>
//                 <div className="product-actions">
//                   <button className="edit-button">Edit</button>
//                   <button
//                     className="delete-button"
//                     onClick={() => handleDeleteProduct(index)}
//                   >
//                     Delete
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default AddProduct;

import React, { useState, useEffect } from "react";
import "./AddProduct.css";

const AddProduct = () => {
  const [product, setProduct] = useState({
    name: "",
    brand: "",
    description: "",
    price: "",
    image: "",
    quantity: 1,
    category: "Wheat", // Default category
  });

  const [customCategory, setCustomCategory] = useState("");
  const [isOtherCategory, setIsOtherCategory] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);

  // Load products from localStorage, don't clear them on load
  const [products, setProducts] = useState(
    JSON.parse(localStorage.getItem("products")) || []
  );

  const [categories, setCategories] = useState(
    JSON.parse(localStorage.getItem("categories")) || ["Wheat", "Rice", "Corn"]
  );

  useEffect(() => {
    // Only update localStorage when categories change
    localStorage.setItem("categories", JSON.stringify(categories));
  }, [categories]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleCategoryChange = (e) => {
    const value = e.target.value;
    if (value === "Other") {
      setIsOtherCategory(true);
      setProduct((prevState) => ({ ...prevState, category: "" }));
    } else {
      setIsOtherCategory(false);
      setProduct((prevState) => ({ ...prevState, category: value }));
    }
  };

  const handleCustomCategoryChange = (e) => {
    const value = e.target.value;
    setCustomCategory(value);
    setProduct((prevState) => ({ ...prevState, category: value }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProduct((prevState) => ({
        ...prevState,
        image: imageUrl,
      }));
      setImagePreview(imageUrl);
    }
  };

  const handleAddProduct = (e) => {
    e.preventDefault();

    // Add new category to categories list if it's custom
    if (isOtherCategory && customCategory && !categories.includes(customCategory)) {
      setCategories((prevCategories) => [...prevCategories, customCategory]);
    }

    const updatedProducts = [...products, product];
    setProducts(updatedProducts);
    localStorage.setItem("products", JSON.stringify(updatedProducts));
    setProduct({
      name: "",
      brand: "",
      description: "",
      price: "",
      image: "",
      quantity: 1,
      category: "Wheat",
    });
    setImagePreview(null);
    setCustomCategory("");
    setIsOtherCategory(false);
  };

  const handleDeleteProduct = (index) => {
    const updatedProducts = products.filter((_, i) => i !== index); // Remove product by index
    setProducts(updatedProducts); // Update state
    localStorage.setItem("products", JSON.stringify(updatedProducts)); // Update localStorage
  };

  return (
    <div className="add-product-container">
      <h2>Add New Product</h2>

      <form onSubmit={handleAddProduct} className="product-form">
        {/* Category Dropdown */}
        <div className="form-group">
          <select
            name="category"
            value={product.category}
            onChange={handleCategoryChange}
            className="form-control"
          >
            {categories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
            <option value="Other">Other</option>
          </select>
        </div>

        {/* Custom Category Input */}
        {isOtherCategory && (
          <div className="form-group">
            <input
              type="text"
              placeholder="Enter Crop Name"
              value={customCategory}
              onChange={handleCustomCategoryChange}
              className="form-control"
            />
          </div>
        )}

        {/* Product Fields */}
        <div className="form-group">
          <input
            type="text"
            name="name"
            placeholder="Product Name"
            value={product.name}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="brand"
            placeholder="Brand Name"
            value={product.brand}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <textarea
            name="description"
            placeholder="Product Description"
            value={product.description}
            onChange={handleChange}
            className="form-control description-textarea"
            rows="4"
          />
        </div>
        <div className="form-group">
          <input
            type="number"
            name="price"
            placeholder="Price"
            value={product.price}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <input
            type="file"
            name="image"
            onChange={handleImageUpload}
            className="form-control"
          />
        </div>
        {imagePreview && (
          <div className="image-preview">
            <img src={imagePreview} alt="Preview" className="image-preview-img" />
          </div>
        )}
        <div className="form-group">
          <input
            type="number"
            name="quantity"
            placeholder="Quantity"
            value={product.quantity}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <button type="submit" className="submit-button">
          Add Product
        </button>
      </form>

      {/* Display Added Products */}
      {products.length > 0 && (
        <div className="product-cards">
          {products.map((item, index) => (
            <div key={index} className="product-card">
              <img src={item.image} alt={item.name} className="product-image" />
              <div className="product-info">
                <h3 className="product-name">{item.name}</h3>
                <p className="product-brand">Brand: {item.brand}</p>
                <p className="product-description">{item.description}</p>
                <p className="product-price">Price: ₹{item.price}</p>
                <p className="product-quantity">Quantity: {item.quantity}</p>
                <p className="product-category">Category: {item.category}</p>
                <div className="product-actions">
                  <button className="edit-button">Edit</button>
                  <button
                    className="delete-button"
                    onClick={() => handleDeleteProduct(index)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AddProduct;

