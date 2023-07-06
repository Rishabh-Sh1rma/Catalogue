import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h3>Contact Information</h3>
        <p>
          Address: 258585, Ghee Walo Ka Rasta(near pahalvan juice center), Johri
          Bazar, Jaipur
        </p>
        <p>Email: manishar1974@gmail.com(Manish Sharma)</p>
        <p>Phone: 9664078593, 9784352249</p>
      </div>

      <div className="footer-section">
        <h3>Social Media</h3>
        <div className="social-media-icons">
          <a href="https://www.facebook.com">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://www.twitter.com">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://www.instagram.com">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>

      <div className="footer-section">
        <h3>Sign up for Newsletter</h3>
        <form>
          <input type="email" placeholder="Enter your email" />
          <button type="submit">Subscribe</button>
        </form>
      </div>
    </footer>
  );
};

export default Footer;
