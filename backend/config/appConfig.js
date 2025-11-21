module.exports = {
  port: process.env.PORT || 4000,
  env: process.env.NODE_ENV,
  corsOrigin: process.env.CORS_ORIGIN,
  hackerNewsBase: process.env.HACKERNEWS_BASE,
  rateLimitWindowMs: parseInt(process.env.RATE_LIMIT_WINDOW_MS) || 60000,
  rateLimitMax: parseInt(process.env.RATE_LIMIT_MAX) || 100,
};
