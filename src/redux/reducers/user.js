const initialState = {
  username: '',
  userToken: '',
  userID: '',
  loggedIn: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USERNAME':
      return {
        ...state,
        username: action.payload,
      };
    case 'SET_USER_TOKEN':
      return {
        ...state,
        userToken: action.payload,
        loggedIn: true,
      };
    case 'SET_USER_ID':
      return {
        ...state,
        userID: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
