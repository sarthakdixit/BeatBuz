import React, {useEffect, useState} from 'react';
import ShowBlocks from './ShowBlocks';
import axios from "axios";

function EnergyBooster() {

  const [energyBooster, setEnergyBooster] = useState([]);

  async function fetchEnergyBooster(){
    return await axios.get(process.env.REACT_APP_SONG_API_URL+"/api/songs_list/energy_booster/").then(res => {
      return res.data
    }).catch(err => {
      throw new Error(err);
    });
  }

  useEffect(() =>{
    let isSubscribed = true;

    fetchEnergyBooster().then(res => {
      if(isSubscribed){
        let arr = [];
        for(let i=0;i<res.length;i++){
          arr.push({song_id: res[i].id, song_id_poster: res[i].poster, song_id_name: res[i].name});
        }
        setEnergyBooster(arr);
      }else{
        return null;
      }
    }).catch(err => (isSubscribed ? console.log(err) : null));

    return () => (isSubscribed = false);
  }, []);

  return (
    <div id="show_box" style={{marginTop:"20px"}}>
          <div id="show_box_name">
            <div style={{color:"white"}}>
              <h2 style={{marginLeft:"15px"}}>Energy Booster</h2>
            </div>
            <div className="show_box_name_child"></div>
          </div>
          <div className="container-fluid">
            <ShowBlocks list={energyBooster}/>
          </div>
        </div>
  )
}

export default EnergyBooster
