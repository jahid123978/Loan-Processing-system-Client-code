import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer>
        <section class="section-top">
          <div class="col">
            <h3>Home</h3>
            <h3>Features</h3>
            <h3>Pricing</h3>
          </div>
          <div class="col">
            <h3>Log In</h3>
            <h3>Sign Up</h3>
            <h3>Support</h3>
          </div>
          <div class="col">
            <h3>About Us</h3>
            <div>Contact Us</div>
            <div>Privacy</div>
          </div>
          <div class="col">
            <h3>Loans</h3>
            <div>Different kinds loans</div>
          </div>
        </section>
        <section class="section-bottom">
          <div>Copyright @ by Jahid Hasan</div>
        </section>
        </footer>
    );
};

export default Footer;