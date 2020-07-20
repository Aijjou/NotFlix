import React, { Component } from "react";
import "./MyList.css";
import { MyList } from "./MyList";

export class MyLists extends Component {
  constructor(props) {
    super(props);
    this.state = {

      
    
    };
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
                  <MyList film={this.props.film} film2={e}></MyList>
                </div>
              </li>
            );
          })}
        </div>
      </div>
    );
  }
 


  // render() {
  //   return (
  //     <div class="row">
  //        <div className="row" id="listnew">
  //         {this.props.film.map(e => {
  //           return (
  //             <li>
  //               <div
  //                 className={
  //                   this.props.index == this.props.indexActivation
  //                     ? "slide-active col-10 text-center"
  //                     : "slide-noactive"
  //                 }
  //               >
  //              <FilmMyList film2={this.props.film2}><FilmMyList>
  //               </div>
  //             </li>
  //           );
  //         })}
  //       </div>
  //     </div>
  //   );
  // }
        

        



}