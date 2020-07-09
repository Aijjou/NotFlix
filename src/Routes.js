import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";
import history from "./history";
import { Header } from "./components/header/Header";
import { Footer } from "./components/footer/Footer";
import { New } from "./components/pages/news/New";
import { Film } from "./components/pages/films/Film";
import { Serie } from "./components/pages/series/Serie";
import { MyList } from "./components/pages/myList/MyList";
import { Home } from "./components/pages/Home";

export default class Routes extends Component {
  render() {
    return (
      <div  id="blocMain">
        <Router history={history}>
          <Header></Header>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/New" component={New} />
            <Route path="/Film" component={Film} />
            <Route path="/Serie" component={Serie} />
            <Route path="/Mylist" component={MyList} />
          </Switch>
          <Footer></Footer>
        </Router>
      </div>
    );
  }
}
