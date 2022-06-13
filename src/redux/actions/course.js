export const getCourses = courses => {
  return {
    type: 'GET_COURSES',
    payload: courses,
  };
};

export const getTimeline = timeline => {
  return {
    type: 'GET_TIMELINE',
    payload: timeline,
  };
};
