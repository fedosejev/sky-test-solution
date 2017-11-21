export const ADD_ITEM = 'qgo/assessment/ADD_ITEM';
export const DELETE_ITEM = 'qgo/assessment/DELETE_ITEM';
export const SET_ITEM_IS_COMPLETE = 'qgo/assessment/SET_ITEM_IS_COMPLETE';

export const addItem = content => {
  return { type: ADD_ITEM, content };
};

export const deleteItem = content => {
  return { type: DELETE_ITEM, content };
};

export const setItemIsComplete = content => {
  return { type: SET_ITEM_IS_COMPLETE, content };
}

export const initialState = {
  items: [
    { id: 1, content: 'Call mum', isComplete: false },
    { id: 2, content: 'Buy cat food', isComplete: false },
    { id: 3, content: 'Water the plants', isComplete: false },
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      const nextId =
        state.items.reduce((id, item) => Math.max(item.id, id), 0) + 1;
      const newItem = {
        id: nextId,
        content: action.content,
      };

      return {
        ...state,
        items: [...state.items, newItem],
      };

    case DELETE_ITEM: {
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.content.id),
      };
    }

    case SET_ITEM_IS_COMPLETE: {
      return {
        ...state,
        items: state.items.map(item => {
          if (item.id === action.content.id) {
            item.isComplete = action.content.isComplete;
          }

          return item;
        }),
      };
    }

    default:
      return state;
  }
};

export default reducer;
