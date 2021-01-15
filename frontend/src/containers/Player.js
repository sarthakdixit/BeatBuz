import React, { Fragment, useEffect, useState, useRef } from "react";
import {Redirect} from 'react-router-dom';
import Navbar from '../components/Navabar'
import '../style/Operations.css'
import axios from "axios";
import FooterPage from '../components/FooterPage';
import SongDetails from '../components/SongDetails';
import ReactAudioPlayer from 'react-audio-player';
import ReactPlayer from 'react-player';
import LyricsFile from '../components/LyricsFile';
import SimilarSongs from '../components/SimilarSongs';

function Player({match}) {

  const [songData, setSongData] = useState({});
  const [player, setPlayer] = useState("");
  const [ID, setID] = useState(match.params.id);
  const [audioType, setAudioType] = useState(<button className="btn btn-primary" onClick={e => changeType(e)} value="audio">Audio</button>);
  const [videoType, setVideoType] = useState(<button className="btn btn-dark" onClick={e => changeType(e)} value="video">Video</button>);
  const email = localStorage.getItem("e#729@");

  const changeType = (e) =>{
    if(e.target.value === "audio"){
      setAudioType(<button className="btn btn-primary" onClick={e => changeType(e)} value="audio">Audio</button>);
      setVideoType(<button className="btn btn-dark" onClick={e => changeType(e)} value="video">Video</button>);
      setPlayer("audio");
    }else if(e.target.value === "video"){
      setAudioType(<button className="btn btn-dark" onClick={e => changeType(e)} value="audio">Audio</button>);
      setVideoType(<button className="btn btn-primary" onClick={e => changeType(e)} value="video">Video</button>);
      setPlayer("video");
    }
  }

  async function fetchSongData(id){
    return await axios.get(process.env.REACT_APP_SONG_API_URL+"/api/specific_song/"+id+"/").then(res => {
      return res.data
    }).catch(err => {
      throw new Error(err);
    });
  }

  async function addHistory(id){
    let config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
    let body = {
      "user":email,
      "song_id":id
    }
    try{
      const res = await axios.post(process.env.REACT_APP_SONG_API_URL+"/api/history_list/", body, config);
    } catch(err){
      console.log(err);
    }
  }

  useEffect(() => {
    let isSubscribed = true;
    let id = match.params.id;
    
    setID(id);
    setPlayer("");
    setSongData({});

    fetchSongData(id).then(res => {
      if(isSubscribed){
        setSongData(res);
        setPlayer("audio");
      }else{
        return null;
      }
    }).catch(err => (isSubscribed ? alert(err) : null));

    addHistory(id);

    return () => (isSubscribed = false);
  }, [match.params.id]);

  return (
    <div>
      <Navbar/>
      <div id="container">
      <SongDetails id={ID} email={email} songData={songData} audioType={audioType} videoType={videoType} />
        <div className="container" style={{marginTop:"30px"}}>
          <div className="row" style={{height:"400px"}}>
            <div className="col">
              {player === "audio" ? <ReactAudioPlayer src={process.env.REACT_APP_SONG_API_URL+songData.audio} controlsList="nodownload" controls /> : player === "video" ? <ReactPlayer url={process.env.REACT_APP_SONG_API_URL+songData.video} config={{file: {attributes:{controlsList:"nodownload"}}}} onContextMenu={e => e.preventDefault()} controls /> : <div></div>}
            </div>
            <div className="col" id="scroll">
              {player === "audio" || player === "video" ? <LyricsFile file={songData.lyrics} /> : <div></div>}
            </div>
          </div>
        </div>
        {player === "audio" || player === "video" ? <SimilarSongs id={songData.id} artist={songData.artist} genre={songData.genere} mood={songData.mood} lang={songData.language} album={songData.album} /> : <div></div>}
      </div>
      <FooterPage />
    </div>
  )
}

export default Player;
