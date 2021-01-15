import React, {useEffect, useState} from 'react';
import ShowBlocks from './ShowBlocks';
import axios from "axios";

function NewRelease() {

  const [newRelease, setNewRelease] = useState([]);

  async function fetchNewRelease(){
    return await axios.get(process.env.REACT_APP_SONG_API_URL+"/api/songs_list/new_release/").then(res => {
      return res.data
    }).catch(err => {
      throw new Error(err);
    });
  }

  useEffect(() =>{
    let isSubscribed = true;

    fetchNewRelease().then(res => {
      if(isSubscribed){
        let arr = [];
        for(let i=0;i<res.length;i++){
          arr.push({song_id: res[i].id, song_id_poster: res[i].poster, song_id_name: res[i].name});
        }
        setNewRelease(arr);
      }
    }).catch(err => (isSubscribed ? alert(err) : null));

    return () => (isSubscribed = false);
  }, []);

  return (
    <div id="show_box" style={{marginTop:"100px"}}>
          <div id="show_box_name">
            <div style={{color:"white"}}>
              <h2 style={{marginLeft:"15px"}}>New Release</h2>
            </div>
            <div className="show_box_name_child"></div>
          </div>
          <div className="container-fluid">
            <ShowBlocks list={newRelease}/>
          </div>
        </div>
  )
}

export default NewRelease
