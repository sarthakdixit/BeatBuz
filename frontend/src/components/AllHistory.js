import React, {useEffect, useState} from 'react';
import ShowBlocks from './ShowBlocks';
import axios from "axios";

function AllHistory(props) {

  const [history, setHistory] = useState([]);

  async function fetchAllHistory(){
    return await axios.get(process.env.REACT_APP_SONG_API_URL+"/api/all_history_list/"+props.email+"/").then(res => {
      return res.data
    }).catch(err => {
      throw new Error(err);
    });
  }

  useEffect(() =>{
    let isSubscribed = true;

    fetchAllHistory().then(res => (isSubscribed ? setHistory(res) : null)).catch(err => (isSubscribed ? alert(err) : null));

    return () => (isSubscribed = false);
  }, []);

  return (
    <>
    {history.length == 0 ? <div style={{margin:"25% 0px 25% 0px", textAlign:"center", color:"white"}}>
          <p>No Data Found</p>
        </div> : <div id="show_box">
          <div id="show_box_name">
            <div style={{color:"white"}}>
              <h2 style={{marginLeft:"15px"}}>My Library</h2>
            </div>
            <div className="show_box_name_child"></div>
          </div>
          <div className="container-fluid">
            <ShowBlocks list={history}/>
          </div>
        </div>}
    </>
  )
}

export default AllHistory
