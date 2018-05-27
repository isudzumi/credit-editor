import React, { Component } from "react";
import Editor from "./Editor";

class App extends Component {
  render() {
    return (
      <div>
        <header>クレジットエディター</header>
        <main>
          <Editor />
        </main>
      </div>
    );
  }
}

export default App;
