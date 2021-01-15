import React, {useEffect, useState} from 'react';
import ShowBlocks from './ShowBlocks';
import axios from "axios";

function History(props) {

  const [history, setHistory] = useState([]);

  async function fetchHistory(){
    return await axios.get(process.env.REACT_APP_SONG_API_URL+"/api/history_list/"+props.email+"/").then(res => {
      return res.data
    }).catch(err => {
      throw new Error(err);
    });
  }

  useEffect(() => {
    let isSubscribed = true;

    fetchHistory().then(res => (isSubscribed ? setHistory(res) : null)).catch(err => (isSubscribed ? alert(err) : null));

    return () => (isSubscribed = false);
  }, [])

  return (
    <>
    {history.length == 0 ? <div></div> : <div id="show_box" style={{marginTop:"20px"}}>
          <div id="show_box_name">
            <div style={{color:"white"}}>
              <h2 style={{marginLeft:"15px"}}>History</h2>
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

export default History
