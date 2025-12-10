import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Check, ArrowRight, Settings, Shield, Activity } from 'lucide-react';
import Button from '../../components/Button/Button';
import styles from './ServiceDetails.module.css';

const OperationsMaintenanceDetail: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.serviceDetailsPage}>
      <section className={styles.serviceHero} style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(/tinified/secur.webp)` }}>
        <div className={styles.serviceHeroContent}>
          <h1 className={styles.serviceTitle}>Operations & Maintenance (O&M)</h1>
          <p className={styles.serviceDescription}>Performance-based asset management services for industrial plants</p>
        </div>
      </section>

      <div className={styles.serviceContent}>
        <div className={styles.serviceSection}>
          <h2 className={styles.sectionTitle}>Overview</h2>
          <p className={styles.fullDescription}>
            Our performance-based asset management services include preventive maintenance, asset life extension and operation services of utilities within the plant. Our focus is on minimizing maintenance costs and optimizing plant availability with an emphasis on safety and improving asset performance. Our value added services include condition monitoring, plant shutdown maintenance and commissioning support.
          </p>
        </div>

        <div className={styles.serviceSection}>
          <h2 className={styles.sectionTitle}>Key Benefits</h2>
          <div className={styles.benefitsList}>
            {[
              "Minimized maintenance costs and optimized plant availability",
              "Emphasis on safety and asset performance improvement",
              "Condition monitoring and predictive maintenance",
              "Plant shutdown maintenance expertise",
              "Commissioning support for new installations",
              "Asset life extension strategies"
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
              "Plant assessment and maintenance planning",
              "Preventive maintenance scheduling",
              "Condition monitoring implementation",
              "Shutdown planning and execution",
              "Performance optimization",
              "Continuous improvement and reporting"
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
            Contact us today to discuss your O&M requirements and discover how we can optimize your plant operations.
          </p>
          <Button variant="primary" size="large" onClick={() => navigate('/contact')}>
            Contact Us Now
          </Button>
        </div>
      </section>
    </div>
  );
};

export default OperationsMaintenanceDetail;
