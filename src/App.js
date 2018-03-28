import React, { Component } from 'react';
import './App.css';



class Aggregate extends Component {
  render() {
    return (
      <div className='aggregate'>
      <h2>Number Text</h2>
      </div>

      )
  }
}

class Filter extends Component {
  render() {
    return (
        <div>
          <img/>
          <input type="text"/>
        </div>


      )
  }
}

class Playlist extends Component {
  render() {
    return (
        <div className="playlist">
          <img src='#' className="playlist__img" />
          <h3 className="playlist__heading">Playlist Name</h3>
          <ul className="playlist__list">
            <li className="playlist__listitem">Song</li>
            <li className="playlist__listitem">Song</li>
            <li className="playlist__listitem">Song</li>
          </ul>
        </div>
      )
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Title</h1>
        <Aggregate />
        <Aggregate />
        <Filter />
        <Playlist />
        <Playlist />
        <Playlist />
        <Playlist />
      </div>
    );
  }
}

export default App;
