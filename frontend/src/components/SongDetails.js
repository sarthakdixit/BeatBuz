import React, {useState, useEffect} from 'react';
import Avatar from '@material-ui/core/Avatar';
import axios from "axios";

function SongDetails(props) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm">
          <h4>{props.songData.name} <i>({props.songData.views} views)</i></h4>
          <h5>{props.songData.album}</h5>
        </div>
        <div className="col-sm">
        <div>
        <Avatar style={{'width': '70px', 'height': '70px'}} alt={props.songData.name} src={process.env.REACT_APP_SONG_API_URL+props.songData.artist_image} />
        <h5> {props.songData.artist_name}</h5>
        </div>
        </div>
        <div className="col-sm" style={{textAlign:"center"}}>
          <div id="player_buttons">
            {props.audioType}
            {props.videoType}
          </div>
        </div>
    </div>
    </div>
  )
}

export default SongDetails
