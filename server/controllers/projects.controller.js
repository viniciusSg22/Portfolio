import { getAllProjects } from "../services/projects.service.js";

export const getProjects = async (req, res, next) => {
  try {
    const projects = await getAllProjects();
    res.json(projects);
  } catch (error) {
    next(error);
  }
};