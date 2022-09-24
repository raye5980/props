import React, { Component } from "react";
import styled from "styled-components";

const Lista = styled.ul`
  list-style: none;
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  color: blueviolet;
  background: beige;
  height: 3.7vh;
`;

export default class script extends Component {
  render() {
    return (
      <>
        <div>
          <Lista>
            <li>Nome: {this.props.nome}</li>
            <li>Idade: {this.props.idade}</li>
            <li>Quer estudar: {this.props.querestudar}</li>
          </Lista>
        </div>
      </>
    );
  }
}
