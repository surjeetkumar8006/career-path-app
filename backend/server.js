require("dotenv").config();
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const rateLimit = require("express-rate-limit");


const appConfig = require("./config/appConfig");
const skillGapRoutes = require("./routes/skillGap.routes");
const roadmapRoutes = require("./routes/roadmap.routes");
const newsRoutes = require("./routes/news.routes");
const { errorHandler } = require("./utils/errorHandler");

const app = express();

// ----------- IMPORTANT FIX -----------
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// -------------------------------------

app.use(helmet());
app.use(cors({ origin: appConfig.corsOrigin }));


if (appConfig.env !== "production") {
  app.use(morgan("dev"));
}

app.use(
  rateLimit({
    windowMs: appConfig.rateLimitWindowMs,
    max: appConfig.rateLimitMax,
  })
);

// ROUTES
app.use("/api/skill-gap", skillGapRoutes);
app.use("/api/roadmap", roadmapRoutes);
app.use("/api/news", newsRoutes);

// ERROR HANDLER (must be last)
app.use(errorHandler);

// START SERVER
app.listen(appConfig.port, () => {
  console.log("Backend running on port", appConfig.port);
});
