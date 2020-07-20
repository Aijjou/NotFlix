import React, { Component } from "react";
import "./News.css";
import { NotFlixService } from "../../../services/NotFlixService";
import history from "../../../history";
import { withRouter } from "react-router-dom";

export class New extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  detailFilm = () => {
    NotFlixService.film = this.props.film2;
    history.push("/filmDetail");
  };

  render() {
    return (
      <div onClick={this.detailFilm} type="button" id="card">
        <div class="card bg-dark text-white">
          <img
            src={this.props.film2.image2}
            class="card-img"
            alt="..."
            id="image"
          ></img>
          <div class="card-img-overlay">
            <h5 class="card-title">{this.props.film2.titre}</h5>
            <p class="card-text">{this.props.film2.categorie}</p>
            <p class="card-text"> {this.props.film2.age}</p>
          </div>
        </div>
      </div>
    );
  }
}
export default withRouter(New);
