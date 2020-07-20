import React, { Component } from "react";
import "./MyList.css";
import { FilmMyList } from "./FilmMyList";
export class MyList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <FilmMyList
        film2={this.props.film2}
        ></FilmMyList>
      </div>
    );
  }
}
