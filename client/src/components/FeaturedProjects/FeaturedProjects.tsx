import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { API_ENDPOINTS, SERVER_BASE_URL } from '../../api/config';
import './FeaturedProjects.css';

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

const capitalizeFirst = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

const FeaturedProjects: React.FC = () => {
  const navigate = useNavigate();
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchFeaturedProjects();
  }, []);

  const fetchFeaturedProjects = async () => {
    try {
      const response = await fetch(`${API_ENDPOINTS.projects}/featured`);
      const data = await response.json();
      setProjects(data);
    } catch (error) {
      console.error('Failed to fetch featured projects:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="featured-loading">Loading featured projects...</div>;
  }

  if (projects.length === 0) {
    return null;
  }

  return (
    <div className="featured-projects-container">
      <div className="featured-projects-grid">
        {projects.map((project) => (
          <div key={project._id} className="project-card-modern">
            <div className="project-image-wrapper">
              <img src={`${SERVER_BASE_URL}${project.image}`} alt={project.title} />
              <div className="project-status">
                <span className={`status-badge ${project.status}`}>
                  {project.status === 'completed' ? '✓ Completed' : '⏱ Ongoing'}
                </span>
              </div>
            </div>
            
            <div className="project-info-section">
              <div className="project-label-value">
                <span className="label">Customer Name</span>
                <p className="value">{capitalizeFirst(project.customer)}</p>
              </div>
              
              <div className="project-label-value">
                <span className="label">Project Title</span>
                <p className="value">{capitalizeFirst(project.title)}</p>
              </div>
              
              <div className="project-label-value">
                <span className="label">Description</span>
                <p className="value">{capitalizeFirst(project.description)}</p>
              </div>
              
              <div className="project-label-value">
                <span className="label">Consultant</span>
                <p className="value">{capitalizeFirst(project.consultant)}</p>
              </div>
              
              <div className="project-label-value">
                <span className="label">Details</span>
                <p className="value">{capitalizeFirst(project.details)}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="featured-projects-cta">
        <button className="cta-btn cta-btn-primary" onClick={() => navigate('/projects')}>
          Explore All Projects
          <ArrowRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default FeaturedProjects;
