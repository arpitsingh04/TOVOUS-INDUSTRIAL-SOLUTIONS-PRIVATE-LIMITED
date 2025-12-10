import asyncHandler from 'express-async-handler';
import Project from '../models/projectModel.js';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// @desc    Get all projects
// @route   GET /api/projects
// @access  Public
const getProjects = asyncHandler(async (req, res) => {
  const projects = await Project.find({}).sort({ order: 1, createdAt: -1 });
  res.json(projects);
});

// @desc    Get featured projects (max 3)
// @route   GET /api/projects/featured
// @access  Public
const getFeaturedProjects = asyncHandler(async (req, res) => {
  const projects = await Project.find({ isFeatured: true }).sort({ order: 1 }).limit(3);
  res.json(projects);
});

// @desc    Get single project
// @route   GET /api/projects/:id
// @access  Public
const getProjectById = asyncHandler(async (req, res) => {
  const project = await Project.findById(req.params.id);

  if (project) {
    res.json(project);
  } else {
    res.status(404);
    throw new Error('Project not found');
  }
});

// @desc    Create a project
// @route   POST /api/projects
// @access  Private/Admin
const createProject = asyncHandler(async (req, res) => {
  const { title, customer, description, consultant, details, image, status, isFeatured, order } = req.body;

  const project = new Project({
    title,
    customer,
    description,
    consultant,
    details,
    image,
    status,
    isFeatured: isFeatured || false,
    order: order || 0,
  });

  const createdProject = await project.save();
  res.status(201).json(createdProject);
});

// @desc    Update a project
// @route   PUT /api/projects/:id
// @access  Private/Admin
const updateProject = asyncHandler(async (req, res) => {
  const { title, customer, description, consultant, details, image, status, isFeatured, order } = req.body;

  const project = await Project.findById(req.params.id);

  if (project) {
    project.title = title || project.title;
    project.customer = customer || project.customer;
    project.description = description || project.description;
    project.consultant = consultant || project.consultant;
    project.details = details || project.details;
    project.image = image || project.image;
    project.status = status || project.status;
    project.isFeatured = isFeatured !== undefined ? isFeatured : project.isFeatured;
    project.order = order !== undefined ? order : project.order;

    const updatedProject = await project.save();
    res.json(updatedProject);
  } else {
    res.status(404);
    throw new Error('Project not found');
  }
});

// @desc    Delete a project
// @route   DELETE /api/projects/:id
// @access  Private/Admin
const deleteProject = asyncHandler(async (req, res) => {
  const project = await Project.findById(req.params.id);

  if (project) {
    // Delete the image file if stored locally
    if (project.image && project.image.startsWith('/uploads')) {
      const filePath = path.join(__dirname, '..', project.image);
      if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
      }
    }

    await Project.deleteOne({ _id: project._id });
    res.json({ message: 'Project removed' });
  } else {
    res.status(404);
    throw new Error('Project not found');
  }
});

// @desc    Toggle featured status
// @route   PUT /api/projects/:id/featured
// @access  Private/Admin
const toggleFeatured = asyncHandler(async (req, res) => {
  const project = await Project.findById(req.params.id);

  if (project) {
    // Check if we're trying to feature and already have 3 featured
    if (!project.isFeatured) {
      const featuredCount = await Project.countDocuments({ isFeatured: true });
      if (featuredCount >= 3) {
        res.status(400);
        throw new Error('Maximum 3 projects can be featured. Please unfeature another project first.');
      }
    }

    project.isFeatured = !project.isFeatured;
    const updatedProject = await project.save();
    res.json(updatedProject);
  } else {
    res.status(404);
    throw new Error('Project not found');
  }
});

export {
  getProjects,
  getFeaturedProjects,
  getProjectById,
  createProject,
  updateProject,
  deleteProject,
  toggleFeatured,
};
