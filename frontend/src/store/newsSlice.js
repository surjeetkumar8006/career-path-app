import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../services/api";

// THUNK
export const fetchNews = createAsyncThunk(
  "news/fetchNews",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get("/api/news");
      return response.data.data.stories;
    } catch (err) {
      return rejectWithValue("Failed to fetch tech news");
    }
  }
);

const newsSlice = createSlice({
  name: "news",
  initialState: {
    loading: false,
    error: null,
    stories: [],
  },
  reducers: {
    clearNews: (state) => {
      state.stories = [];
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchNews.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchNews.fulfilled, (state, action) => {
        state.loading = false;
        state.stories = action.payload;
      })
      .addCase(fetchNews.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearNews } = newsSlice.actions;
export default newsSlice.reducer;
