import React from 'react';
import {Link} from 'react-router-dom';
import "../style/Operations.css"

function ShowBlocks(props) {
  const list = props.list;

  const items = list.map(l1 => 
    <li className="item inline-b-item" id="show_block_list" key={l1.song_id} style={{marginTop:"5px"}}>
      <Link to={"/song/player/"+l1.song_id} style={{textDecoration: "none", color:"black"}}>
        <div className="card" style={{width: "14rem"}}>
          <img className="card-img-top" src={process.env.REACT_APP_SONG_API_URL+l1.song_id_poster} style={{height: "170px"}} alt="Song Poster" />
          <div className="card-body">
            <h5 className="card-title">{l1.song_id_name}</h5>
          </div>
        </div>
      </Link>
    </li>);

  return (
    <div className="container inline-b">
      {items}
    </div>
  )
}

export default ShowBlocks
