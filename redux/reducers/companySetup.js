const companyState = {
  setup: null,
};

const companySetupReducer = (state = companyState, action) => {
  switch (action.type) {
    case "ADD_COMPANY_SETUP":
      return { ...state, setup: action.payload };
  }
};
