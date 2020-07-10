import React, { Component } from "react";
import { MyList } from "./myList/MyList";
import { MainFilm } from "./main/MainFilm";
import { Films } from "./films/Films";
import { Series } from "./series/Series";
import { News } from "./news/News";
import "./Home.css";
import { NotFlixService } from "../../services/NotFlixService";

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listNews: [],
      listFilm: [],
      listFav: [],
      listSerie: []
    };
  }

  componentDidMount() {
    NotFlixService.get("listNews").then(response => {
      this.setState({
        listNews: response.data.news,
        listFilm: response.data.film,
        listFav: response.data.fav,
        listSerie: response.data.serie
      });
    });
  }

  render() {
    return (
      <div className="container-fluid" id="home">
        <div className="row">
          <MainFilm></MainFilm>
        </div>
        <div className="row">
          <div className="col">
            <h3 className="flex-start">News</h3>
            <div className="row ml4" id="news">
              {this.state.listNews.map(e => {
                return (
                  <div>
                    <News film={e}></News>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h3 className="flex-start">Films</h3>
            <div className="row ml4" id="news">
              {this.state.listFilm.map(e => {
                return (
                  <div>
                    <Films film={e}></Films>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h3 className="flex-start">Serie</h3>
            <div className="row ml4" id="news">
              {this.state.listSerie.map(e => {
                return (
                  <div>
                    <Series film={e}></Series>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h3 className="flex-start">My List</h3>
            <div className="row ml4" id="news">
              {this.state.listFav.map(e => {
                return (
                  <div>
                    <MyList film={e}></MyList>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
