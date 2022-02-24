import { projectRepo } from "../../helpers/project-repo";

function newProject(req, res) {
  const proj = req.body;

  projectRepo.create(proj);
  return res.status(200).json(proj);
}

export default newProject;
