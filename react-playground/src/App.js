import './App.css';
import React, { Component } from 'react'
import Home from './componets/Home'
import About from './componets/About'
import Contact from './componets/Contact'
import NavBar from './componets/Navbar'
import {BrowserRouter, Route} from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar/>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/contact" component={Contact}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
