const jobSearchState = {
  showDatePosted: false,
  showJobType: false,
};

const jobSearchReducer = (state = jobSearchState, action) => {
  switch (action.type) {
    case "SHOW_DATE_POSTED":
      return {
        ...state,
        showJobType: false,
        showDatePosted: !state.showDatePosted,
      };

    case "SHOW_JOB_TYPE":
      return {
        ...state,
        showDatePosted: false,
        showJobType: !state.showJobType,
      };

    case "CANCEL_POPUP":
      return { ...state, showJobType: false, showDatePosted: false };

    default:
      return state;
  }
};

export default jobSearchReducer;
