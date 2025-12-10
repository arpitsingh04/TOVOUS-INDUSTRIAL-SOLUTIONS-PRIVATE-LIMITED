import React, { useEffect, useRef, useState } from 'react';
import TimelineItem from '../../components/TimelineItem/TimelineItem';
import './JourneyPage.css';
import styles from './JourneyPage.module.css';

const JourneyPage: React.FC = () => {
  const [counts, setCounts] = useState({
    years: 0,
    projects: 0,
    clients: 0,
    services: 0
  });
  
  const targetCounts = {
    years: 3,
    projects: 8,
    clients: 15,
    services: 5
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
    const duration = 2000; // 2 seconds
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
        services: Math.round(easeOutQuad(progress) * targetCounts.services)
      });

      if (currentStep >= steps) {
        clearInterval(timer);
        setCounts(targetCounts);
      }
    }, interval);
  };

  // Easing function for smoother animation
  const easeOutQuad = (t: number): number => {
    return t * (2 - t);
  };

  return (
    <div className="journey-page">
      {/* Hero Section */}
      <section className="journey-hero-section">
        <div className="container">
          <div className="journey-hero-content">
            <h1>Our Journey</h1>
            <p>Building Excellence in Industrial Solutions Since 2021</p>
          </div>
        </div>
      </section>

      {/* Journey Introduction */}
      <section className="section journey-intro-section">
        <div className="container">
          <div className="journey-intro-content">
            <h2 className="section-title">Our Growth Story</h2>
            <p className="journey-intro-text">
              Founded in 2021, Tovous Industrial Solutions Pvt Ltd is an India-based company delivering 
              high-quality industrial services to clients across manufacturing, infrastructure, oil & gas, 
              steel, cement and engineering sectors. We are driven by one clear commitment: to meet client 
              expectations — on time and within budget.
            </p>
            <div className="journey-stats" ref={statsRef}>
              <div className="stat-item">
                <span className="stat-number">{counts.years}+</span>
                <span className={styles['stat-label']}>Years of Excellence</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">{counts.projects}+</span>
                <span className={styles['stat-label']}>Major Projects</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">{counts.clients}+</span>
                <span className={styles['stat-label']}>Trusted Clients</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">{counts.services}</span>
                <span className={styles['stat-label']}>Core Services</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section timeline-section">
        <div className="container">
          <h2 className="section-title">Key Milestones</h2>
          
          <div className="timeline-container">
            <div className="timeline-line"></div>
            
            <TimelineItem 
              year="2021"
              title="Foundation"
              description="Tovous Industrial Solutions Pvt Ltd was established with CIN NO: U45309OR2021PTC037991, committed to delivering high-quality industrial services."
              isLeft={true}
            />
            
            <TimelineItem 
              year="2021"
              title="ONGC Kesanapalli Project"
              description="Successfully completed construction of elevated flare systems at Kesanapalli Installation, Rajahmundry Asset for ONGC through Ador Welding Limited."
              isLeft={false}
            />
            
            <TimelineItem 
              year="2022"
              title="IOCL Paradip Refinery"
              description="Executed replacement of existing fabrication & erection of flare structures and flare tip replacement work at BOOT-3 Terminal, IOCL Refinery Paradip."
              isLeft={true}
            />
            
            <TimelineItem 
              year="2022"
              title="GAIL Usar Project"
              description="Completed fabrication, erection and commissioning of Regeneration Air Heater Unit at GAIL Usar, including E&I works for 52 Mtr height structure."
              isLeft={false}
            />
            
            <TimelineItem 
              year="2023"
              title="BARC Tarapur"
              description="Delivered fabrication and erection of structural steel & piping works for Package-110 at BARC, Tarapur through Tata Projects Limited."
              isLeft={true}
            />
            
            <TimelineItem 
              year="2023"
              title="IREL Partnership"
              description="Secured multiple contracts with Indian Rare Earth Limited (Department of Atomic Energy) for AMC of mining works and structural fabrication."
              isLeft={false}
            />
            
            <TimelineItem 
              year="2024"
              title="Service Expansion"
              description="Expanded service portfolio to include Operations & Maintenance, Fire Protection Systems, and Electrical & Instrumentation works."
              isLeft={true}
            />
            
            <TimelineItem 
              year="Present"
              title="Industry Leader"
              description="Today, Tovous continues to deliver dependable, cost-effective industrial services, trusted by top-tier clients across India."
              isLeft={false}
            />
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section vision-mission-section">
        <div className="container">
          <div className="vision-mission-grid">
            <div className="vision-card">
              <h2>Our Vision</h2>
              <p>
                To be a trusted industrial services partner across India, known for quality, speed, 
                and meeting expectations — every time.
              </p>
            </div>
            
            <div className="mission-card">
              <h2>Our Mission</h2>
              <p>
                To deliver dependable, cost-effective, and timely industrial services that keep 
                client operations running at their best.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Future Plans */}
      <section className="section future-plans-section">
        <div className="container">
          <h2 className="section-title">Why Choose Tovous</h2>
          <div className="future-content">
            <div className="future-image">
              <img 
                src="https://images.pexels.com/photos/159358/construction-site-build-construction-work-159358.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Tovous Industrial Excellence" 
              />
            </div>
            <div className="future-text">
              <p>
                Tovous Industrial Solutions stands out in the industry through our unwavering commitment 
                to excellence and client satisfaction:
              </p>
              <ul className="future-list">
                <li>Experienced and skilled technical team</li>
                <li>Strong focus on safety and compliance</li>
                <li>Fast mobilization and execution</li>
                <li>Proven ability to deliver on time</li>
                <li>Trusted by top-tier clients including ONGC, IOCL, GAIL, and IREL</li>
              </ul>
              <p>
                We recognize that every worker has the right to a working environment that is free of 
                recognized hazards. We invest resources to safeguard the workplace, our clients' assets, 
                and the environment.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default JourneyPage;