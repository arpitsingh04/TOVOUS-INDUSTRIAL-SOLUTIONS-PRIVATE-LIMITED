import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Home, Users, Award, Calendar, ArrowRight, Power } from 'lucide-react';
import Button from '../../components/Button/Button';
import ServiceCard from '../../components/ServiceCard/ServiceCard';
import FeaturedProjects from '../../components/FeaturedProjects/FeaturedProjects';
import './HomePage.css';
import ClientLogos from '../../components/ClientLogos/ClientLogos';
import Testimonials from '../../components/Testimonials/Testimonials';

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const [counts, setCounts] = useState({
    years: 0,
    projects: 0,
    clients: 0,
    sectors: 0
  });
  
  const targetCounts = {
    years: 3,
    projects: 8,
    clients: 15,
    sectors: 6
  };
  
  const statsRef = useRef<HTMLDivElement>(null);
  const animationStarted = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !animationStarted.current) {
            animationStarted.current = true;
            startCountAnimation();
          }
        });
      },
      { threshold: 0.1 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const startCountAnimation = () => {
    const duration = 5000;
    const steps = 60;
    const interval = duration / steps;

    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      
      const progress = currentStep / steps;
      
      setCounts({
        years: Math.round(easeOutQuad(progress) * targetCounts.years),
        projects: Math.round(easeOutQuad(progress) * targetCounts.projects),
        clients: Math.round(easeOutQuad(progress) * targetCounts.clients),
        sectors: Math.round(easeOutQuad(progress) * targetCounts.sectors)
      });

      if (currentStep >= steps) {
        clearInterval(timer);
        setCounts(targetCounts);
      }
    }, interval);
  };

  const easeOutQuad = (t: number): number => {
    return t * (2 - t);
  };

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-background"></div>
        <div className="hero-content">
          <div className="hero-text">
            <p className="hero-subtitle">Established 2021 | CIN: U45309OR2021PTC037991</p>
            <h1 className="hero-title">
              Tovous - Your Trusted Partner in Industrial Solutions
            </h1>
            <p className="hero-description">
              Delivering high-quality industrial services across manufacturing, infrastructure, 
              oil & gas, steel, cement and engineering sectors. On time. Within budget. 
              Without compromise.
            </p>
            <div className="hero-buttons">
              <Button 
                variant="primary" 
                size="large" 
                onClick={() => navigate('/services')}
              >
                Explore Our Services
              </Button>
              <Button 
                variant="secondary" 
                size="large" 
                onClick={() => navigate('/contact')}
              >
                Get Started Today
              </Button>
            </div>
          </div>
          
          <div className="hero-stats" ref={statsRef}>
            <div className="hero-stat">
              <div className="stat-value">{counts.years}+</div>
              <div className="stat-label">Years of Excellence</div>
            </div>
            <div className="hero-stat">
              <div className="stat-value">{counts.projects}+</div>
              <div className="stat-label">Major Projects</div>
            </div>
            <div className="hero-stat">
              <div className="stat-value">{counts.clients}+</div>
              <div className="stat-label">Trusted Clients</div>
            </div>
            <div className="hero-stat">
              <div className="stat-value">{counts.sectors}</div>
              <div className="stat-label">Industry Sectors</div>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="section welcome-section">
        <div className="container">
          <h2 className="section-title">About Tovous Industrial Solutions</h2>
          <div className="welcome-content">
            <div className="welcome-text">
              <p>
                Founded in 2021, Tovous Industrial Solutions Pvt Ltd is an India-based company delivering 
                high-quality industrial services to clients across the manufacturing, infrastructure, oil & gas, 
                steel, cement and engineering sectors.
              </p>
              <p>
                We are driven by one clear commitment: to meet client expectations — on time and within budget. 
                Our approach is simple — provide the best possible service in a cost-effective and time-bound 
                manner, without compromising on quality or safety.
              </p>
              <ul className="features-list">
                <li>
                  <span className="feature-icon">✓</span>
                  <span>Experienced Technical Team</span>
                </li>
                <li>
                  <span className="feature-icon">✓</span>
                  <span>Strong Safety & Compliance Focus</span>
                </li>
                <li>
                  <span className="feature-icon">✓</span>
                  <span>Fast Mobilization & Execution</span>
                </li>
              </ul>
              <button className="cta-btn cta-btn-primary" onClick={() => navigate('/about')}>
                Learn More About Us
                <ArrowRight size={20} />
              </button>
            </div>
            <div className="welcome-image-container">
              <img 
                src="https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Industrial excellence at Tovous" 
                className="welcome-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="section featured-projects-section">
        <div className="container">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">Showcasing our excellence in industrial solutions</p>
          <FeaturedProjects />
        </div>
      </section>

      {/* Services Overview */}
      <section className="section services-section">
        <div className="container">
          <div className="services-header">
            <h2 className="section-title">Our Services</h2>
            <p className="services-subtitle">Comprehensive industrial solutions tailored to your needs</p>
          </div>
          <div className="services-grid">
            <div className="service-card-pro service-card-1">
              <div className="service-overlay"></div>
              <div className="service-content">
                <div className="service-icon-box">
                  <Home size={32} />
                </div>
                <h3>Operations & Maintenance</h3>
                <p className="service-description">Performance-based asset management including preventive maintenance, asset life extension, and plant shutdown support.</p>
                <a href="/services" className="service-link">Learn More →</a>
              </div>
            </div>
            <div className="service-card-pro service-card-2">
              <div className="service-overlay"></div>
              <div className="service-content">
                <div className="service-icon-box">
                  <Users size={32} />
                </div>
                <h3>Fabrication & Erection</h3>
                <p className="service-description">Heavy fabrication, erection, and commissioning of industrial pipelines, storage tanks, columns, and mechanical equipment.</p>
                <a href="/services" className="service-link">Learn More →</a>
              </div>
            </div>
            <div className="service-card-pro service-card-3">
              <div className="service-overlay"></div>
              <div className="service-content">
                <div className="service-icon-box">
                  <Award size={32} />
                </div>
                <h3>Fire Protection Systems</h3>
                <p className="service-description">Complete turnkey solutions including design, engineering, supply, installation, testing and commissioning.</p>
                <a href="/services" className="service-link">Learn More →</a>
              </div>
            </div>
            <div className="service-card-pro service-card-4">
              <div className="service-overlay"></div>
              <div className="service-content">
                <div className="service-icon-box">
                  <Calendar size={32} />
                </div>
                <h3>Electrical & Instrumentation</h3>
                <p className="service-description">Comprehensive E&I works for substations, industrial plants, refineries, and railway electrification projects.</p>
                <a href="/services" className="service-link">Learn More →</a>
              </div>
            </div>
          </div>
          <div className="featured-projects-cta">
            <button className="cta-btn cta-btn-primary" onClick={() => navigate('/services')}>
              Explore All Services
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* ClientLogos section */}
      <ClientLogos />
      
      {/* Testimonials section */}
      <Testimonials />

      {/* Call to Action */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-wrapper">
            <div className="cta-content">
              <h2>Ready to Experience Excellence ?</h2>
              <p>
                Let us deliver dependable, cost-effective, and timely solutions for your industrial operations.
              </p>
              <div className="cta-buttons">
                <button className="cta-btn cta-btn-primary" onClick={() => navigate('/contact')}>
                  Contact Us Today
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

export default HomePage;
