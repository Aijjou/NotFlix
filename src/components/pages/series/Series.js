import React, { Component } from "react";
import "./Series.css";
import { Seriess } from "./Seriess";

export class Series extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.setState({
      // list: this.props.film
    });
  }

  render() {
    return (
      <div>
        <div className="row" id="listnew">
          {this.props.film.map(e => {
            return (
              <li>
                <div
                  className={
                    this.props.index == this.props.indexActivation
                      ? "slide-active col-10 text-center"
                      : "slide-noactive"
                  }
                >
                  <Seriess film={this.props.film} film2={e}></Seriess>
                </div>
              </li>
            );
          })}
        </div>
      </div>
    );
  }
}
