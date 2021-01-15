import React, { Fragment, useEffect, useState } from 'react';
import {Link, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {logout} from '../actions/auth'
import Navbar from '../components/Navabar';
import '../style/Operations.css';
import FooterPage from '../components/FooterPage';
import axios from "axios";
import ShowBlocks from '../components/ShowBlocks';

function Search({logout, isAuthenticated, match}) {

  const [artist, setArtist] = useState({});
  const [songs, setSongs] = useState([]);
  const url = "http://localhost:7000";

  async function fetchSongData(pk){
    return await axios.get(url+"/api/search_similar_song/"+pk+"/").then(res => {
      return res.data
    }).catch(err => {
      throw new Error(err);
    });
  }

  async function fetchArtistData(artist_name){
    return await axios.get(url+"/api/artist/"+artist_name+"/").then(res => {
      return res.data
    }).catch(err => {
      throw new Error(err);
    });
  }

  useEffect(() =>{
    let isSubscribed = true;
    let pk = match.params.pk;
    setArtist({});
    setSongs([]);

    fetchArtistData(pk).then(res => {
      if(isSubscribed){
        setArtist(res);
      }else{
        return null;
      }
    }).catch(err => (isSubscribed ? console.log(err) : null));

    fetchSongData(pk).then(res => {
      if(isSubscribed){
        let arr = [];
        for(let i=0;i<res.length;i++){
          arr.push({song_id: res[i].id, song_id_poster: res[i].poster, song_id_name: res[i].name});
        }
        setSongs(arr);
      }
    }).catch(err => (isSubscribed ? console.log(err) : null));

    return () => (isSubscribed = false);
  }, [match.params.pk])

  if(!isAuthenticated){
    return <Redirect to="/" />
  }

  return(
    <Fragment>
      <Navbar logouthandler={logout} />
      <div id="container">
        {Object.keys(artist).length == 0 ? <div></div> : <div id="show_box" style={{marginTop:"20px"}}>
          <div id="show_box_name">
            <div style={{color:"white"}}>
              <h2 style={{marginLeft:"15px"}}>Artist</h2>
            </div>
          </div>
          <div className="container-fluid">
          <div className="card" style={{width: "14rem"}}>
          <Link to={"/specific/artist/"+artist.name} style={{textDecoration: "none"}}><img className="card-img-top" src={url+artist.image} style={{height: "170px"}} alt={artist.name} /></Link>
          <div className="card-body" style={{color:"black"}}>
            <h5 className="card-title">{artist.name}</h5>
          </div>
        </div>
          </div>
        </div>}
        {songs.length == 0 ? <div></div> : <div id="show_box" style={{marginTop:"70px"}}>
          <div id="show_box_name">
            <div style={{color:"white"}}>
              <h2 style={{marginLeft:"15px"}}>Songs</h2>
            </div>
          </div>
          <div className="container-fluid">
            <ShowBlocks list={songs}/>
          </div>
        </div>}
        {songs.length == 0 && Object.keys(artist).length == 0 ? <div style={{margin:"25% 0px 25% 0px", textAlign:"center", color:"white"}}>
          <p>No Data Found</p>
        </div> : <div></div>}
      </div>
      <FooterPage />
    </Fragment>
  );
}

const mapStateToProps = state =>({
  isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, {logout})(Search);
