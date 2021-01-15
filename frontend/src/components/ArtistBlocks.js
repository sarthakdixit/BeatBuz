import React, { useEffect } from 'react';
import {Link} from 'react-router-dom';
import "../style/Operations.css";

function ArtistBlocks(props) {
  const url = "http://localhost:7000";
  const list = props.list;

  const items = list.map(l1 => 
    <li className="item inline-b-item" id="show_block_list" key={l1.id} style={{marginTop:"5px"}}>
      <Link to={"/specific/artist/"+l1.name} style={{textDecoration: "none", color:"black"}}>
        <div className="card" style={{width: "14rem"}}>
          <img className="card-img-top" src={url+l1.image} style={{height: "170px"}} alt="Song Poster" />
          <div className="card-body">
            <h5 className="card-title">{l1.name}</h5>
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

export default ArtistBlocks
