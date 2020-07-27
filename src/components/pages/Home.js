import React, { Component } from "react";
import { MyLists } from "./myList/MyLists";
import { MainFilm } from "./main/MainFilm";
import { Films } from "./films/Films";
import { Series } from "./series/Series";
import { News } from "./news/News";
import { Arrow } from "./Arrow";

import "./Home.css";
import { NotFlixService } from "../../services/NotFlixService";

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listNews: [],
      listFilm: [],
      listFav: [],
      listSerie: [],
      indexActivation: undefined,
      indexActivation2: undefined,
      indexActivation3: undefined,
      indexActivation4: undefined
    };
  }

  componentDidMount() {
    NotFlixService.get("listNews").then(response => {
      this.setState({
        listNews: response.data.news,
        listFilm: response.data.film,
        listFav: response.data.fav,
        listSerie: response.data.serie,
        indexActivation: 0,
        indexActivation2: 0,
        indexActivation3: 0,
        indexActivation4: 0
      });
    });
  }

  leftClick = () => {
    let tmpIndex = this.state.indexActivation - 1;
    if (this.state.indexActivation == 0) {
      tmpIndex = 0;
    }
    this.setState({
      indexActivation: tmpIndex
    });
  };

  rightClick = () => {
    let tmpIndex = this.state.indexActivation + 1;
    if (this.state.indexActivation == this.state.listNews.length - 1) {
      tmpIndex = 0;
    }
    this.setState({
      indexActivation: tmpIndex
    });
  };
  leftClick1 = () => {
    let tmpIndex = this.state.indexActivation2 - 1;
    if (this.state.indexActivation2 == 0) {
      tmpIndex = 0;
    }
    this.setState({
      indexActivation2: tmpIndex
    });
  };

  rightClick1 = () => {
    let tmpIndex = this.state.indexActivation2 + 1;
    if (this.state.indexActivation2 == this.state.listFilm.length - 1) {
      tmpIndex = 0;
    }
    this.setState({
      indexActivation2: tmpIndex
    });
  };
  leftClick2 = () => {
    let tmpIndex = this.state.indexActivation3 - 1;
    if (this.state.indexActivation3 == 0) {
      tmpIndex = 0;
    }
    this.setState({
      indexActivation3: tmpIndex
    });
  };

  rightClick2 = () => {
    let tmpIndex = this.state.indexActivation3 + 1;
    if (this.state.indexActivation3 == this.state.listSerie.length - 1) {
      tmpIndex = 0;
    }
    this.setState({
      indexActivation3: tmpIndex
    });
  };
  leftClick3 = () => {
    let tmpIndex = this.state.indexActivation4 - 1;
    if (this.state.indexActivation4 == 0) {
      tmpIndex = 0;
    }
    this.setState({
      indexActivation4: tmpIndex
    });
  };

  rightClick3 = () => {
    let tmpIndex = this.state.indexActivation4 + 1;
    if (this.state.indexActivation4 == this.state.listFav.length - 1) {
      tmpIndex = 0;
    }
    this.setState({
      indexActivation4: tmpIndex
    });
  };

  render() {
    return (
      <div className="container-fluid" id="home">
        <div className="row">
          <MainFilm></MainFilm>
        </div>
        <div className="row">
          <div className="col">
            <h3 className="flex-start">News</h3>
            <div className="row" id="bloc1">
              <Arrow type="left" click={this.leftClick} />
              <div className="row" id="news">
                {this.state.listNews.map((e, i) => {
                  return (
                    <div>
                      <News
                        index={i}
                        film={e}
                        indexActivation={this.state.indexActivation}
                      ></News>
                    </div>
                  );
                })}
              </div>
              <Arrow type="right" click={this.rightClick} />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h3 className="flex-start">Films</h3>
            <div className="row" id="bloc1">
              <Arrow type="left" click={this.leftClick1} />
              <div className="row" id="news">
                {this.state.listFilm.map((e, i) => {
                  return (
                    <div>
                      <Films
                        index={i}
                        film={e}
                        indexActivation={this.state.indexActivation2}
                      ></Films>
                    </div>
                  );
                })}
              </div>
              <Arrow type="right" click={this.rightClick1} />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h3 className="flex-start">Série</h3>
            <div className="row" id="bloc1">
              <Arrow type="left" click={this.leftClick2} />
              <div className="row ml4" id="news">
                {this.state.listSerie.map((e, i) => {
                  return (
                    <div>
                      <Series
                        index={i}
                        film={e}
                        indexActivation={this.state.indexActivation3}
                      ></Series>
                    </div>
                  );
                })}
              </div>
              <Arrow type="right" click={this.rightClick2} />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h3 className="flex-start">My List</h3>
            <div className="row" id="bloc1">
              <Arrow type="left" click={this.leftClick3} />
              <div className="row ml4" id="news">
                {this.state.listFav.map((e, i) => {
                  return (
                    <div>
                      <MyLists
                        index={i}
                        film={e}
                        indexActivation={this.state.indexActivation4}
                      ></MyLists>
                    </div>
                  );
                })}
              </div>
              <Arrow type="right" click={this.rightClick3} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
