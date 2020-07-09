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
      <div className="container-fluid" id="listNew">
        <div class="module-section clearfix">
          <div>
            <New
              titre={this.props.titre}
              age={this.props.age}
              categorie={this.props.categorie}
              image={this.props.image}
            ></New>
          </div>
          <span className="right-controls" role="button"></span>
        </div>
      </div>
    );
  }
}
