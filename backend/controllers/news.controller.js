const newsService = require("../services/news.service");
const { sendSuccess } = require("../utils/response");

exports.getNews = async (req, res, next) => {
  try {
    const stories = await newsService.fetchNews();
    return sendSuccess(res, { stories });
  } catch (error) {
    next(error);
  }
};
