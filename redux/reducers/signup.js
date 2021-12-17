const signupState = {
  token: true,
};

const signupReducer = (state = signupState, action) => {
  switch (action.type) {
    case "COMPANY_SIGNUP":
      return { ...state, token: false };

    case "INTERN_SIGNUP":
      return { ...state, token: true };

    default:
      return state;
  }
};

export default signupReducer;
