import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../services/api";

// THUNK
export const fetchSkillGap = createAsyncThunk(
  "skill/fetchSkillGap",
  async ({ targetRole, currentSkills }, { rejectWithValue }) => {
    try {
      const response = await api.post("/api/skill-gap", {
        targetRole,
        currentSkills,
      });
      return response.data.data;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || "Something went wrong");
    }
  }
);

const skillSlice = createSlice({
  name: "skill",
  initialState: {
    loading: false,
    error: null,
    result: null,
  },
  reducers: {
    clearSkillGap: (state) => {
      state.result = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSkillGap.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSkillGap.fulfilled, (state, action) => {
        state.loading = false;
        state.result = action.payload;
      })
      .addCase(fetchSkillGap.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearSkillGap } = skillSlice.actions;
export default skillSlice.reducer;
