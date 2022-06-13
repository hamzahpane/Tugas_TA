export const setUserToken = token => {
  return {
    type: 'SET_USER_TOKEN',
    payload: token,
  };
};

export const setUsername = username => {
  return {
    type: 'SET_USERNAME',
    payload: username,
  };
};

export const setUserID = userID => {
  return {
    type: 'SET_USER_ID',
    payload: userID,
  };
};
