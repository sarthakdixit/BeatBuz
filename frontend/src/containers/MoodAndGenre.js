import React, { Fragment, useEffect, useState } from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {logout} from '../actions/auth'
import Navbar from '../components/Navabar';
import '../style/Operations.css';
import FooterPage from '../components/FooterPage';
import axios from "axios";
import ShowBlocks from '../components/ShowBlocks';

function MoodAndGenre({logout, isAuthenticated, match}) {

  const [moodAndGenreData, setGetMoodAndGenreData] = useState([]);
  const [heading, setHeading] = useState("");
  const url = "http://localhost:7000";

  async function fetchMoodAndGenre(id){
    return await axios.get(url+"/api/songs_list/mood_genre/"+id+"/").then(res => {
      return res.data
    }).catch(err => {
      throw new Error(err);
    });
  }

  useEffect(() =>{
    let isSubscribed = true;
    let id = match.params.mg;
    setHeading(id);

    fetchMoodAndGenre(id).then(res => {
      if(isSubscribed){
        let arr = [];
        for(let i=0;i<res.length;i++){
          arr.push({song_id: res[i].id, song_id_poster: res[i].poster, song_id_name: res[i].name});
        }
        setGetMoodAndGenreData(arr);
      }else{
        return null;
      }
    }).catch(err => (isSubscribed ? console.log(err) : null));

    return () => (isSubscribed = false);
  }, []);

  if(!isAuthenticated){
    return <Redirect to="/" />
  }

  return (
    <Fragment>
      <Navbar logouthandler={logout} />
      <div id="container">
      <div id="show_box" style={{marginTop:"20px"}}>
          <div id="show_box_name">
            <div style={{color:"white"}}>
              <h2 style={{marginLeft:"15px"}}>{heading}</h2>
            </div>
          </div>
          {moodAndGenreData.length == 0 ? <div>No Data</div> : <div className="container-fluid">
            <ShowBlocks list={moodAndGenreData}/>
          </div>}
        </div>
      </div>
      <FooterPage />
    </Fragment>
  )
}

const mapStateToProps = state =>({
  isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, {logout})(MoodAndGenre);
