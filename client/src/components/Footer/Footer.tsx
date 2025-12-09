import React from "react";
import { Link, NavLink } from "react-router-dom";
import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react";
import "./Footer.css";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand cont">
            <NavLink to="/">
              <img
                className="logo"
                src="/intralink-logo-Photoroom.png"
                alt=""
              />
            </NavLink>
            <p className="footer-description">
              Tovous Industrial Solutions Pvt Ltd delivers high-quality industrial services
              to clients across manufacturing, infrastructure, oil & gas, steel, cement and
              engineering sectors since 2021.
            </p>
            
           
          </div>
  

          <div className="footer-link-1">
            <div className="footer-col">
              <h5 className="footer-col-title">Quick Links</h5>
              <ul className="footer-nav">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/journey">Our Journey</Link></li>
                <li><Link to="/services">Our Services</Link></li>
                <li><Link to="/gallery">Gallery</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
              </ul>
            </div>

            <div className="footer-col">
              <h5 className="footer-col-title">Services</h5>
              <ul className="footer-nav">
                <li><Link to="/services">Domestic Staff</Link></li>
                <li><Link to="/services">Skilled Workers</Link></li>
                <li><Link to="/services">Cleaning Services</Link></li>
                <li><Link to="/services">Digital Marketing</Link></li>
                <li><Link to="/services">Business Services</Link></li>
              </ul>
            </div>
          </div>

          <div className="footer-col">
            <h5 className="footer-col-title">Contact</h5>
            <ul className="footer-contact">
              <div className="footer-flex">
                <div className="h1st">
                  <li>
                    <span>Email:</span>
                    <a href="mailto:info@tovous.in">info@tovous.in</a>
                  </li>
                  <li>
                    <span>Phone:</span>
                    <a href="tel:+912235983690">+91-22-35983690</a>
                  </li>
                </div>
                <div className="h2nd">
                  <li>
                    <span>Registered Office:</span>
                    <address>
                      Biju Pattanaik Commercial Complex,
                      <br />
                      Room No:07, Ground Floor, Chandrasekharpur,
                      <br />
                      Bhubaneswar-751016
                    </address>
                  </li>
                  <li>
                    <span>Mumbai Office:</span>
                    <address>
                      Shop No-18, Mahavir Kalpavruksha,
                      <br />
                      Kasarvadavali, Thane-400615
                    </address>
                  </li>
                </div>
              </div>
            </ul>

            {/* Social Media Links for desktop */}
            <div className="footer-socials desktop-only">
              <h5 className="footer-col-title">Follow Us</h5>
              <div className="social-icons">
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                  <Facebook size={20} />
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                  <Instagram size={20} />
                </a>
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                  <Linkedin size={20} />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <Twitter size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            &copy; {currentYear} Tovous Industrial Solutions Pvt Ltd. All rights reserved. CIN: U45309OR2021PTC037991
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
