import React from "react";
import { MapPin, Phone, Mail, Smartphone, Clock } from "lucide-react";
import ContactForm from "../../components/ContactForm/ContactForm";
import "./ContactPage.css";

const ContactPage: React.FC = () => {
  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero-section">
        <div className="container">
          <div className="contact-hero-content">
            <h1>Contact Us</h1>
            <p>We're ready to support your manpower and staffing needs</p>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="section contact-info-section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <h2 className="section-title">Get In Touch</h2>
              <p className="contact-intro">
                Whether you need industrial maintenance services, fabrication and erection,
                or technical manpower solutions, our team is ready to assist you with
                professional expertise.
              </p>

              <div className="contact-details">
                <div className="contact-detail-item">
                  <div className="contact-icon">
                    <Mail size={24} />
                  </div>
                  <div className="contact-text">
                    <h3>Email Us</h3>
                    <p>
                      <a href="mailto:info@tovous.in">
                        info@tovous.in
                      </a>
                    </p>
                  </div>
                </div>

                <div className="contact-detail-item">
                  <div className="contact-icon">
                    <Phone size={24} />
                  </div>
                  <div className="contact-text">
                    <h3>Call Us</h3>
                    <p>
                      <a href="tel:+912235983690">+91-22-35983690</a>
                    </p>
                  </div>
                </div>

                <div className="contact-detail-item">
                  <div className="contact-icon">
                    <MapPin size={24} />
                  </div>
                  <div className="contact-text">
                    <h3>Registered Office</h3>
                    <address>
                      Biju Pattanaik Commercial Complex,
                      <br />
                      Room No:07, Ground Floor,
                      <br />
                      Chandrasekharpur, Bhubaneswar-751016
                    </address>
                  </div>
                </div>

                <div className="contact-detail-item">
                  <div className="contact-icon">
                    <MapPin size={24} />
                  </div>
                  <div className="contact-text">
                    <h3>Mumbai Office</h3>
                    <address>
                      Shop No-18, Mahavir Kalpavruksha,
                      <br />
                      Kasarvadavali, Thane-400615
                    </address>
                  </div>
                </div>

                <div className="contact-detail-item">
                  <div className="contact-icon">
                    <Clock size={24} />
                  </div>
                  <div className="contact-text">
                    <h3>Business Hours</h3>
                    <p>
                      Monday - Friday: 09:00 AM to 06:00 PM
                      <br />
                      Saturday: 09:00 AM to 02:00 PM
                    </p>
                  </div>
                </div>
              </div>

              {/* <div className="business-hours">
                <h3>Business Hours</h3>
                <ul>
                  <li><span>Monday - Friday:</span> 9:00 AM - 6:00 PM</li>
                  <li><span>Saturday:</span> 10:00 AM - 4:00 PM</li>
                  <li><span>Sunday:</span> Closed</li>
                </ul>
              </div> */}
            </div>

            <div className="contact-form-wrapper">
              <h2>Send Us A Message</h2>
              <p>Fill out the form below and we'll get back to you shortly.</p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section map-section">
        <div className="map-container">
          {/* <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.2714799277714!2d51.53238797538755!3d25.28691477716745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e45c534f39974c7%3A0x2c49f4d7083e8889!2sDoha%2C%20Qatar!5e0!3m2!1sen!2sus!4v1710861547975!5m2!1sen!2sus"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            title="Tovous Industrial Solutions Office Location"
          ></iframe> */}
          {/* <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d57713.595469296!2d51.5328719!3d25.3008536!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e45dba6cabb7869%3A0xf9b595ecebabb1e8!2sINTRALINK%20MANPOWER!5e0!3m2!1sen!2sin!4v1746531038057!5m2!1sen!2sin"
            width="600"
            height="450"
            style={{border:0}}
            allowFullScreen={true}
            loading="lazy"
             title="Tovous Industrial Solutions Office Location"
          ></iframe> */}

          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3606.3278530959087!2d51.45819399999999!3d25.3267773!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e45dba6cabb7869%3A0xf9b595ecebabb1e8!2sINTRALINK%20MANPOWER!5e0!3m2!1sen!2sin!4v1747294048382!5m2!1sen!2sin" 
          width="600" 
          height="450" 
          style={{border:0 }}
          allowFullScreen={true}
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section faq-section">
        <div className="container">
          <div className="faq-header">
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="faq-subtitle">Find answers to common questions about our industrial services</p>
          </div>
          <div className="faq-grid">
            <div className="faq-item">
              <div className="faq-number">01</div>
              <h3>What industries do you serve?</h3>
              <p>
                We serve manufacturing, infrastructure, oil & gas, steel, cement, and engineering sectors. Our clients include major industrial and public sector organizations like ONGC, IOCL, GAIL, and IREL.
              </p>
            </div>

            <div className="faq-item">
              <div className="faq-number">02</div>
              <h3>What services does Tovous provide?</h3>
              <p>
                We offer Operations & Maintenance (O&M), Fabrication & Erection (F&E), Fire Protection Systems, Electrical & Instrumentation works, and Technical Manpower Supply. All services are delivered with a focus on safety, quality, and timely execution.
              </p>
            </div>

            <div className="faq-item">
              <div className="faq-number">03</div>
              <h3>How long does project execution take?</h3>
              <p>
                Project timelines vary based on scope and complexity. We pride ourselves on fast mobilization and on-time delivery. Our team works closely with clients to establish realistic timelines and meet all project milestones within budget.
              </p>
            </div>

            <div className="faq-item">
              <div className="faq-number">04</div>
              <h3>Do you provide turnkey solutions?</h3>
              <p>
                Yes, we provide complete turnkey solutions for Fire Protection Systems and other industrial projects, including design, engineering, supply, installation, testing, and commissioning.
              </p>
            </div>

            <div className="faq-item">
              <div className="faq-number">05</div>
              <h3>What is your approach to safety and compliance?</h3>
              <p>
                Safety is our top priority. We follow strict H.S.E. policies and invest resources to safeguard the workplace, client assets, and the environment. Every worker has the right to a hazard-free working environment.
              </p>
            </div>

            <div className="faq-item">
              <div className="faq-number">06</div>
              <h3>Can you handle major shutdown and commissioning work?</h3>
              <p>
                Absolutely. Our trained technical team is capable of undertaking heavy fabrication, erection, commissioning, and major shutdown projects with proven expertise in complex industrial environments.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
