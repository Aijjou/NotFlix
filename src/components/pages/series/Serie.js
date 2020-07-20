import React, { Component } from "react";
import { NotFlixService } from "../../../services/NotFlixService";
import history from "../../../history";
import { withRouter } from "react-router-dom";
import "./Series.css";

export class Serie extends Component {
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
      <div>
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
      </div>
    );
  }
}
export default withRouter(Serie);