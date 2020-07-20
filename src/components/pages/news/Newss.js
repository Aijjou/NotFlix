import React, { Component } from "react";
import "./News.css";
import { New } from "./New";

export class Newss extends Component {
  constructor(props) {
    super(props);
    this.state = {
    
    };
  }

  

  render() {
    return (
      <div class="row">
        <div className="" id="list">
        
            <New film2={this.props.film2}></New>
        
        </div>
      </div>
    );
  }
}
