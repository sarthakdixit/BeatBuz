import React, { useState} from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import {verify} from '../actions/auth'

function Activate({verify, match}) {
  const [verified, setVerified] = useState(false);

  const verify_account = () =>{
    const uid = match.params.uid;
    const token = match.params.token;
    verify(uid, token);
    setVerified(true);
  }

  if(verified){
    return <Redirect to="/" />
  }
  return(
    <div className="container">
      <div className="d-flex flex-column justify-content-center align-items-center" style={{marginTop: '10%'}}>
        <h2>Verify your account.</h2>
        <button className="btn btn-success" style={{marginTop: '50px'}} type="button" onClick={verify_account}>
          Verify
        </button>
      </div>
    </div>
  );
}

export default connect(null, {verify})(Activate);
