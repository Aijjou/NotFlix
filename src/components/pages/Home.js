import React, { Component } from "react";
import { MyList } from "./myList/MyList";
import { MainFilm } from "./main/MainFilm";
import { Films } from "./films/Films";
import { Series } from "./series/Series";
import { News } from "./news/News";
import "./Home.css";
import riverdale from "./riverdale.png";
import casapapel from "./casa-papel.jpg";
import kingdom from "./the-last-kingdom.jpg";
import who from "./doctor-who.jpg";

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listNews: [
        {
          titre: "Riverdale",
          age: "+16 ans",
          categorie: "Sentimentale",
          image: riverdale
        },
        {
          titre: "La Casa Del Papel",
          age: "+16 ans",
          categorie: "Thriller",
          image: casapapel
        },
        {
          titre: "Kingdom",
          age: "+16 ans",
          categorie: "Aventure",
          image: kingdom
        },
        {
          titre: "Doctor Who",
          age: "+16 ans",
          categorie: "Sc-Fi",
          image: who
        }
      ]
    };
  }

  render() {
    return (
      <div>
        <div className="col" id="home">
          <div className="row">
            <MainFilm></MainFilm>
          </div>
          <div className="row">
            <div className="col">
              <h3 className="row flex-start">News</h3>
              <div className="row" id="news">
                {this.state.listNews.map(e => {
                  return (
                    <div>
                      <News
                        titre={e.titre}
                        age={e.age}
                        categorie={e.categorie}
                        image={e.image}
                      ></News>
                    </div>
                  );
                })}
              </div>
             
            </div>
          </div>
          <div className="row">
            <Films></Films>
          </div>
          <div className="row">
            <Series></Series>
          </div>
          <div className="row">
            <MyList></MyList>
          </div>
        </div>
      </div>
    );
  }
}
