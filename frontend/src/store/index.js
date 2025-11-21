import { configureStore } from "@reduxjs/toolkit";
import skillReducer from "./skillSlice";
import roadmapReducer from "./roadmapSlice";
import newsReducer from "./newsSlice";

export const store = configureStore({
  reducer: {
    skill: skillReducer,
    roadmap: roadmapReducer,
    news: newsReducer,
  },
  devTools: true,
});
