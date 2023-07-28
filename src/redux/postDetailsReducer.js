import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  postDetails: null,
  isLoading: false,
  error: null,
  counterValue: 0,
  //   toglerTest: false,
};

const postDetailsSlice = createSlice({
  name: 'postDetails',
  initialState,
  reducers: {
    setIsLoading: (state, { payload }) => {
      state.isLoading = payload;
    },
    setPostDetails: (state, action) => {
      state.postDetails = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    incrementCounter: state => {
      state.counterValue = state.counterValue + 1;
    },
  },
});

export const { setIsLoading, setPostDetails, setError, incrementCounter } =
  postDetailsSlice.actions;
export const postDetailsReducer = postDetailsSlice.reducer;

// export const postDetailsReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'postDetails/setIsLoading': {
//       return {
//         ...state,
//         isLoading: action.payload,
//         // toglerTest: !state.toglerTest
//       };
//     }
//     case 'postDetails/setPostDetails': {
//       return {
//         ...state,
//         postDetails: action.payload,
//       };
//     }
//     case 'postDetails/setError': {
//       return {
//         ...state,
//         error: action.payload,
//       };
//     }
//     default:
//       return state;
//   }
// };
// export const setIsLoading = payload => {
//   return {
//     type: 'postDetails/setIsLoading',
//     payload,
//   };
// };
// export const setPostDetails = payload => {
//   return {
//     type: 'postDetails/setPostDetails',
//     payload,
//   };
// };
// export const setError = payload => {
//   return {
//     type: 'postDetails/setError',
//     payload,
//   };
// };
