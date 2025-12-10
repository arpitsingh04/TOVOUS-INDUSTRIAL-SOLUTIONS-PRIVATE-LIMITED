import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Check, ArrowRight } from 'lucide-react';
import Button from '../../components/Button/Button';
import styles from './ServiceDetails.module.css';

const PreventiveMaintenanceDetail: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.serviceDetailsPage}>
      <section className={styles.serviceHero} style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(/tinified/secur.webp)` }}>
        <div className={styles.serviceHeroContent}>
          <h1 className={styles.serviceTitle}>Preventive & Corrective Maintenance</h1>
          <p className={styles.serviceDescription}>Proactive maintenance programs and rapid corrective actions</p>
        </div>
      </section>

      <div className={styles.serviceContent}>
        <div className={styles.serviceSection}>
          <h2 className={styles.sectionTitle}>Overview</h2>
          <p className={styles.fullDescription}>
            Our preventive and corrective maintenance services ensure optimal equipment performance and minimize downtime. We provide comprehensive maintenance solutions including scheduled preventive maintenance, emergency repairs, and performance optimization for industrial facilities.
          </p>
        </div>

        <div className={styles.serviceSection}>
          <h2 className={styles.sectionTitle}>Key Benefits</h2>
          <div className={styles.benefitsList}>
            {[
              "Proactive maintenance programs to prevent failures",
              "Rapid corrective actions to minimize downtime",
              "Scheduled maintenance planning and execution",
              "Emergency repair services available 24/7",
              "Equipment performance monitoring and optimization",
              "Reduced operational costs and extended asset life"
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
              "Equipment assessment and maintenance planning",
              "Preventive maintenance scheduling",
              "Regular inspections and monitoring",
              "Corrective action implementation",
              "Performance analysis and reporting",
              "Continuous improvement recommendations"
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
            Contact us today to discuss your maintenance requirements.
          </p>
          <Button variant="primary" size="large" onClick={() => navigate('/contact')}>
            Contact Us Now
          </Button>
        </div>
      </section>
    </div>
  );
};

export default PreventiveMaintenanceDetail;
