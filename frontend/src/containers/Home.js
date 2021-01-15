import React, { Fragment} from "react";
import Navbar from '../components/Navabar'
import '../style/Operations.css'
import FooterPage from '../components/FooterPage';
import History from '../components/History';
import Recommended from "../components/Recommended";
import NewRelease from "../components/NewRelease";
import PoplularSongs from "../components/PoplularSongs";

const Home = () => {

  const email = localStorage.getItem("e#729@");

  return(
    <Fragment>
      <Navbar/>
      <div id="container">
        <History email={email} />
        <Recommended email={email} />
        <NewRelease />
        <PoplularSongs />
      </div>
      <FooterPage />
    </Fragment>
  );
}

export default Home;
