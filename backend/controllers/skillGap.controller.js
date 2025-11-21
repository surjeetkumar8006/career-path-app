const skillGapService = require("../services/skillGap.service");
const { sendSuccess } = require("../utils/response");

exports.analyzeSkillGap = async (req, res, next) => {
  try {
    const { targetRole, currentSkills } = req.body;

    if (!targetRole || !currentSkills) {
      throw new Error("targetRole and currentSkills are required");
    }

    const gapResult = skillGapService.calculateSkillGap({
      targetRole,
      currentSkills,
    });

    return sendSuccess(res, gapResult);
  } catch (error) {
    next(error);
  }
};
