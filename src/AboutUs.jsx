function AboutUs()
 {
  return (
    <div className="aboutpage">
        <h1>About Delicious Delivery</h1>
       <header className="hero-section">
        
        <img src='/images/freshProduce.jpg' alt="Fresh Produce" className="about-image" />
        <p>
          At Delicious Delivery, we believe in bringing the freshest and finest
          groceries right to your doorstep. Whether you’re looking for fresh
          vegetables, quality non-veg items, creamy milk products, indulgent
          chocolates, or refreshing ice creams — we have it all under one roof.
        </p>
      </header>

      <section className="about-mission">
        <h2>Our Mission</h2>
        <header className="hero-sectio">
         
        <p>
          Our mission is to provide a seamless online shopping experience that
          combines convenience with quality. We carefully source every product to
          ensure you get nothing but the best.
        </p>
        </header>
      </section>

      <section className="about-values">
        <h2>Our Values</h2>
        <ul>
          <li>🌿 Freshness & Quality: Only the best for our customers.</li>
          <li>⏱️ Speed & Convenience: Fast delivery without compromise.</li>
          <li>🛡️ Trust & Transparency: Honest products, clear info.</li>
          <li>💚 Customer Satisfaction: Your happiness is our priority.</li>
        </ul>
      </section>
    </div>
  );
};



export default AboutUs;