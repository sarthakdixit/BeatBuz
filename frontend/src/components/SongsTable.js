import React from 'react';
import { Link } from 'react-router-dom';

function SongsTable(props) {

  const list = props.list;

  const items = list.map(l1 =>
    <tr key={l1.id}>
      <td>{l1.name}</td>
      <td>{l1.album}</td>
      <td>{l1.genre}</td>
      <td>{l1.mood}</td>
      <td><Link to={"/song/player/"+l1.id} style={{textDecoration: "none"}}>
        <button className="btn btn-success">PLAY</button></Link></td>
    </tr>
  );

  return (
    <div style={{width:"100%", textAlign:"center"}}>
      <h3>Songs</h3>
      <table className="table table-striped table-dark">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Album</th>
      <th scope="col">Genre</th>
      <th scope="col">Mood</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    {items}
  </tbody>
</table>
    </div>
  )
}

export default SongsTable
