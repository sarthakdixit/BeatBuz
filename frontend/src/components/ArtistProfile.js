import React from 'react';
import Avatar from '@material-ui/core/Avatar';

function ArtistProfile(props) {
  const url = "http://localhost:7000";

  return (
    <div style={{marginLeft:"20px"}}>
      <Avatar style={{'width': '140px', 'height': '140px', 'marginTop': '30px'}} alt={props.name} src={url+props.image} />
      <h2 style={{'marginTop': '10px', 'marginLeft':'10px'}}>{props.name}</h2>
    </div>
  )
}

export default ArtistProfile
