const fs = require("fs");
var path = require("path");
let projects = require("../data/projects.json");

export const projectRepo = {
  getAll: () => projects,
  create,
  update,
  delete: _delete,
};

function create(project) {
  project.id = projects.length ? Math.max(...projects.map((x) => x.id)) + 1 : 1;

  project.dateCreated = new Date().toISOString();
  project.dateUpdated = new Date().toISOString();

  projects.push(project);
  saveData();
}

function update(id, params) {
  const project = project.find((x) => x.id.toString() === id.toString());

  project.dateUpdated = new Date().toISOString();
  Object.assign(project, params);
  saveData();
}

function _delete(id) {
  projects = projects.filter((x) => x.id.toString() !== id.toString());
  saveData();
}

const dir = path.resolve(process.cwd(), "data", "projects.json");

function saveData() {
  fs.writeFileSync(dir, JSON.stringify(projects, null, 4));
}
