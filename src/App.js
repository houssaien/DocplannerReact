import React, { Component } from 'react';
import Navbar from './navbar/navbar';
import Title from './title/title';
import Descrip from './desrip/descrip';
import Links from './links/links';
import World from './world/world';
import Place from './place/place';
import Footer from './footer/footer';
import './App.css';


class App extends Component {
  
  render() {
    return (
      <div className="App">
      <Navbar/>
      <Title/>
      <Descrip/>
      <Links/>
    <World/>
    <Place/>
    <Footer/>
      </div>
    );
  }
}

export default App;
