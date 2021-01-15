import React, {useEffect, useState} from 'react';
import ArtistBlock from './ArtistBlocks';
import axios from "axios";

function AllArtists() {

  const [artistList, setArtistList] = useState([]);

  async function fetchArtistList(){
    return await axios.get(process.env.REACT_APP_SONG_API_URL+"/api/all_artist/").then(res => {
      return res.data
    }).catch(err => {
      throw new Error(err);
    });
  }

  useEffect(() =>{
    let isSubscribed = true;

    fetchArtistList().then(res => {
      if(isSubscribed){
        setArtistList(res);
      }
    }).catch(err => (isSubscribed ? alert(err) : null));

    return () => (isSubscribed = false);
  }, [])

  return (
    <div id="show_box" style={{marginTop:"20px"}}>
          <div id="show_box_name">
            <div style={{color:"white"}}>
              <h2 style={{marginLeft:"15px"}}>Artist</h2>
            </div>
          </div>
          <div className="container-fluid">
            <ArtistBlock list={artistList}/>
          </div>
        </div>
  )
}

export default AllArtists
