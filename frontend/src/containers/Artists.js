import React, { useEffect, useState } from "react";
import Navbar from '../components/Navabar';
import FooterPage from '../components/FooterPage';
import '../style/Operations.css'
import AllArtists from "../components/AllArtists";

function Recommended() {

  return(
    <div>
      <Navbar/>
      <div id="container">
      <AllArtists />
      </div>
      <FooterPage />
    </div>
  );
}

export default Recommended;