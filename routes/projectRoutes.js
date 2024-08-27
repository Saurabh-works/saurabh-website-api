const express = require('express');
const { getProjects, createProject, updateProject, deleteProject } = require('../controllers/projectController');

const router = express.Router();

router.get('/', getProjects);
router.post('/', createProject);
router.delete('/:id', deleteProject);
router.put('/:id', updateProject);


module.exports = router;
