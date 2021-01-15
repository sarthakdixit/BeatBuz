import React, { useState } from 'react'
import {Link, Redirect} from 'react-router-dom';
import {logout} from '../actions/auth';
import {connect} from 'react-redux';

function Navabar({logout, isAuthenticated}) {

  const [search, setSearch] = useState("");

  if(!isAuthenticated){
    return <Redirect to="/" />
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="#">BeatBuz</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/home">Home</Link>
          </li>
          <li className="nav-item">
          <Link className="nav-link" to="/explore">Explore</Link>
          </li>
          <li className="nav-item">
          <Link className="nav-link" to="/library">My Library</Link>
          </li>
          <li className="nav-item">
          <Link className="nav-link" to="/all_artists">Artists</Link>
          </li>
          <li className="nav-item">
            <form className="form-inline">
              <div className="form-group mx-sm-3 mb-2">
                <input type="text" value={search} onChange={e => setSearch(e.target.value)} className="form-control" placeholder="Search Box" />
              </div>
              {search == "" ? <button type="button" className="btn btn-light mb-2">Search</button> : <Link to={"/search/"+search}>
              <button type="button" className="btn btn-light mb-2">Search</button></Link>}
            </form>
          </li>
        </ul>
        <button type="button" className="btn btn-light" onClick={logout}>Logout</button>
      </div>
    </nav>
  )
}

const mapStateToProps = state =>({
  isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, {logout})(Navabar);
