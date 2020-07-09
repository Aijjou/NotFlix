import React, { Component } from "react";
import "./Films.css";
import {Film} from "./Film";



export class Films extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <div><Film></Film></div>;
  }
}
