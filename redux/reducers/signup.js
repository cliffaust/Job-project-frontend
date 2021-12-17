const signupState = {
  token: "",
};

const signupReducer = (state = signupState, action) => {
  switch (action.type) {
    case "COMPANY_SIGNUP":
      return { ...state, token: action.payload.token };

    case "INTERN_SIGNUP":
      return { ...state, token: action.payload.token };

    default:
      return state;
  }
};

export default signupReducer;
