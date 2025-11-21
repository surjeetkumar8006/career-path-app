const axios = require("axios");
const config = require("../config/appConfig");

exports.fetchNews = async () => {
  const top = await axios.get(`${config.hackerNewsBase}/topstories.json`);
  const ids = top.data.slice(0, 5);

  const stories = await Promise.all(
    ids.map(async (id) => {
      const d = await axios.get(`${config.hackerNewsBase}/item/${id}.json`);
      return d.data;
    })
  );

  return stories;
};
