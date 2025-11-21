const roadmapService = require("../services/roadmap.service");
const { sendSuccess } = require("../utils/response");

exports.generateRoadmap = async (req, res, next) => {
  try {
    const { targetRole } = req.body;

    if (!targetRole) {
      throw new Error("targetRole is required");
    }

    const roadmap = roadmapService.getRoadmap(targetRole);
    return sendSuccess(res, roadmap);
  } catch (error) {
    next(error);
  }
};
