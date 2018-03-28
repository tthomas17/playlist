import React, { Component } from 'react';
import './App.css';

let fakeServerData = {
  user: {
    name: 'Tyler',
    playlists: [
      {
        name: 'MyFavorites', 
        songs: [ 
          {name:'song1', duration: 1345},
          {name:'song2', duration: 1345}, 
          {name:'song3', duration: 1345}
         ]
      },
      {
        name: 'MyFavorites', 
        songs: [  
          {name:'song1', duration: 1345},   
          {name:'song2', duration: 1345},  
          {name:'song3', duration: 1345} 
        ]
      },
      {
        name: 'MyFavorites', 
        songs: [ 
          {name:'song1', duration: 1345},
          {name:'song2', duration: 1345}, 
          {name:'song3', duration: 1345}
        ]
      },
      {
        name: 'MyFavorites', 
        songs: [ 
          {name:'song1', duration: 1345},
          {name:'song2', duration: 1345}, 
          {name:'song3', duration: 1345}
        ]
      }
    ]
  }
}

class PlaylistCounter extends Component {
  render() {
    return (
      <div className='aggregate'>
      <h2>{this.props.playlists.length} Playlists</h2>
      </div>

      )
  }
}

class HoursCounter extends Component {
  render() {
    let allSongs = this.props.playlists.reduce( (songs, eachPlaylist) => {
      return songs.concat(eachPlaylist.songs)
    }, [])
    let totalDuration = allSongs.reduce((sum, eachSong) => {
      return sum + eachSong.duration
    },0)   
    return (
      <div className='aggregate'>
      <h2>{Math.floor(totalDuration/60)} Hours</h2>
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
  constructor() {
    super();

    this.state = {
      serverData: {}
    }
  }

  componentDidMount() {
    setTimeout(() => this.setState({serverData: fakeServerData}), 1000);
    
  }

  render() {
    return (
      <div className="App">
        {this.state.serverData.user ?
          <div>
            <h1>{this.state.serverData.user.name}'s Playlist</h1>
            <PlaylistCounter 
              playlists = {this.state.serverData.user.playlists }
            />
            <HoursCounter
              playlists = {this.state.serverData.user.playlists } 
            />
            <Filter />
            <Playlist />
            <Playlist />
            <Playlist />
            <Playlist />
          </div>
          : <h1 className='loading'>Loading...</h1>
      }
      </div>
    );
  }
}

export default App;
