import React, { Component } from "react";
import "./News.css";
import { New } from "./New";

export class News extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div class="row ">
        <li>
          <New
          film = {this.props.film}
       
          ></New>
        </li>
      </div>
    );
  }
}
