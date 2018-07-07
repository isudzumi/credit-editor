const makeInitialValue = () =>
  [...new Array(2)].map((_r, row) =>
    [...new Array(2)].map((_c, col) => ({
      row,
      col
    }))
  );

const pushTextBox = (ary, obj) => [...ary, obj];

const popTextBox = ary => ary.pop();

module.exports = {
  makeInitialValue,
  pushTextBox,
  popTextBox
};
