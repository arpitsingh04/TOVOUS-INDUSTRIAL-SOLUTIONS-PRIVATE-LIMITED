import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Check, ArrowRight } from 'lucide-react';
import Button from '../../components/Button/Button';
import styles from './ServiceDetails.module.css';

const FabricationErectionDetail: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.serviceDetailsPage}>
      <section className={styles.serviceHero} style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(/tinified/construction.webp)` }}>
        <div className={styles.serviceHeroContent}>
          <h1 className={styles.serviceTitle}>Fabrication & Erection (F&E)</h1>
          <p className={styles.serviceDescription}>Heavy fabrication, erection, and commissioning services</p>
        </div>
      </section>

      <div className={styles.serviceContent}>
        <div className={styles.serviceSection}>
          <h2 className={styles.sectionTitle}>Overview</h2>
          <p className={styles.fullDescription}>
            F&E is capable of undertaking Heavy Fabrication, Erection, Commissioning and Major Shutdown with our trained technical team. We specialize in fabrication and erection of industrial pipeline works, storage tanks, columns and vessels, and erection of mechanical equipment (Rotary & Static).
          </p>
        </div>

        <div className={styles.serviceSection}>
          <h2 className={styles.sectionTitle}>Our Capabilities</h2>
          <div className={styles.benefitsList}>
            {[
              "Fabrication and erection of industrial pipeline works",
              "Fabrication and erection of storage tanks, columns and vessels",
              "Erection of Mechanical equipment's (Rotary & Static)",
              "Major shutdown capabilities",
              "Complete commissioning support",
              "Trained technical team for heavy fabrication"
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
              "Engineering and design review",
              "Material procurement and quality checks",
              "Fabrication with quality control",
              "Site preparation and safety planning",
              "Erection and installation",
              "Testing, commissioning and handover"
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
            Contact us today to discuss your fabrication and erection needs.
          </p>
          <Button variant="primary" size="large" onClick={() => navigate('/contact')}>
            Contact Us Now
          </Button>
        </div>
      </section>
    </div>
  );
};

export default FabricationErectionDetail;
