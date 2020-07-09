import React, { Component } from "react";
<<<<<<< HEAD
import { Arrow } from "./Arrow";
import { Slide } from "./Slide";
import { Indicator } from "./Indicator";
import "./Main.css";
=======
>>>>>>> 7a250d617900b81c5bf040a0ac43c5e9bb62ece4
import riverdale from "./../riverdale.png";
import casapapel from "./../casa-papel.jpg";
import kingdom from "./../the-last-kingdom.jpg";
import who from "./../doctor-who.jpg";
<<<<<<< HEAD

=======
import "./Main.css";
import { Arrow } from "./Arrow"
import { Slide } from "./Slide"
import { Indicator } from "./Indicator"
>>>>>>> 7a250d617900b81c5bf040a0ac43c5e9bb62ece4
export class MainFilm extends Component {
  constructor(props) {
    super(props);
    this.state = {
<<<<<<< HEAD
      slides: [
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
      ],

      indexActivation: undefined
    };
  }
  componentDidMount() {
    this.setState({
      indexActivation: this.state.slides.length - 1
    });
=======
      slides: [{
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
    ],
      indexActivation: undefined
    };
>>>>>>> 7a250d617900b81c5bf040a0ac43c5e9bb62ece4
  }
  leftClick = () => {
    let tmpIndex = this.state.indexActivation - 1;
    if (this.state.indexActivation == 0) {
      tmpIndex = this.state.slides.length - 1;
    }
    this.setState({
      indexActivation: tmpIndex
    });
  };

<<<<<<< HEAD
=======
  componentDidMount() {
    this.setState({
      indexActivation: this.state.slides.length - 1
    });
  }
  leftClick = () => {
    let tmpIndex = this.state.indexActivation - 1;
    if (this.state.indexActivation == 0) {
      tmpIndex = this.state.slides.length - 1;
    }
    this.setState({
      indexActivation: tmpIndex
    });
  };

>>>>>>> 7a250d617900b81c5bf040a0ac43c5e9bb62ece4
  rightClick = () => {
    let tmpIndex = this.state.indexActivation + 1;
    if (this.state.indexActivation == this.state.slides.length - 1) {
      tmpIndex = 0;
    }
    this.setState({
      indexActivation: tmpIndex
    });
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          <Arrow type="left" click={this.leftClick} />
          {this.state.slides.map((s, i) => {
            return (
              <Slide
                index={i}
<<<<<<< HEAD
=======
                titre={s.titre}
>>>>>>> 7a250d617900b81c5bf040a0ac43c5e9bb62ece4
                image={s.image}
                indexActivation={this.state.indexActivation}
              />
            );
          })}
          <Arrow type="right" click={this.rightClick} />
        </div>
        <Indicator
          max={this.state.slides.length}
          indexActivation={this.state.indexActivation}
        />
      </div>
    );
  }
}
