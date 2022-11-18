import Header from "./component/Header";
import Home from "./component/Home";
import React from "react";
import Footer from "./component/Footer"
import {Switch,Route} from 'react-router-dom';
import ContactUs from "./component/ContactUs";
import About from "./component/About";
import Portfolio from "./component/Portfolio";
import Service from "./component/Service";
import Team from "./component/Team";
import Blog from "./component/Blog"

function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route path="/" exact component={Home}>

        </Route>
        <Route path="/about" exact component={About}>

        </Route>
        <Route path="/services" exact component={Service}>

        </Route>
        <Route path="/portfolio" exact component={Portfolio}>

        </Route>
        <Route path="/Team" exact component={Team}>

        </Route>
        <Route path="/contact Us" exact component={ContactUs}>

        </Route>
        <Route path="/blog" exact component={Blog}>

        </Route>
      </Switch>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
