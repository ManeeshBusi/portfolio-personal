import { skillRepo } from "../../helpers/skill-repo";

function newSkill(req, res) {
  const { type, ...skill } = req.body;
  console.log(type);
  if (type === "front") {
    skillRepo.createFront(skill);
  }
  if (type === "back") {
    skillRepo.createBack(skill);
  }
  if (type === "tool") {
    console.log(skill);
    skillRepo.createTool(skill);
  }
  //   console.log(req.body);
  return res.status(200).json("yay");
}

export default newSkill;
