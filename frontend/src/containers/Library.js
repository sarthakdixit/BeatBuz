import React, { Fragment, useEffect, useState } from "react";
import Navbar from '../components/Navabar';
import '../style/Operations.css';
import FooterPage from '../components/FooterPage';
import AllHistory from "../components/AllHistory";

function Library() {

  const email = localStorage.getItem("e#729@");

  return(
    <Fragment>
      <Navbar/>
      <div id="container">
        <AllHistory email={email} />
        <FooterPage />
      </div>
    </Fragment>
  );
}

export default Library;
