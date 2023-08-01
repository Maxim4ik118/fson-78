import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchPostComments } from 'services/api';

export const fetchCommentsThunk = createAsyncThunk(
  'comments/fetchCommentsThunk',
  async (postId, thunkApi) => {
    try {
      const comments = await fetchPostComments(postId);
      return comments; // -> action.payload = comments
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const deleteCommentThunk = createAsyncThunk(
  'comments/deleteCommentThunk',
  async (commentId, thunkApi) => {
    try {
      // some api call to delete commment
      const comments = await fetchPostComments(commentId);
      return comments; // -> action.payload = comments
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

const initialState = {
  comments: [],
  isLoading: false,
  error: null,
};

const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(fetchCommentsThunk.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchCommentsThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.comments = action.payload;
      })
      .addCase(fetchCommentsThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      // ------------- DELETE COMMENT
      .addCase(deleteCommentThunk.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(deleteCommentThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        // state.comments = state.comments.filter(
        //   comment => comment.id !== action.payload
        // );

        // const deletedContactIndex = state.comments.findIndex(
        //   contact => contact.id === action.payload
        // );
        // state.comments.splice(deletedContactIndex, 1)
      })
      .addCase(deleteCommentThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
});

export const commentsReducer = commentsSlice.reducer;
