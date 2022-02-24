const fs = require("fs");
var path = require("path");
let front = require("../data/front.json");
let back = require("../data/back.json");
let tool = require("../data/tool.json");

export const skillRepo = {
  getAll: () => {
    front, back, tool;
  },
  createFront,
  createBack,
  createTool,
};

function createFront(skill) {
  skill.id = front.length ? Math.max(...front.map((x) => x.id)) + 1 : 1;

  skill.dateCreated = new Date().toISOString();
  skill.dateUpdated = new Date().toISOString();

  front.push(skill);
  saveFront();
}

function createBack(skill) {
  skill.id = back.length ? Math.max(...back.map((x) => x.id)) + 1 : 1;

  skill.dateCreated = new Date().toISOString();
  skill.dateUpdated = new Date().toISOString();

  back.push(skill);
  saveBack();
}

function createTool(skill) {
  skill.id = tool.length ? Math.max(...tool.map((x) => x.id)) + 1 : 1;

  skill.dateCreated = new Date().toISOString();
  skill.dateUpdated = new Date().toISOString();

  tool.push(skill);
  saveTool();
}

const frontDir = path.resolve(process.cwd(), "data", "front.json");
const backDir = path.resolve(process.cwd(), "data", "back.json");
const toolDir = path.resolve(process.cwd(), "data", "tool.json");

function saveFront() {
  fs.writeFileSync(frontDir, JSON.stringify(front, null, 4));
}
function saveBack() {
  fs.writeFileSync(backDir, JSON.stringify(back, null, 4));
}
function saveTool() {
  fs.writeFileSync(toolDir, JSON.stringify(tool, null, 4));
}
