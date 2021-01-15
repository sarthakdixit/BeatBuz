import React from 'react';
import {Link} from 'react-router-dom';

function AllMoods() {
  return (
    <div id="show_box" style={{marginTop:"100px"}}>
          <div id="show_box_name">
            <div style={{color:"white"}}>
              <h2 style={{marginLeft:"15px"}}>Moods</h2>
            </div>
          </div>
          <div className="container-fluid">
            <div className="container inline-b">
              <li className="item inline-b-item" id="show_block_list" style={{marginTop:"5px"}}>
                <Link to="/mood_genre/Party">
                <button className="btn btn-dark" id="mood_genre_btn">Party</button></Link>
              </li>
              <li className="item inline-b-item" id="show_block_list" style={{marginTop:"5px"}}>
                <Link to="/mood_genre/Chill">
                <button className="btn btn-dark" id="mood_genre_btn">Chill</button>
                </Link>
              </li>
              <li className="item inline-b-item" id="show_block_list" style={{marginTop:"5px"}}>
                <Link to="/mood_genre/Energy Boosters">
                <button className="btn btn-dark" id="mood_genre_btn">Energy Boosters</button>
                </Link>
              </li>
              <li className="item inline-b-item" id="show_block_list" style={{marginTop:"5px"}}>
                <Link to="/mood_genre/Feel Good">
                <button className="btn btn-dark" id="mood_genre_btn">Feel Good</button>
                </Link>
              </li>
              <li className="item inline-b-item" id="show_block_list" style={{marginTop:"5px"}}>
                <Link to="/mood_genre/Focus">
                <button className="btn btn-dark" id="mood_genre_btn">Focus</button>
                </Link>
              </li>
              <li className="item inline-b-item" id="show_block_list" style={{marginTop:"5px"}}>
                <Link to="/mood_genre/Romance">
                <button className="btn btn-dark" id="mood_genre_btn">Romance</button>
                </Link>
              </li>
              <li className="item inline-b-item" id="show_block_list" style={{marginTop:"5px"}}>
                <Link to="/mood_genre/Sleep">
                <button className="btn btn-dark" id="mood_genre_btn">Sleep</button>
                </Link>
              </li>
              <li className="item inline-b-item" id="show_block_list" style={{marginTop:"5px"}}>
                <Link to="/mood_genre/Workout">
                <button className="btn btn-dark" id="mood_genre_btn">Workout</button>
                </Link>
              </li>
              <li className="item inline-b-item" id="show_block_list" style={{marginTop:"5px"}}>
                <Link to="/mood_genre/Sad">
                <button className="btn btn-dark" id="mood_genre_btn">Sad</button>
                </Link>
              </li>
            </div>
          </div>
        </div>
  )
}

export default AllMoods
