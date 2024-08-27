const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  techStack: { type: String, required: true },
  imageUrl: { type: String, required: true },
  githubLink: { type: String, required: true },
  testLink: { type: String },
});

const Project = mongoose.model('ProjectList', projectSchema);
module.exports = Project;
