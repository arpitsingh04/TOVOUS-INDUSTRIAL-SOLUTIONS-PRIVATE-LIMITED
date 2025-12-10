import express from 'express';
import {
  getProjects,
  getFeaturedProjects,
  getProjectById,
  createProject,
  updateProject,
  deleteProject,
  toggleFeatured,
} from '../controllers/projectController.js';
import { protect, admin } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/').get(getProjects).post(protect, admin, createProject);
router.route('/featured').get(getFeaturedProjects);
router.route('/:id').get(getProjectById).put(protect, admin, updateProject).delete(protect, admin, deleteProject);
router.route('/:id/featured').put(protect, admin, toggleFeatured);

export default router;
