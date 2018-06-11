const rowList = (state = [], action) => {
  switch (action.type) {
    case 'ADD_ROW_LIST':
      return state[state.length - 1].id === action.id
        ? [
            ...state,
            {
              id: action.id + 1
            }
          ]
        : state;
    default:
      return [...new Array(2)].map(ary => (ary = new Array(2)));
  }
};

export default rowList;
