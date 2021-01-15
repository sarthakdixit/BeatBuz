import React, { Fragment, useEffect, useState, useRef } from "react";
import {Link, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {logout} from '../actions/auth';
import Navbar from '../components/Navabar'
import '../style/Operations.css'
import axios from "axios";
import FooterPage from '../components/FooterPage';
import ArtistProfile from '../components/ArtistProfile';
import SongsTable from '../components/SongsTable';

function SpecificArtist({logout, isAuthenticated, match}) {

  const [artistData, setArtistData] = useState({});
  const [artistSongList, setArtistSongList] = useState([]);
  const url = "http://localhost:7000";

  async function fetchArtistDetails(name){
    return await axios.get(url+"/api/specific_artist/"+name+"/").then(res => {
      return res.data
    }).catch(err => {
      throw new Error(err);
    });
  }

  async function fetchArtistSongs(name){
    return await axios.get(url+"/api/artist_songs/"+name+"/").then(res => {
      return res.data
    }).catch(err => {
      throw new Error(err);
    });
  }

  useEffect(() =>{
    let isSubscribed = true;
    let name = match.params.id ;

    fetchArtistDetails(name).then(res => (isSubscribed ? setArtistData(res) : null)).catch(err => (isSubscribed ? alert(err) : null));

    fetchArtistSongs(name).then(res => {
      if(isSubscribed){
        let arr = [];
        for(let i=0;i<res.length;i++){
          arr.push({id: res[i].id, name: res[i].name, album: res[i].album, mood: res[i].mood, genre: res[i].genere});
        }
        setArtistSongList(arr);
      }
    }).catch(err => (isSubscribed ? alert(err) : null));

    return () => (isSubscribed = false);
  }, [])

  if(!isAuthenticated){
    return <Redirect to="/" />
  }

  return (
    <Fragment>
      <Navbar logouthandler={logout} />
      <div id="container">
        {Object.keys(artistData).length == 0 ? <div></div> : <ArtistProfile name={artistData.name}  image={artistData.image} />}
        {artistSongList.length == 0 ? <div></div> : <SongsTable list={artistSongList} />}
      </div>
      <FooterPage />
    </Fragment>
  )
}

const mapStateToProps = state =>({
  isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, {logout})(SpecificArtist);
