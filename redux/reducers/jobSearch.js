const jobSearchState = {
  showDatePosted: false,
  showJobType: false,
};

const jobSearchReducer = (state = jobSearchState, action) => {
  switch (action.type) {
    case "SHOW_DATE_POSTED":
      return { ...state, showDatePosted: !state.showDatePosted };

    case "SHOW_JOB_TYPE":
      return { ...state, showJobType: !state.showJobType };

    default:
      return state;
  }
};

export default jobSearchReducer;
