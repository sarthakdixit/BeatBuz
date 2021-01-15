import React from "react";
import { Link } from "react-router-dom";
import '../style/Operations.css';

const FooterPage = () => {
  return (
    <div style={{width:"100%", color:"white", borderTop:"2px solid white", marginTop:"120px"}}>
      <footer className="page-footer font-small dark pt-4" style={{marginTop:"50px"}}>
  <div className="container-fluid text-center text-md-left">
    <div className="row">
      <div className="col-md-6 mt-md-0 mt-3">
        <h5 className="text-uppercase">BeatBuz</h5>
        <p>We provide you audio, video and lyrics of songs for free.</p>
      </div>
      <hr className="clearfix w-100 d-md-none pb-3" />
      <div className="col-md-3 mb-md-0 mb-3">
        <h5 className="text-uppercase">Links</h5>
        <ul className="list-unstyled">
          <li>
            <Link to="/" style={{textDecoration: "none", color:"white"}}>Home</Link>
          </li>
          <li>
          <Link to="/explore" style={{textDecoration: "none", color:"white"}}>Explore</Link>
          </li>
        </ul>
      </div>
      <div className="col-md-3 mb-md-0 mb-3">
        <h5 className="text-uppercase">Links</h5>

        <ul className="list-unstyled">
          <li>
          <Link to="/library" style={{textDecoration: "none", color:"white"}}>My Library</Link>
          </li>
          <li>
          <Link to="/all_artists" style={{textDecoration: "none", color:"white"}}>Artists</Link>
          </li>
        </ul>

      </div>

    </div>

  </div>
  <div className="footer-copyright text-center py-3">© 2020 Copyright:
    <a href="https://mdbootstrap.com/"> MDBootstrap.com</a>
  </div>

</footer>
    </div>
  );
}

export default FooterPage;