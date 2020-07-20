import React, { Component } from "react";
import "./Films.css";
import { Film} from "./Film";

export class Filmss extends Component {
  constructor(props) {
    super(props);
    this.state = {
    
    };
  }

  

  render() {
    return (
      <div class="row">
        <div className="" id="list">
          <li>
            <Film film2={this.props.film2}></Film>
          </li>
        </div>
      </div>
    );
  }
}
