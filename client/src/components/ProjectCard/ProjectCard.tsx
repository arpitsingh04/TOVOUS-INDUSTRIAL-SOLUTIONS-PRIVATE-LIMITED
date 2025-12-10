import React from 'react';
import './ProjectCard.css';

interface ProjectCardProps {
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

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  customer,
  description,
  consultant,
  details,
  image,
  status,
}) => {
  return (
    <div className="project-card-modern">
      <div className="project-image-wrapper">
        <img src={image} alt={title} />
        <div className="project-status">
          <span className={`status-badge ${status}`}>
            {status === 'completed' ? '✓ Completed' : '⏱ Ongoing'}
          </span>
        </div>
      </div>
      
      <div className="project-info-section">
        <div className="project-label-value">
          <span className="label">Customer Name</span>
          <p className="value">{capitalizeFirst(customer)}</p>
        </div>
        
        <div className="project-label-value">
          <span className="label">Project Title</span>
          <p className="value">{capitalizeFirst(title)}</p>
        </div>
        
        <div className="project-label-value">
          <span className="label">Description</span>
          <p className="value">{capitalizeFirst(description)}</p>
        </div>
        
        <div className="project-label-value">
          <span className="label">Consultant</span>
          <p className="value">{capitalizeFirst(consultant)}</p>
        </div>
        
        <div className="project-label-value">
          <span className="label">Details</span>
          <p className="value">{capitalizeFirst(details)}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
