import React from "react";
import { Link } from "react-router-dom";
import "./homeStyles.css";

const Home = () => {
  return (
    <div className="homepage">
      <header className="hero-section">
        <div style={{ paddingTop: '120px' }}>
          <h1>🛒 Welcome to Delicious Delivery – Your One-Stop Online Grocery Destination</h1>
          <p>Experience the convenience of shopping for fresh produce, quality meats, dairy delights, indulgent chocolates, and creamy ice creams—all from the comfort of your home. At FreshCart, we're committed to delivering the finest products right to your doorstep.
</p>
</div>
          <Link to="/Veg">
            <div className="button-container">
  <button className="shop-now-btn">Shop Now</button>
</div>
          </Link>
      </header>
  
      <section className="homepage-categories">
        <h2>Shop by Category</h2>
        <div className="category-grid">
          <Link to="/Veg" className="category-card">🥦 Vegetables</Link>
          <Link to="/NonVeg" className="category-card">🍗 Non-Veg</Link>
          <Link to="/Milk" className="category-card">🥛 Milk</Link>
          <Link to="/Chocolate" className="category-card">🍫 Chocolates</Link>
       <Link to="/IceCreams" className="category-card">🍨 Ice Creams</Link>
        </div>
      </section>
      <section className="homepage-benefits">
        <h2>Why Choose Us?</h2>
        <div className="benefit-grid">
          <div className="benefit-card">
            <h3>🚀 Fast Delivery</h3>
            <p>Groceries at your doorstep in under 60 minutes.</p>
          </div>
          <div className="benefit-card">
            <h3>🌱 Fresh Products</h3>
            <p>Daily-sourced and quality-checked goods.</p>
          </div>
          <div className="benefit-card">
            <h3>💳 Easy Payments</h3>
            <p>Secure checkout with multiple payment options.</p>
          </div>
        </div>
        
      </section>
      </div>
    
  );
};

export default Home;
  
       