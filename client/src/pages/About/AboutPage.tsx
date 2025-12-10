import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Shield, Factory, Leaf, CheckCircle, Award, Clock, Users, ArrowRight, Power } from 'lucide-react';
import Button from '../../components/Button/Button';
import './AboutPage.css';
import ClientLogos from '../../components/ClientLogos/ClientLogos';

const AboutPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero-section">
        <div className="container">
          <div className="about-hero-content">
            <h1>About Tovous</h1>
            <p>Delivering Excellence in Industrial Solutions Since 2021</p>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="section who-we-are-section">
        <div className="container">
          <div className="who-we-are-content">
            <div className="who-we-are-text">
              <h2 className="section-title">Who We Are</h2>
              <p>
                Founded in 2021, Tovous Industrial Solutions Pvt Ltd is an India-based company 
                delivering high-quality industrial services to clients across the manufacturing, 
                infrastructure, oil & gas, steel, cement and engineering sectors.
              </p>
              <p>
                We are driven by one clear commitment: to meet client expectations — on time and within budget. 
                Our approach is simple — provide the best possible service in a cost-effective and time-bound 
                manner, without compromising on quality or safety.
              </p>
              <p><strong>Our Services:</strong></p>
              <ul className="country-list">
                <li>Plant and equipment maintenance</li>
                <li>Installation and commissioning of industrial systems</li>
                <li>Automation and control system support</li>
                <li>Technical manpower supply</li>
                <li>Preventive and corrective maintenance</li>
                <li>Facility and utility management</li>
              </ul>
              <p>
                Every project is tailored to our client's needs with a focus on performance, safety, and reliability.
              </p>
            </div>
            <div className="who-we-are-image">
              <img 
              src="https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=800" 
              alt="Tovous Industrial Solutions" 
              />
              </div>
          </div>
        </div>


         
      </section>
      

      {/* Our Promise Section */}
      <section className="section our-promise-section">
        <div className="container">
          <h2 className="section-title">Why Choose Tovous</h2>
          <div className="why-choose-grid">
            <div className="why-choose-card">
              <div className="why-choose-icon"><Users size={38} /></div>
              <h3>Experienced Technical Team</h3>
              <p>Our skilled and experienced technical team brings proven expertise across all industrial sectors.</p>
            </div>
            
            <div className="why-choose-card">
              <div className="why-choose-icon"><Shield size={38} /></div>
              <h3>Safety & Compliance</h3>
              <p>Strong focus on H.S.E. policies, safeguarding the workplace, client assets, and the environment.</p>
            </div>
            
            <div className="why-choose-card">
              <div className="why-choose-icon"><Clock size={38} /></div>
              <h3>On-Time Delivery</h3>
              <p>Fast mobilization and execution with proven ability to deliver projects on time and within budget.</p>
            </div>
          </div>
        </div>
      </section>

      {/* H.S.E. Policy Section */}
      {/* <section className="section our-approach-section">
        <div className="container">
          <div className="approach-content">
            <div className="approach-text">
              <h2 className="section-title">H.S.E. Policy</h2>
              <div className="hse-policy-content">
                <div className="policy-quote">
                  <h3>"FATE SAVES ONCE A TIME, SAFETY SAVES ALL THE TIME."</h3>
                </div>
                <p>
                  We recognize that every worker has the right to a working environment that is free of 
                  recognized hazards to health, safety and well-being. We invest resources to safeguard the 
                  workplace, our clients' assets and the environment.
                </p>
                <p>
                  Tovous Industrial Solutions Pvt Ltd considers quality as a corner stone in its development, 
                  profitability and growth and the key to the long term success of our company.
                </p>
                <div className="policy-highlights">
                  <div className="policy-item">
                    <Shield className="policy-icon" size={24} />
                    <span>Worker Safety First</span>
                  </div>
                  <div className="policy-item">
                    <Factory className="policy-icon" size={24} />
                    <span>Asset Protection</span>
                  </div>
                  <div className="policy-item">
                    <Leaf className="policy-icon" size={24} />
                    <span>Environmental Care</span>
                  </div>
                  <div className="policy-item">
                    <CheckCircle className="policy-icon" size={24} />
                    <span>Quality Assurance</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="approach-image">
              <img 
                src="https://images.pexels.com/photos/159358/construction-site-build-construction-work-159358.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Safety at Tovous" 
              />
            </div>
          </div>
        </div>
      </section> */}

 

   

         {/* ClientLogos section */}
         {/* <ClientLogos /> */}

   

           {/* Leadership Section */}
      <section className="section team-section">
        <div className="container">
          <h2 className="section-title">Our Leadership</h2>
          <p className="section-subtitle">Guided by experienced directors committed to excellence</p>
          <div className="team-grid">
            <div className="team-member">
              <div className="member-image">
                <span>SP</span>
              </div>
              <h3 className="member-name">Sunil Kumar Pradhan</h3>
              <p className="member-role">Director</p>
            </div>
            
            <div className="team-member">
              <div className="member-image">
                <span>PP</span>
              </div>
              <h3 className="member-name">Pravamayee Priyadarsini</h3>
              <p className="member-role">Director</p>
            </div>
          </div>
        </div>
      </section>

       


      {/* Call to Action */}
      <section className="about-cta-section">
        <div className="container">
          <div className="cta-wrapper">
            <div className="cta-content">
              <h2>Let's Get In Touch.</h2>
              <p>
                Let us deliver dependable, cost-effective, and timely industrial services for your operations.
              </p>
              <div className="cta-buttons">
                <button className="cta-btn cta-btn-primary" onClick={() => navigate('/contact')}>
                  Contact Us Today
                  <ArrowRight size={20} />
                </button>
                <button className="cta-btn cta-btn-secondary" onClick={() => navigate('/services')}>
                  Our Services
                  <ArrowRight size={20} />
                </button>
              </div>
            </div>
            <div className="cta-circles">
              <div className="circle circle-1"></div>
              <div className="circle circle-2"></div>
              <div className="circle circle-3">
                <Power size={150} className="power-icon" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;