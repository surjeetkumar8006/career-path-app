const roles = require("../data/roles.json");

exports.calculateSkillGap = ({ targetRole, currentSkills }) => {
  if (!targetRole || !currentSkills) throw new Error("Invalid input");

  const roleKey = Object.keys(roles).find(
    (r) => r.toLowerCase() === targetRole.toLowerCase()
  );
  if (!roleKey) throw new Error("Role not found");

  const required = roles[roleKey];
  const lowerCurrent = currentSkills.map((s) => s.toLowerCase());

  const matched = [];
  const missing = [];

  required.forEach((skill) => {
    lowerCurrent.includes(skill.toLowerCase())
      ? matched.push(skill)
      : missing.push(skill);
  });

  return {
    role: roleKey,
    matchedSkills: matched,
    missingSkills: missing,
    recommendations: missing.map((s) => ({
      skill: s,
      why: `Important for ${roleKey}`,
    })),
    suggestedOrder: missing,
  };
};
