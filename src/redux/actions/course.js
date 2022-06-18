export const getCourses = courses => {
  return {
    type: 'GET_COURSES',
    payload: courses,
  };
};

export const getCourse = course => {
  return {
    type: 'GET_COURSE',
    payload: course,
  };
};

export const getTimeline = timeline => {
  return {
    type: 'GET_TIMELINE',
    payload: timeline,
  };
};
