import React, { Component } from "react";
import Header from "./components/Header.js";
import Main from "./components/Main.js";

export default class script extends Component {
  render() {
    return (
      <>
        <Header title="Informações" />
        <Main nome="Rayenne" idade="27" querestudar="React" />
      </>
    );
  }
}
