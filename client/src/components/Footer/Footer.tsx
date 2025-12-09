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
              Intralink Manpower Recruitment Agency has been providing quality
              manpower solutions since 1994, with nearly 30 years of excellence
              in recruitment and business services.
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
                    <a href="mailto:intralinkgroup.qa@gmail.com">intralinkgroup.qa@gmail.com</a>
                    <a href="mailto:intralinkqatar@hotmail.com">intralinkqatar@hotmail.com</a>
                  </li>
                  <li>
                    <span>Phone:</span>
                    <a href="tel:+97470994833">+974-70994833</a>
                    <a href="tel:+97477866538">+974-77866538</a>
                    <a href="tel:+97430483372">+974-30483372</a>
                    <a href="tel:+97455903227">+974-55903227</a>
                  </li>
                </div>
                <div className="h2nd">
                  <li>
                    <span>WhatsApp:</span>
                    <a href="https://wa.me/97470994833">+974-70994833</a>
                    <a href="https://wa.me/97477866538">+974-77866538</a>
                  </li>
                  <li>
                    <span>Address:</span>
                    <address>
                      Intralink Office,
                      <br />
                      Suq Al Majd Building 1st Floor Office No 01,02,07 Al-Garaffa, Doha-Qatar.
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
            &copy; {currentYear} Intralink Manpower Recruitment Agency. All rights reserved. Established in 1994
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
