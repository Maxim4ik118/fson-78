import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchPostDetails } from "services/api";

export const fetchPostDataThunk = createAsyncThunk(
  'postDetails/fetchPostDataThunk',
  async (postId, thunkApi) => {
    try {
      const postData = await fetchPostDetails(postId);
      return postData; // -> action.payload = postData
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
