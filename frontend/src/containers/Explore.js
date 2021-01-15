import React, { Fragment, useEffect, useState } from "react";
import Navbar from '../components/Navabar'
import '../style/Operations.css';
import FooterPage from '../components/FooterPage';
import EnergyBooster from '../components/EnergyBooster';
import AllMoods from "../components/AllMoods";
import AllGenres from "../components/AllGenres";

function Explore() {

  return(
    <Fragment>
      <Navbar/>
      <div id="container">
      <EnergyBooster />
        <AllMoods />
        <AllGenres />
      </div>
      <FooterPage />
    </Fragment>
  );
}

export default Explore;
