import React, { useState, useEffect } from 'react';
import '../style/Operations.css';
import axios from "axios";
import ShowBlocks from '../components/ShowBlocks';

function SimilarSongs(props) {

  const [similar, setSimilar] = useState([]);
  const url = "http://localhost:7000";

  async function fetchNewRelease(id, artist, genre, mood, lang, album){
    return await axios.get(url+"/api/similar_song/"+id+"/"+artist+"/"+genre+"/"+mood+"/"+lang+"/"+album+"/").then(res => {
      return res.data
    }).catch(err => {
      throw new Error(err);
    });
  }

  useEffect(() => {
    let isSubscribed = true;

    fetchNewRelease(props.id, props.artist, props.genre, props.mood, props.lang, props.album).then(res => {
      if(isSubscribed){
        let arr = [];
        for(let i=0;i<res.length;i++){
          arr.push({song_id: res[i].id, song_id_poster: res[i].poster, song_id_name: res[i].name});
        }
        setSimilar(arr);
      }
    }).catch(err => (isSubscribed ? alert(err) : null));

    return () => (isSubscribed = false);
  }, [])

  return (
    <div id="show_box" style={{marginTop:"100px"}}>
          <div id="show_box_name">
            <div style={{color:"white"}}>
              <h2 style={{marginLeft:"15px"}}>Similar Songs</h2>
            </div>
            <div className="show_box_name_child"></div>
          </div>
          <div className="container-fluid">
            <ShowBlocks list={similar}/>
          </div>
        </div>
  )
}

export default SimilarSongs
