import utils from './arrayUtils';

const inputs = (state, action) => {
  switch (action.type) {
    case 'ADD_INPUT_LIST':
      return state.map(
        (inputList, i) =>
          i === action.row && inputList.length - 1 === action.col
            ? utils.pushTextBox(inputList, { row: i, col: action.col + 1 })
            : inputList
      );
    default:
      return utils.makeInitialValue();
  }
};

export default inputs;
