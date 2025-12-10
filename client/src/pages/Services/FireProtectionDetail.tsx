import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Check, ArrowRight } from 'lucide-react';
import Button from '../../components/Button/Button';
import styles from './ServiceDetails.module.css';

const FireProtectionDetail: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.serviceDetailsPage}>
      <section className={styles.serviceHero} style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(/tinified/security.webp)` }}>
        <div className={styles.serviceHeroContent}>
          <h1 className={styles.serviceTitle}>Fire Protection Systems</h1>
          <p className={styles.serviceDescription}>Complete turnkey fire protection solutions</p>
        </div>
      </section>

      <div className={styles.serviceContent}>
        <div className={styles.serviceSection}>
          <h2 className={styles.sectionTitle}>Overview</h2>
          <p className={styles.fullDescription}>
            Design and Engineering, Supply, Installation, Testing and Commissioning of Fire Protection Systems including Hydrant, Sprinklers, Spray, Foam, Gas Suppression and Fire Alarm Systems on Turnkey Basis for Semi and High Hazard Occupancies in Industrial plants, Commercial/Administrative Buildings.
          </p>
        </div>

        <div className={styles.serviceSection}>
          <h2 className={styles.sectionTitle}>Key Benefits</h2>
          <div className={styles.benefitsList}>
            {[
              "Complete turnkey solutions from design to commissioning",
              "Hydrant, sprinkler, and spray systems",
              "Foam and gas suppression systems",
              "Fire alarm and detection systems",
              "Compliance with safety standards",
              "Semi and high hazard occupancy expertise"
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
              "Fire risk assessment and system design",
              "Engineering and regulatory approvals",
              "Equipment supply and procurement",
              "Installation and integration",
              "Testing and commissioning",
              "Training and maintenance support"
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
            Contact us today to discuss your fire protection system requirements.
          </p>
          <Button variant="primary" size="large" onClick={() => navigate('/contact')}>
            Contact Us Now
          </Button>
        </div>
      </section>
    </div>
  );
};

export default FireProtectionDetail;
