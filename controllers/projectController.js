const Project = require('../models/projectModel');

// Get all projects
const getProjects = async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new project
const createProject = async (req, res) => {
  const { name, description, techStack, imageUrl, githubLink, testLink } = req.body;

  try {
    const newProject = new Project({ name, description, techStack, imageUrl, githubLink, testLink });
    await newProject.save();
    res.status(201).json(newProject);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update Project:
const updateProject = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) return res.status(404).json({ message: 'Project not found' });

    project.name = req.body.name;
    project.description = req.body.description;
    project.techStack = req.body.techStack;
    project.imageUrl = req.body.imageUrl;
    project.githubLink = req.body.githubLink;
    project.testLink = req.body.testLink;

    const updatedProject = await project.save();
    res.json(updatedProject);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};


// Delete project
const deleteProject = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) return res.status(404).json({ message: 'Project not found' });

    // await project.remove();
    await project.deleteOne();
    res.json({ message: 'Project deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}



module.exports = { getProjects, createProject,updateProject, deleteProject };
