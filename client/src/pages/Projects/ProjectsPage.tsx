import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Building2, Flame, Zap, Factory, ArrowRight, Power } from 'lucide-react';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import { API_ENDPOINTS, SERVER_BASE_URL } from '../../api/config';
import './ProjectsPage.css';

interface Project {
  _id: string;
  title: string;
  customer: string;
  description: string;
  consultant: string;
  details: string;
  image: string;
  status: 'completed' | 'ongoing';
}

const ProjectsPage: React.FC = () => {
  const navigate = useNavigate();
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await fetch(API_ENDPOINTS.projects);
      const data = await response.json();
      setProjects(data);
    } catch (error) {
      console.error('Failed to fetch projects:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="projects-page">
      {/* Hero Section */}
      <section className="projects-hero-section">
        <div className="projects-hero-content">
          <h1>Major Projects</h1>
          <p>Delivering Excellence Across India's Leading Industrial Sectors</p>
        </div>
      </section>

      {/* Projects Introduction */}
      <section className="section projects-intro-section">
        <div className="container">
          <h2 className="section-title">Our Project Portfolio</h2>
          <p className="projects-intro-text">
            We've successfully completed and are executing projects for major industrial and public sector 
            clients across India. Our expertise spans fabrication, erection, commissioning, and maintenance 
            services for critical industrial infrastructure.
          </p>
        </div>
      </section>

      {/* Projects List */}
      <section className="section projects-list-section">
        <div className="container">
          {loading ? (
            <div className="projects-loading">Loading projects...</div>
          ) : projects.length === 0 ? (
            <div className="projects-empty">No projects available yet.</div>
          ) : (
            <div className="projects-grid-modern">
              {projects.map((project) => (
                <ProjectCard
                  key={project._id}
                  title={project.title}
                  customer={project.customer}
                  description={project.description}
                  consultant={project.consultant}
                  details={project.details}
                  image={`${SERVER_BASE_URL}${project.image}`}
                  status={project.status}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Key Achievements */}
      <section className="section achievements-section">
        <div className="container">
          <h2 className="section-title">Key Achievements</h2>
          <div className="achievements-grid">
            <div className="achievement-card">
              <div className="achievement-icon"><Building2 size={38} /></div>
              <h3>52 Meter Height</h3>
              <p>Successfully completed Regeneration Air Heater Unit at GAIL Usar</p>
            </div>
            <div className="achievement-card">
              <div className="achievement-icon"><Flame size={38} /></div>
              <h3>Flare Systems</h3>
              <p>Multiple elevated flare stack projects for ONGC and IOCL</p>
            </div>
            <div className="achievement-card">
              <div className="achievement-icon"><Zap size={38} /></div>
              <h3>Complete E&I Works</h3>
              <p>Full electrical and instrumentation packages including commissioning</p>
            </div>
            <div className="achievement-card">
              <div className="achievement-icon"><Factory size={38} /></div>
              <h3>Turnkey Solutions</h3>
              <p>End-to-end project execution from fabrication to commissioning</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="projects-cta-section">
        <div className="container">
          <div className="cta-wrapper" style={{background: 'linear-gradient(135deg, #1e40af 0%, #059669 100%)'}}>
            <div className="cta-content">
              <h2>Ready to Start Your Next Project?</h2>
              <p>
                Partner with Tovous Industrial Solutions for reliable, on-time, and cost-effective industrial services backed by proven expertise.
              </p>
              <div className="cta-buttons">
                <button className="cta-btn cta-btn-primary" onClick={() => navigate('/contact')}>
                  Discuss Your Project
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

export default ProjectsPage;
