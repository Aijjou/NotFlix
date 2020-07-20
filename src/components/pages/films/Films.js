import React, { Component } from "react";
import "./Films.css";
import { Filmss } from "./Filmss";

export class Films extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // list: []
    };
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
                  <Filmss film={this.props.film} film2={e}></Filmss>
                </div>
              </li>
            );
          })}
        </div>
      </div>
    );
  }
}
