import React, { Component } from "react";
import Child from "./Child";

class App extends Component {
  //  constructor(props){
  //    super(props);
  //    this.child = React.createRef();
  //  }
  child = React.createRef();

  handleClick = () => {
    this.child.current.getAlert();
  };

  render() {
    return (
      <>
        <h1>Hello world</h1>
        <button onClick={this.handleClick}>Click</button>
        <Child ref={this.child} />
      </>
    );
  }
}

export default App;
