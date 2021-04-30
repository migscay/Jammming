import './Playlist.css';
import Tracklist from '../Tracklist/Tracklist';


function Playlist(props) {
  return (
    <div className="Playlist">
        <input value="New Playlist"/>
        <Tracklist tracks={props.playlistTracks}
                         onRemove={props.onRemove}
                         isRemoval={true}        
        />  
        <button class="Playlist-save">SAVE TO SPOTIFY</button>
    </div>  
  );
}

export default Playlist;
