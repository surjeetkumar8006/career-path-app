import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../services/api";

// THUNK
export const fetchRoadmap = createAsyncThunk(
  "roadmap/fetchRoadmap",
  async ({ targetRole }, { rejectWithValue }) => {
    try {
      const response = await api.post("/api/roadmap", { targetRole });
      return response.data.data;
    } catch (err) {
      return rejectWithValue(
        err.response?.data?.message || "Failed to fetch roadmap"
      );
    }
  }
);

const roadmapSlice = createSlice({
  name: "roadmap",
  initialState: {
    loading: false,
    error: null,
    roadmap: null,
  },
  reducers: {
    clearRoadmap: (state) => {
      state.roadmap = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRoadmap.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchRoadmap.fulfilled, (state, action) => {
        state.loading = false;
        state.roadmap = action.payload;
      })
      .addCase(fetchRoadmap.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearRoadmap } = roadmapSlice.actions;
export default roadmapSlice.reducer;
