import React, { Component } from "react";

import "./styles/MiniLoader.css";

export default class MiniLoader extends Component {
  render() {
    return (
      <div className="mini-lds-grid">
        <div />
        <div />
        <div />
      </div>
    );
  }
}
