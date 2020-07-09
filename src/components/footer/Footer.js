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
        <footer className="footer-container">
          <div className="row ">
            <a
              className="btn col-1 "
              href="https://www.facebook.com/netflixfrance" target="_blank"
            >
              <i className="fa fa-facebook-official" aria-hidden="true"></i>
            </a>

            <button
              className="btn col-1"
              href="https://www.instagram.com/netflixfr/?hl=fr%22%3E"
            >
              <i class="fa fa-instagram" aria-hidden="true"></i>
            </button>

            <button
              className="btn col-1"
              href="https://twitter.com/NetflixFR%22%3E"
            >
              <i class="fa fa-twitter-square" aria-hidden="true"></i>
            </button>

            <p className="text-muted col-9" href="#">
              {" "}
              © 2020-2020 Notflix, Inc.
            </p>
          </div>
        </footer>
      </div>
    );
  }
}
