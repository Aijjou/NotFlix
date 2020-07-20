import React, { Component } from "react";
import { Series } from "./Series";
import { NotFlixService } from "../../../services/NotFlixService";
import { Arrow } from "./../Arrow";
import "./Series.css";

export class PageSeries extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listSerie: [],
      listSerieComedie: [],
      listSerieEnfant: [],
      listSerieAventure: [],
      listSerieThriller: [],
      listSerieFiction: [],
      listSerieFantaisie: [],
      listSerieFantastique: [],
      indexActivation: undefined,
      indexActivation2: undefined,
      indexActivation3: undefined,
      indexActivation4: undefined,
      indexActivation5: undefined,
      indexActivation6: undefined,
      indexActivation7: undefined,
      indexActivation8: undefined
    };
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
    if (this.state.indexActivation == this.state.listSerieThriller.length - 1) {
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
    if (this.state.indexActivation2 == this.state.listSerieEnfant.length - 1) {
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
  leftClick4 = () => {
    let tmpIndex = this.state.indexActivation5 - 1;
    if (this.state.indexActivation5 == 0) {
      tmpIndex = 0;
    }
    this.setState({
      indexActivation5: tmpIndex
    });
  };

  rightClick4 = () => {
    let tmpIndex = this.state.indexActivation5 + 1;
    if (this.state.indexActivation5 == this.state.listFav.length - 1) {
      tmpIndex = 0;
    }
    this.setState({
      indexActivation5: tmpIndex
    });
  };
  leftClick5 = () => {
    let tmpIndex = this.state.indexActivation6 - 1;
    if (this.state.indexActivation6 == 0) {
      tmpIndex = 0;
    }
    this.setState({
      indexActivation6: tmpIndex
    });
  };

  rightClick5 = () => {
    let tmpIndex = this.state.indexActivation6 + 1;
    if (this.state.indexActivation6 == this.state.listFav.length - 1) {
      tmpIndex = 0;
    }
    this.setState({
      indexActivation6: tmpIndex
    });
  };
  leftClick6 = () => {
    let tmpIndex = this.state.indexActivation7 - 1;
    if (this.state.indexActivation7 == 0) {
      tmpIndex = 0;
    }
    this.setState({
      indexActivation7: tmpIndex
    });
  };

  rightClick6 = () => {
    let tmpIndex = this.state.indexActivation7 + 1;
    if (this.state.indexActivation7 == this.state.listFav.length - 1) {
      tmpIndex = 0;
    }
    this.setState({
      indexActivation7: tmpIndex
    });
  };
  leftClick7 = () => {
    let tmpIndex = this.state.indexActivation8 - 1;
    if (this.state.indexActivation8 == 0) {
      tmpIndex = 0;
    }
    this.setState({
      indexActivation8: tmpIndex
    });
  };

  rightClick7 = () => {
    let tmpIndex = this.state.indexActivation8 + 1;
    if (this.state.indexActivation8 == this.state.listFav.length - 1) {
      tmpIndex = 0;
    }
    this.setState({
      indexActivation8: tmpIndex
    });
  };

  componentDidMount() {
    var tab1 = [];
    var tab10 = [];
    var tab11 = [];
    var thriller = {};
    // let tab10 = [];
    // let tab11 = [];
    NotFlixService.get("listNews").then(response => {
      let listSerieComedie1 = [];
      let listSerieEnfant1 = [];
      let listSerieAventure1 = [];
      let listSerieThriller1 = [];
      let listSerieFiction1 = [];
      let listSerieFantaisie1 = [];
      let listSerieFantastique1 = [];

      let list = response.data.serie;
      for (let listserie of list) {
        for (let serie of listserie) {
          if (
            serie.categorie == "Comedie" &&
            serie.categorie != "Enfant" &&
            serie.categorie != "Aventure" &&
            serie.categorie != "Thriller" &&
            serie.categorie != "Science-fiction" &&
            serie.categorie != "Fantaisie" &&
            serie.categorie != "Fantastique"
          ) {
            let comedie = serie;
            tab1.push(comedie);
            listSerieComedie1.push(tab1);
          } else if (
            serie.categorie != "Comedie" &&
            serie.categorie == "Enfant" &&
            serie.categorie != "Aventure" &&
            serie.categorie != "Thriller" &&
            serie.categorie != "Science-fiction" &&
            serie.categorie != "Fantaisie" &&
            serie.categorie != "Fantastique"
          ) {
            let enfant = serie;
            let tab2 = [];
            tab2.push(enfant);
            listSerieEnfant1.push(tab2);
          } else if (
            serie.categorie != "Comedie" &&
            serie.categorie != "Enfant" &&
            serie.categorie == "Aventure" &&
            serie.categorie != "Thriller" &&
            serie.categorie != "Science-fiction" &&
            serie.categorie != "Fantaisie" &&
            serie.categorie != "Fantastique"
          ) {
            let aventure = serie;
            let tab3 = [];
            tab3.push(aventure);
            listSerieAventure1.push(tab3);
          } else if (
            serie.categorie != "Comedie" &&
            serie.categorie != "Enfant" &&
            serie.categorie != "Aventure" &&
            serie.categorie == "Thriller" &&
            serie.categorie != "Science-fiction" &&
            serie.categorie != "Fantaisie" &&
            serie.categorie != "Fantastique"
          ) {
            thriller = serie;
            if (tab10.length < 5) {
              tab10.push(thriller);
              listSerieThriller1.push(tab10);
            } else {
              tab11.push(thriller);
              listSerieThriller1.push(tab11);
            }
          } else if (
            serie.categorie != "Comedie" &&
            serie.categorie != "Enfant" &&
            serie.categorie != "Aventure" &&
            serie.categorie != "Thriller" &&
            serie.categorie == "Science-fiction" &&
            serie.categorie != "Fantaisie" &&
            serie.categorie != "Fantastique"
          ) {
            let fiction = serie;
            let tab5 = [];
            tab5.push(fiction);
            listSerieFiction1.push(tab5);
          } else if (
            serie.categorie != "Comedie" &&
            serie.categorie != "Enfant" &&
            serie.categorie != "Aventure" &&
            serie.categorie != "Thriller" &&
            serie.categorie != "Science-fiction" &&
            serie.categorie == "Fantaisie" &&
            serie.categorie != "Fantastique"
          ) {
            let fantaisie = serie;
            let tab6 = [];
            tab6.push(fantaisie);
            listSerieFantaisie1.push(tab6);
          } else if (
            serie.categorie != "Comedie" &&
            serie.categorie != "Enfant" &&
            serie.categorie != "Aventure" &&
            serie.categorie != "Thriller" &&
            serie.categorie != "Science-fiction" &&
            serie.categorie != "Fantaisie" &&
            serie.categorie == "Fantastique"
          ) {
            let fantastique = serie;
            let tab7 = [];
            tab7.push(fantastique);
            listSerieFantastique1.push(tab7);
          }

          //   switch (serie.categorie) {
          //     case "Comedie":
          //       let comedie = serie;
          //       console.log(comedie);
          //       listSerieComedie1.push(comedie);
          //     case "Enfant":
          //       let enfant = serie;
          //       console.log(enfant);
          //       listSerieEnfant1.push(enfant);
          //     case "Aventure":
          //       let aventure = serie;
          //       console.log(aventure);
          //       listSerieAventure1.push(aventure);
          //     case "Thriller":
          //       let thriller = serie;
          //       console.log(thriller);
          //       listSerieThriller1.push(thriller);
          //     case "Science-fiction":
          //       let fiction = serie;
          //       console.log(fiction);
          //       listSerieFiction1.push(fiction);
          //     case "Fantaisie":
          //       let fantaisie = serie;
          //       console.log(fantaisie);
          //       listSerieFantaisie1.push(fantaisie);
          //     case "Fantastique":
          //       let fantastique = serie;
          //       console.log(fantastique);
          //       listSerieFantastique1.push(fantastique);
        }
      }

      this.setState({
        listSerie: response.data.serie,
        listSerieComedie: listSerieComedie1,
        listSerieEnfant: listSerieEnfant1,
        listSerieAventure: listSerieAventure1,
        listSerieThriller: listSerieThriller1,
        listSerieFiction: listSerieFiction1,
        listSerieFantaisie: listSerieFantaisie1,
        listSerieFantastique: listSerieFantastique1,
        indexActivation: 0,
        indexActivation2: 0,
        indexActivation3: 0,
        indexActivation4: 0,
        indexActivation5: 0,
        indexActivation6: 0,
        indexActivation7: 0,
        indexActivation8: 0
      });
    });
  }

  render() {
    return (
      <div id="pageSerie">
        <div className="container-fluid">
          <div className="row blocSerie">
            <h1 className="col-2 ml4">Série</h1>
            <div className="col-3 mr4">
              <div className="form-group" id="select">
                <label for="exampleFormControlSelect1" className="choix">
                  Choix categorie
                </label>
                <select
                  className="form-control ml4"
                  id="exampleFormControlSelect1"
                >
                  <option>Comedie</option>
                  <option>Enfant</option>
                  <option>Aventure</option>
                  <option>Thriller</option>
                  <option>Science-fiction</option>
                  <option>Fantaisie</option>
                  <option>Fantastique</option>
                </select>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <h3 className="flex-start">Thriller</h3>
              <div className="row" id="bloc1">
                <Arrow type="left" click={this.leftClick} />
                <div className="row" id="news">
                  {this.state.listSerieThriller.map((e, i) => {
                    console.log(e);
                    return (
                      <div>
                        <Series
                          index={i}
                          film={e}
                          indexActivation={this.state.indexActivation}
                        ></Series>
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
              <h3 className="flex-start">Comedie</h3>
              <div className="row" id="bloc1">
                <Arrow type="left" click={this.leftClick2} />
                <div className="row" id="news">
                  {this.state.listSerieComedie.map((e, i) => {
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
              <h3 className="flex-start">Aventure</h3>
              <div className="row" id="bloc1">
                <Arrow type="left" click={this.leftClick3} />
                <div className="row" id="news">
                  {this.state.listSerieAventure.map((e, i) => {
                    return (
                      <div>
                        <Series
                          index={i}
                          film={e}
                          indexActivation={this.state.indexActivation4}
                        ></Series>
                      </div>
                    );
                  })}
                </div>
                <Arrow type="right" click={this.rightClick3} />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <h3 className="flex-start">Science-fiction</h3>
              <div className="row" id="bloc1">
                <Arrow type="left" click={this.leftClick4} />
                <div className="row" id="news">
                  {this.state.listSerieFiction.map((e, i) => {
                    return (
                      <div>
                        <Series
                          index={i}
                          film={e}
                          indexActivation={this.state.indexActivation5}
                        ></Series>
                      </div>
                    );
                  })}
                </div>
                <Arrow type="right" click={this.rightClick4} />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <h3 className="flex-start">Enfant</h3>
              <div className="row" id="bloc1">
                <Arrow type="left" click={this.leftClick5} />
                <div className="row" id="news">
                  {this.state.listSerieEnfant.map((e, i) => {
                    return (
                      <div>
                        <Series
                          index={i}
                          film={e}
                          indexActivation={this.state.indexActivation6}
                        ></Series>
                      </div>
                    );
                  })}
                </div>
                <Arrow type="right" click={this.rightClick5} />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <h3 className="flex-start">Fantastique</h3>
              <div className="row" id="bloc1">
                <Arrow type="left" click={this.leftClick6} />
                <div className="row" id="news">
                  {this.state.listSerieFantastique.map((e, i) => {
                    return (
                      <div>
                        <Series
                          index={i}
                          film={e}
                          indexActivation={this.state.indexActivation7}
                        ></Series>
                      </div>
                    );
                  })}
                </div>
                <Arrow type="right" click={this.rightClick6} />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <h3 className="flex-start">Fantaisie</h3>
              <div className="row" id="bloc1">
                <Arrow type="left" click={this.leftClick7} />
                <div className="row" id="news">
                  {this.state.listSerieFantaisie.map((e, i) => {
                    return (
                      <div>
                        <Series
                          index={i}
                          film={e}
                          indexActivation={this.state.indexActivation8}
                        ></Series>
                      </div>
                    );
                  })}
                </div>
                <Arrow type="right" click={this.rightClick7} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
