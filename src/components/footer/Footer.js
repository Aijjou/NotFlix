import { Component } from "react";
import React from "react";
import "./Footer.css";

export class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
         <footer className="footer-container" id="footer">
        <div className="row bd-highlight mb-3">
            <div className="btn mr-auto p-2 bd-highlight">
                <a className="btn col-1 mr-2" href="https://www.facebook.com/netflixfrance" target="_blank" id="btnf" >

                    <i class="fa fa-facebook-official" aria-hidden="true" id="iconf"></i>

                </a>

                <a className="btn col-1 mr-2 " href="https://www.instagram.com/netflixfr/?hl=fr" target="_blank" id="btni">

                    <i class="fa fa-instagram" aria-hidden="true" id="iconi"></i>

                </a>

                <a className="btn col-1 mr-2" href="https://twitter.com/NetflixFR" target= "_blank" id="btnt">

                    <i class="fa fa-twitter-square" aria-hidden="true" id="icont"></i>

                </a>
            </div>
            <div className=" bd-highlight" id="copyright">
                <p className="text-muted col-12" href="#" id="txt"> © 2020-2020 Notflix, Inc.</p>

            </div>
        </div>
    </footer>
      </div>
    );
  }
}
