import React, { Component } from "react";
import "./Series.css";
import { Serie} from "./Serie";

export class Seriess extends Component {
  constructor(props) {
    super(props);
    this.state = {
    
    };
  }

  

  render() {
    return (
      <div class="row">
        <div className="" id="list">
            <Serie film2={this.props.film2}></Serie>
        </div>
      </div>
    );
  }
}
