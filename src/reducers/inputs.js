const inputs = (state = [], action) => {
  switch (action.type) {
    case 'ADD_INPUT_LIST':
      return state[state.length - 1].id === action.id
        ? [
            ...state,
            {
              id: action.id + 1
            }
          ]
        : state;
    default:
      // default value
      return [...new Array(2)].map((_, i) => ({ id: i }));
  }
};

export default inputs;
