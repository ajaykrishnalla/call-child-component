import React, { Component } from "react";

class Child extends Component {
  getAlert() {
    console.log("hello world");
  }
  render() {
    return (
      <>
        <h1>Child component</h1>
        <button>Click</button>
      </>
    );
  }
}

export default Child;
