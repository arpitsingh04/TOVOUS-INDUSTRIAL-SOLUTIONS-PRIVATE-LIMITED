import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Check, ArrowRight } from 'lucide-react';
import Button from '../../components/Button/Button';
import styles from './ServiceDetails.module.css';

const MROSimpleDetail: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.serviceDetailsPage}>
      <section className={styles.serviceHero} style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(/tinified/software.webp)` }}>
        <div className={styles.serviceHeroContent}>
          <h1 className={styles.serviceTitle}>MRO Simple Platform</h1>
          <p className={styles.serviceDescription}>B2B Industrial E-commerce for MRO supplies</p>
        </div>
      </section>

      <div className={styles.serviceContent}>
        <div className={styles.serviceSection}>
          <h2 className={styles.sectionTitle}>Overview</h2>
          <p className={styles.fullDescription}>
            MRO Simple is the B2B Industrial E-commerce Platform that lets buyers and sellers connect. Streamline your maintenance, repair, and operations procurement with our digital platform.
          </p>
        </div>

        <div className={styles.serviceSection}>
          <h2 className={styles.sectionTitle}>Key Benefits</h2>
          <div className={styles.benefitsList}>
            {[
              "B2B industrial e-commerce platform",
              "Connect buyers and sellers efficiently",
              "Streamlined MRO procurement",
              "Wide range of industrial supplies",
              "Digital ordering and tracking",
              "Cost-effective sourcing solutions"
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
              "Platform registration and setup",
              "Product catalog browsing",
              "Quote requests and comparisons",
              "Order placement and confirmation",
              "Delivery tracking",
              "Invoice and payment processing"
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
            Contact us today to learn more about MRO Simple platform and how it can streamline your procurement.
          </p>
          <Button variant="primary" size="large" onClick={() => navigate('/contact')}>
            Contact Us Now
          </Button>
        </div>
      </section>
    </div>
  );
};

export default MROSimpleDetail;
