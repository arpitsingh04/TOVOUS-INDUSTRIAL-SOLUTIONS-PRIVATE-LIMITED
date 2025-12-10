import React, { useState, useEffect } from 'react';
import AdminSidebar from './components/AdminSidebar';
import './AdminStyles.css';
import { API_ENDPOINTS, SERVER_BASE_URL } from '../../api/config';

interface Project {
  _id: string;
  title: string;
  customer: string;
  description: string;
  consultant: string;
  details: string;
  image: string;
  status: 'completed' | 'ongoing';
  isFeatured: boolean;
  order: number;
}

const AdminProjects: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [uploading, setUploading] = useState(false);

  const [formData, setFormData] = useState({
    title: '',
    customer: '',
    description: '',
    consultant: '',
    details: '',
    image: '',
    status: 'ongoing' as 'completed' | 'ongoing',
    isFeatured: false,
    order: 0,
  });

  const userInfoString = localStorage.getItem('userInfo');
  const userInfo = userInfoString ? JSON.parse(userInfoString) : null;
  const token = userInfo?.token;

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await fetch(API_ENDPOINTS.projects);
      const data = await response.json();
      setProjects(data);
    } catch (error) {
      setError('Failed to fetch projects');
    } finally {
      setLoading(false);
    }
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const uploadFormData = new FormData();
    uploadFormData.append('file', file);

    setUploading(true);
    setError('');
    try {
      const response = await fetch(API_ENDPOINTS.upload, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: uploadFormData,
      });

      if (!response.ok) {
        throw new Error(`Upload failed with status ${response.status}`);
      }

      const data = await response.json();
      if (data.filePath) {
        setFormData((prev) => ({ ...prev, image: data.filePath }));
      }
    } catch (err) {
      setError('Failed to upload image');
      console.error(err);
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!formData.image) {
      setError('Please upload a project image');
      return;
    }

    try {
      const url = editingProject
        ? `${API_ENDPOINTS.projects}/${editingProject._id}`
        : API_ENDPOINTS.projects;

      const submitData = {
        ...formData,
        order: editingProject ? formData.order : projects.length,
      };

      const response = await fetch(url, {
        method: editingProject ? 'PUT' : 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(submitData),
      });

      const data = await response.json();

      if (response.ok) {
        fetchProjects();
        resetForm();
      } else {
        setError(data.message || 'Failed to save project');
      }
    } catch (error) {
      setError('Failed to save project');
    }
  };

  const handleEdit = (project: Project) => {
    setEditingProject(project);
    setFormData({
      title: project.title,
      customer: project.customer,
      description: project.description,
      consultant: project.consultant,
      details: project.details,
      image: project.image,
      status: project.status,
      isFeatured: project.isFeatured,
      order: project.order,
    });
    setShowForm(true);
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm('Are you sure you want to delete this project?')) return;

    try {
      await fetch(`${API_ENDPOINTS.projects}/${id}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      fetchProjects();
    } catch (error) {
      setError('Failed to delete project');
    }
  };

  const toggleFeatured = async (id: string) => {
    try {
      const response = await fetch(`${API_ENDPOINTS.projects}/${id}/featured`, {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        fetchProjects();
      } else {
        const data = await response.json();
        setError(data.message || 'Failed to update featured status');
      }
    } catch (error) {
      setError('Failed to update featured status');
    }
  };

  const resetForm = () => {
    setFormData({
      title: '',
      customer: '',
      description: '',
      consultant: '',
      details: '',
      image: '',
      status: 'ongoing',
      isFeatured: false,
      order: 0,
    });
    setEditingProject(null);
    setShowForm(false);
  };

  const featuredCount = projects.filter((p) => p.isFeatured).length;

  return (
    <div className="admin-container">
      <AdminSidebar />
      <div className="admin-content">
        <div className="admin-header">
          <h1>Project Management</h1>
          <button onClick={() => setShowForm(!showForm)} className="admin-button">
            {showForm ? 'Cancel' : 'Add New Project'}
          </button>
        </div>

        {error && <div className="admin-error-message">{error}</div>}

        {showForm && (
          <div className="admin-form-container">
            <h2>{editingProject ? 'Edit Project' : 'Add New Project'}</h2>
            <form onSubmit={handleSubmit} className="admin-form">
              <div className="admin-form-group">
                <label>Customer Name *</label>
                <input
                  type="text"
                  value={formData.customer}
                  onChange={(e) => setFormData({ ...formData, customer: e.target.value })}
                  required
                />
              </div>

              <div className="admin-form-group">
                <label>Project Title *</label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  required
                />
              </div>

              <div className="admin-form-group">
                <label>Description * ({formData.description.length}/180)</label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value.slice(0, 180) })}
                  rows={3}
                  maxLength={180}
                  required
                />
              </div>

              <div className="admin-form-group">
                <label>Consultant *</label>
                <input
                  type="text"
                  value={formData.consultant}
                  onChange={(e) => setFormData({ ...formData, consultant: e.target.value })}
                  required
                />
              </div>

              <div className="admin-form-group">
                <label>Project Details * ({formData.details.length}/180)</label>
                <textarea
                  value={formData.details}
                  onChange={(e) => setFormData({ ...formData, details: e.target.value.slice(0, 180) })}
                  rows={4}
                  maxLength={180}
                  required
                />
              </div>

              <div className="admin-form-group">
                <label>Project Image *</label>
                <input type="file" onChange={handleImageUpload} />
                {uploading && <p>Uploading...</p>}
                {formData.image && (
                  <img
                    src={`${SERVER_BASE_URL}${formData.image}`}
                    alt="Preview"
                    style={{ width: '200px', marginTop: '10px' }}
                  />
                )}
              </div>

              <div className="admin-form-group">
                <label>Status *</label>
                <select
                  value={formData.status}
                  onChange={(e) => setFormData({ ...formData, status: e.target.value as 'completed' | 'ongoing' })}
                >
                  <option value="ongoing">Ongoing</option>
                  <option value="completed">Completed</option>
                </select>
              </div>

              <div className="admin-form-group">
                <label>
                  <input
                    type="checkbox"
                    checked={formData.isFeatured}
                    onChange={(e) => setFormData({ ...formData, isFeatured: e.target.checked })}
                    disabled={!editingProject && featuredCount >= 3 && !formData.isFeatured}
                  />
                  Featured on Homepage (Max 3)
                </label>
                {featuredCount >= 3 && !editingProject?.isFeatured && (
                  <small style={{ color: '#dc2626' }}>Maximum 3 projects can be featured</small>
                )}
              </div>

              <div className="admin-form-actions">
                <button type="submit" className="admin-button">
                  {editingProject ? 'Update Project' : 'Create Project'}
                </button>
                <button type="button" onClick={resetForm} className="admin-button-secondary">
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}

        {loading ? (
          <div className="admin-loading">Loading...</div>
        ) : (
          <div className="admin-table-container">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Customer</th>
                  <th>Title</th>
                  <th>Status</th>
                  <th>Featured</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {projects.map((project) => (
                  <tr key={project._id}>
                    <td>
                      <img
                        src={`${SERVER_BASE_URL}${project.image}`}
                        alt={project.title}
                        style={{ width: '80px', height: '60px', objectFit: 'cover', borderRadius: '4px' }}
                      />
                    </td>
                    <td>{project.customer}</td>
                    <td>{project.title}</td>
                    <td>
                      <span className={`admin-badge ${project.status}`}>{project.status}</span>
                    </td>
                    <td>
                      <button
                        onClick={() => toggleFeatured(project._id)}
                        className={`admin-badge ${project.isFeatured ? 'featured' : ''}`}
                        style={{ cursor: 'pointer', border: 'none' }}
                      >
                        {project.isFeatured ? '⭐ Featured' : 'Not Featured'}
                      </button>
                    </td>
                    <td>
                      <button onClick={() => handleEdit(project)} className="admin-action-button">
                        Edit
                      </button>
                      <button onClick={() => handleDelete(project._id)} className="admin-action-button delete">
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminProjects;
