export const SET_FILTER_IS_HIDE_COMPLETE = 'qgo/assessment/SET_FILTER_IS_HIDE_COMPLETE';

export const setFilterIsHideComplete = content => {
  return { type: SET_FILTER_IS_HIDE_COMPLETE, content };
}

export const initialState = {
  isHideComplete: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FILTER_IS_HIDE_COMPLETE: {
      return {
        ...state.filters,
        isHideComplete: action.content.isHideComplete,
      };
    }

    default:
      return state;
  }
};

export default reducer;
