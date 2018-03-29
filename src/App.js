import React, { Component } from 'react';
import './App.css';

let fakeServerData = {
  user: {
    name: 'Tyler',
    playlists: [
      {
        name: 'Discover Weekly', 
        songs: [ 
          {name:'song1', duration: 1345},
          {name:'song2', duration: 1345}, 
          {name:'song3', duration: 1345}
         ]
      },
      {
        name: 'Tye', 
        songs: [  
          {name:'song1', duration: 1345},   
          {name:'song2', duration: 1345},  
          {name:'song3', duration: 1345} 
        ]
      },
      {
        name: 'Tye2', 
        songs: [ 
          {name:'song1', duration: 1345},
          {name:'song2', duration: 1345}, 
          {name:'song3', duration: 1345}
        ]
      },
      {
        name: 'Flow', 
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
          <input onKeyUp={event=> this.props.onTextChange(event.target.value) } type="text"/>
        </div>


      )
  }
}

class Playlist extends Component {
  render() {
    const {playlist} = this.props
    return (
        <div className="playlist">
          <img src='#' className="playlist__img" />
          <h3 className="playlist__heading">{playlist.name}</h3>
          <ul className="playlist__list">
            {playlist.songs.map(song =>
              <li className="playlist__listitem">{song.name}</li>
              )}
          </ul>
        </div>
      )
  }
}

class App extends Component {
  constructor() {
    super();

    this.state = {
      serverData: {},
      queryString: ''
    }
  }

  componentDidMount() {
    setTimeout(() => this.setState({serverData: fakeServerData}), 1000);  
  }

  render() {
    let playlistsToRender = this.state.serverData.user 
        ? this.state.serverData.user.playlists.filter(
            playlist => playlist.name.toLowerCase().includes(
              this.state.queryString.toLowerCase())
        )
        : []
        
    return (
      <div className="App">
        {this.state.serverData.user ?
          <div>
            <h1>{this.state.serverData.user.name}'s Playlist</h1>
            <PlaylistCounter 
              playlists = {playlistsToRender}
            />
            <HoursCounter
              playlists = {playlistsToRender} 
            />
            <Filter onTextChange={query => this.setState({queryString: query})} />
            {playlistsToRender.map( playlist =>
                 <Playlist playlist={playlist} />
              )}
          </div>
          : <h1 className='loading'>Loading...</h1>
      }
      </div>
    );
  }
}

export default App;
