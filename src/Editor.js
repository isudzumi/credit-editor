import React, { Component } from 'react';

class Editor extends Component {
  constructor(props) {
    super(props);
    this.column = 2;
    this.state = {
      creditAry: [...new Array(this.column)]
    };
  }

  handleChange(e) {
    const { name, value } = e.target;
    const row = parseInt(name, 10);
    const newAry = this.state.creditAry.concat();
    newAry[row] = value;
    this.setState({ creditAry: newAry });
  }

  handleFocus(e) {
    const column = parseInt(e.target.name, 10);
    if (column + 1 === this.state.creditAry.length) {
      const newAry = this.state.creditAry.concat();
      newAry.push('');
      this.setState({ creditAry: newAry });
    }
  }

  render() {
    const inputList = this.state.creditAry.map((_, i) => (
      <input
        name={`${i}`}
        type="text"
        value={this.state.creditAry[i] || ''}
        onChange={this.handleChange.bind(this)}
        onFocus={this.handleFocus.bind(this)}
        key={`${i.toString()}`}
      />
    ));

    return <div id="editorArea">{inputList}</div>;
  }
}

export default Editor;
