import React from 'react';
import {Link} from 'react-router-dom';

function AllGenres() {
  return (
    <div id="show_box" style={{marginTop:"100px"}}>
          <div id="show_box_name">
            <div style={{color:"white"}}>
              <h2 style={{marginLeft:"15px"}}>Genres</h2>
            </div>
          </div>
          <div className="container-fluid">
            <div className="container inline-b">
              <li className="item inline-b-item" id="show_block_list" style={{marginTop:"5px"}}>
                <Link to="/mood_genre/African">
                <button className="btn btn-dark" id="mood_genre_btn">African</button></Link>
              </li>
              <li className="item inline-b-item" id="show_block_list" style={{marginTop:"5px"}}>
                <Link to="/mood_genre/Arabic">
                <button className="btn btn-dark" id="mood_genre_btn">Arabic</button>
                </Link>
              </li>
              <li className="item inline-b-item" id="show_block_list" style={{marginTop:"5px"}}>
                <Link to="/mood_genre/Asian">
                <button className="btn btn-dark" id="mood_genre_btn">Asian</button>
                </Link>
              </li>
              <li className="item inline-b-item" id="show_block_list" style={{marginTop:"5px"}}>
                <Link to="/mood_genre/Blues">
                <button className="btn btn-dark" id="mood_genre_btn">Blues</button>
                </Link>
              </li>
              <li className="item inline-b-item" id="show_block_list" style={{marginTop:"5px"}}>
                <Link to="/mood_genre/Bollywood And Indian">
                <button className="btn btn-dark" id="mood_genre_btn">Bollywood And Indian</button>
                </Link>
              </li>
              <li className="item inline-b-item" id="show_block_list" style={{marginTop:"5px"}}>
                <Link to="/mood_genre/Classical">
                <button className="btn btn-dark" id="mood_genre_btn">Classical</button>
                </Link>
              </li>
              <li className="item inline-b-item" id="show_block_list" style={{marginTop:"5px"}}>
                <Link to="/mood_genre/Country And Americans">
                <button className="btn btn-dark" id="mood_genre_btn">Country And Americans</button>
                </Link>
              </li>
              <li className="item inline-b-item" id="show_block_list" style={{marginTop:"5px"}}>
                <Link to="/mood_genre/Dance And Electronics">
                <button className="btn btn-dark" id="mood_genre_btn">Dance And Electronics</button>
                </Link>
              </li>
              <li className="item inline-b-item" id="show_block_list" style={{marginTop:"5px"}}>
                <Link to="/mood_genre/Decades">
                <button className="btn btn-dark" id="mood_genre_btn">Decades</button>
                </Link>
              </li>
              <li className="item inline-b-item" id="show_block_list" style={{marginTop:"5px"}}>
                <Link to="/mood_genre/Folk And Tradition">
                <button className="btn btn-dark" id="mood_genre_btn">Folk And Tradition</button>
                </Link>
              </li>
              <li className="item inline-b-item" id="show_block_list" style={{marginTop:"5px"}}>
                <Link to="/mood_genre/Hip Hop">
                <button className="btn btn-dark" id="mood_genre_btn">Hip Hop</button>
                </Link>
              </li>
              <li className="item inline-b-item" id="show_block_list" style={{marginTop:"5px"}}>
                <Link to="/mood_genre/Indie And Alternative">
                <button className="btn btn-dark" id="mood_genre_btn">Indie And Alternative</button>
                </Link>
              </li>
              <li className="item inline-b-item" id="show_block_list" style={{marginTop:"5px"}}>
                <Link to="/mood_genre/Jazz">
                <button className="btn btn-dark" id="mood_genre_btn">Jazz</button>
                </Link>
              </li>
              <li className="item inline-b-item" id="show_block_list" style={{marginTop:"5px"}}>
                <Link to="/mood_genre/Latin">
                <button className="btn btn-dark" id="mood_genre_btn">Latin</button>
                </Link>
              </li>
              <li className="item inline-b-item" id="show_block_list" style={{marginTop:"5px"}}>
                <Link to="/mood_genre/Metal">
                <button className="btn btn-dark" id="mood_genre_btn">Metal</button>
                </Link>
              </li>
              <li className="item inline-b-item"  id="show_block_list" style={{marginTop:"5px"}}>
                <Link to="/mood_genre/Pop">
                <button className="btn btn-dark" id="mood_genre_btn">Pop</button>
                </Link>
              </li>
              <li className="item inline-b-item" id="show_block_list" style={{marginTop:"5px"}}>
                <Link to="/mood_genre/Rock">
                <button className="btn btn-dark" id="mood_genre_btn">Rock</button>
                </Link>
              </li>
              <li className="item inline-b-item" id="show_block_list" style={{marginTop:"5px"}}>
                <Link to="/mood_genre/Seasonal">
                <button className="btn btn-dark" id="mood_genre_btn">Seasonal</button>
                </Link>
              </li>
              <li className="item inline-b-item" id="show_block_list" style={{marginTop:"5px"}}>
                <Link to="/mood_genre/Soundtracks And Musicals">
                <button className="btn btn-dark" id="mood_genre_btn">Soundtracks And Musicals</button>
                </Link>
              </li>
            </div>
          </div>
        </div>
  )
}

export default AllGenres
