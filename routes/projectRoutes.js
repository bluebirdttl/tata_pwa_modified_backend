import express from 'express';
import { getProjects, createProject, updateProjectStatus, deleteProject } from '../controllers/projectController.js';

const router = express.Router();

console.log("Project Routes Loaded");

router.get('/', getProjects);
router.post('/', createProject);
router.patch('/:id/status', updateProjectStatus);
router.delete('/:id', deleteProject);

export default router;
