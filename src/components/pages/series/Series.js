import React, { Component } from "react";
import "./Series.css";
import { Serie } from "./Serie";

export class Series extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Serie
         film = {this.props.film}
        ></Serie>
      </div>
    );
  }
}
