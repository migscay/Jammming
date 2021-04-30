import React, {useState} from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';

function App() {

  //use React Hooks to add state 
  const [searchResults, setsearchResults] = useState([
    {name:'Tiny Dancer',artist:'Elton John',album:'Madman Across The Water',id:1},
    {name:'Tiny Dancer',artist:'Tim McGraw',album:'Love Story',id:2}
  ]);

  const [playlistTracks, setPlaylistTracks] = useState([
    {name:'La La La',artist:'The Doppelgangaz',album:'2012: The New Beginning',id:3},
    {name:'Vanilla Ice Cream',artist:'Stephen Lynch',album:'The Craig Machine',id:4}
  ]);

  const [playlistName,setPlaylistName] = useState('My Playlist');

  function addTrack(track) { 
    //check if the track has been added to the playlist already
    if (playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
      //alert('App addTrack, already added');
      return;
    }

    //save to playlist and update state
    playlistTracks.push(track);
    setPlaylistTracks(playlistTracks);

  }

  function removeTrack(track) { 
    playlistTracks.forEach(currentTrack => {
      if (currentTrack.id !== track.id) {
        alert(currentTrack.id + '!==' + track.id + ' in')   
      } else {
        alert(currentTrack.id + '!==' + track.id + ' out')
      }
    } 
    ); 
    let tracks = playlistTracks; 
    alert('tracks has ' + tracks.length + ' elements');
    //filter out the track to be removed  
    tracks.filter(currentTrack => currentTrack.id !== track.id);
    alert('tracks has ' + tracks.length + ' elements');
    
    setPlaylistTracks(tracks);

  }


  return (
    <div>
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
      <div class="App">
        <SearchBar />
        <div className="App-playlist">
          <SearchResults searchResults={searchResults} onAdd={addTrack} /> 
          <Playlist playlistName={playlistName} playlistTracks={playlistTracks} onRemove={removeTrack} />  
        </div>
      </div>
    </div>
  );
}

export default App;
