const initialState = {
  courses: [],
  timeline: [],
};

const courseReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_COURSES':
      return {
        ...state,
        courses: action.payload,
      };
    case 'GET_TIMELINE':
      return {
        ...state,
        timeline: action.payload,
      };
    default:
      return state;
  }
};

export default courseReducer;
