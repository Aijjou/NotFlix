import React, { Component } from "react";
import "./Films.css";
import { Film } from "./Film";
import { Slide } from "../main/Slide";

export class Films extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  

  render() {
    return (
      <div>
        <Film
          film = {this.props.film}
        ></Film>
      </div>
    );
  }
}
