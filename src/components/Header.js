import React, { Component } from "react";
import styled from "styled-components";

const Titulo = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  color: blueviolet;
  background: beige;
`;

export default class script extends Component {
  render() {
    return (
      <>
        <Titulo>{this.props.title}</Titulo>
      </>
    );
  }
}
