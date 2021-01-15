import React, { useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import "../style/Login.css";
import {reset_password} from '../actions/auth'

const ResetPassword = ({reset_password}) => {
  const [email, setEmail] = useState("");
  const [request, setRequest] = useState(false);

  const onChange = (e) =>
    setEmail(e.target.value);

  const onSubmit = (e) => {
    e.preventDefault();
    reset_password(email);
    setRequest(true);
  };

  if(request){
    return <Redirect to="/" />
  }

  return(
    <section id="cover" className="min-vh-100">
      <div id="cover-caption">
        <div className="container">
          <div className="row text-white">
            <div className="col-xl-5 col-lg-6 col-md-8 col-sm-10 mx-auto text-center form p-4">
              <h1 className="display-4 py-2 text-truncate">Forget Passwrod?</h1>
              <div className="px-2">
                <form onSubmit={(e) => onSubmit(e)}>
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      placeholder="User Email"
                      aria-describedby="emailHelp"
                      value={email}
                      onChange={(e) => onChange(e)}
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn btn-dark btn-lg btn-block"
                    name="add_record"
                  >
                    Send Reset Password Link
                  </button>
                  <div style={{ marginTop: "10px" }}>
                    <button
                      type="button"
                      className="btn btn-dark"
                      style={{ marginRight: "5px" }}
                    >
                      <Link to="/" style={{textDecoration: "none", color:"white"}}>Back</Link>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default connect(null, {reset_password})(ResetPassword);
