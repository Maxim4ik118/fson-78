const initialState = {
  postDetails: null,
  isLoading: false,
  error: null,
  //   toglerTest: false,
};

export const postDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'postDetails/setIsLoading': {
      return {
        ...state,
        isLoading: action.payload,
        // toglerTest: !state.toglerTest
      };
    }
    case 'postDetails/setPostDetails': {
      return {
        ...state,
        postDetails: action.payload,
      };
    }
    case 'postDetails/setError': {
      return {
        ...state,
        error: action.payload,
      };
    }
    default:
      return state;
  }
};

export const setIsLoading = payload => {
  return {
    type: 'postDetails/setIsLoading',
    payload,
  };
};
export const setPostDetails = payload => {
  return {
    type: 'postDetails/setPostDetails',
    payload,
  };
};
export const setError = payload => {
  return {
    type: 'postDetails/setError',
    payload,
  };
};
// { type: "postDetails/setIsLoading", payload: true | false }
// { type: "postDetails/setPostDetails", payload: {...} }
// { type: "postDetails/setError", payload: "Some error text" }
