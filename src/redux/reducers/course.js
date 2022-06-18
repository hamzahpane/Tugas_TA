const initialState = {
  courses: [],
  timeline: [],
  lihatCourse: {},
};

const courseReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_COURSES':
      return {
        ...state,
        courses: action.payload,
      };
    case 'GET_COURSE':
      return {
        ...state,
        lihatCourse: action.payload,
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
