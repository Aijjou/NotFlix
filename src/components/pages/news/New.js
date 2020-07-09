import React, { Component } from "react";
import "./News.css";
export class New extends Component {
  constructor(props) {
    super(props);
    this.state = {



      
    };
  }

  detailFilm = () => {
    NotFlixService.new = this.props.annonce;
    this.props.history.push("/new");
  };
  render() {
    return (
      <div onClick={this.detailFilm} type="button">
        <div class="card bg-dark text-white">
          <img
            src={this.props.image}
            class="card-img"
            alt="..."
            id="image"
          ></img>
          <div class="card-img-overlay">
            <h5 class="card-title">{this.props.titre}</h5>
            <p class="card-text">{this.props.categorie}</p>
            <p class="card-text"> {this.props.age}</p>
          </div>
        </div>
      </div>
    );
  }
}
