import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Check, ArrowRight } from 'lucide-react';
import Button from '../../components/Button/Button';
import styles from './ServiceDetails.module.css';

const ElectricalInstrumentationDetail: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.serviceDetailsPage}>
      <section className={styles.serviceHero} style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(/tinified/oil.webp)` }}>
        <div className={styles.serviceHeroContent}>
          <h1 className={styles.serviceTitle}>Electrical & Instrumentation</h1>
          <p className={styles.serviceDescription}>Comprehensive E&I works for industrial facilities</p>
        </div>
      </section>

      <div className={styles.serviceContent}>
        <div className={styles.serviceSection}>
          <h2 className={styles.sectionTitle}>Overview</h2>
          <p className={styles.fullDescription}>
            Electrical & Instrumentation works for substation and Industrial plants & Refineries, Rural transmission and railway Transmission & Electrification. We provide complete E&I solutions including installation, testing, and commissioning.
          </p>
        </div>

        <div className={styles.serviceSection}>
          <h2 className={styles.sectionTitle}>Key Benefits</h2>
          <div className={styles.benefitsList}>
            {[
              "Substation and industrial plant E&I works",
              "Refinery electrical and instrumentation expertise",
              "Rural and railway transmission projects",
              "Complete installation and commissioning",
              "Compliance with electrical standards",
              "Experienced technical team"
            ].map((benefit, index) => (
              <div key={index} className={styles.benefitItem}>
                <div className={styles.itemIcon}><Check size={20} /></div>
                <div className={styles.itemContent}><p>{benefit}</p></div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.serviceSection}>
          <h2 className={styles.sectionTitle}>Our Process</h2>
          <div className={styles.processList}>
            {[
              "E&I requirements analysis",
              "Design and engineering",
              "Equipment procurement",
              "Installation and wiring",
              "Testing and calibration",
              "Commissioning and documentation"
            ].map((step, index) => (
              <div key={index} className={styles.processItem}>
                <div className={styles.itemIcon}><ArrowRight size={20} /></div>
                <div className={styles.itemContent}>
                  <h4>Step {index + 1}</h4>
                  <p>{step}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.servicesButton}>
          <Button variant="primary" size="large" onClick={() => navigate('/services')}>
            Return to Services
          </Button>
        </div>
      </div>

      <section className={styles.ctaSection}>
        <div className={styles.ctaContent}>
          <h2 className={styles.ctaTitle}>Ready to Get Started?</h2>
          <p className={styles.ctaDescription}>
            Contact us today to discuss your electrical and instrumentation needs.
          </p>
          <Button variant="primary" size="large" onClick={() => navigate('/contact')}>
            Contact Us Now
          </Button>
        </div>
      </section>
    </div>
  );
};

export default ElectricalInstrumentationDetail;
