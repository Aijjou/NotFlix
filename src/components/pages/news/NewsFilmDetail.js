import React, { Component } from "react";
import { NotFlixService } from "../../../services/NotFlixService";

export class NewsFilmDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      film: NotFlixService.film
    };
  }
  componentDidMount() {
    this.setState({
      film: NotFlixService.film
    });
  }

  render() {
    return (
      <div className="row" id="filmDetail">
        <div className="col-3">
          <img src={this.state.film.image} id="imageFilm"></img>
        </div>
        <div className="col-6" id="detailFilm">
          <div className="row">
            <h1>{this.state.film.titre}</h1>
          </div>
          <div className="row p4">
            <h2>Categorie : {this.state.film.categorie}</h2>
          </div>
          <div className="row"><h3>Note : {this.state.film.note}/10</h3></div>
          <div className="row"> <h3>Durée : {this.state.film.duree} min</h3></div>
          <div className="row"><h3>Sortie : {this.state.film.sortie}</h3></div>
          <div className="row">
            Synopsis :<p>{this.state.film.content} </p>
          </div>
          <div className="row">
            {" "}
            Casting :<img className="col-3"></img>
            <img className="col-3"></img>
            <img className="col-3"></img>
            <img className="col-3"></img>
          </div>
        </div>
      </div>
    );
  }
}
