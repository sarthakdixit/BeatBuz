import React, { useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import "../style/Login.css";
import {signup} from '../actions/auth'

function Signup({signup}) {
  const [accountCreated, setAccountCreated] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    re_password: "",
  });

  const { email, password, re_password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if(password === re_password){
      signup(email, password, re_password);
      setAccountCreated(true);
    }
  };

  if(accountCreated){
    return <Redirect to="/" />
  }

  return (
    <section id="cover" className="min-vh-100">
      <div id="cover-caption">
        <div className="container">
          <div className="row text-white">
            <div className="col-xl-5 col-lg-6 col-md-8 col-sm-10 mx-auto text-center form p-4">
              <h1 className="display-4 py-2 text-truncate">Register</h1>
              <div className="px-2">
                <form onSubmit={(e) => onSubmit(e)}>
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      placeholder="User Email"
                      value={email}
                      onChange={e => onChange(e)}
                      aria-describedby="emailHelp"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      className="form-control"
                      name="password"
                      placeholder="Password"
                      value={password}
                      onChange={e => onChange(e)}
                      minLength="6"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      className="form-control"
                      name="re_password"
                      placeholder="Confirm Password"
                      value={re_password}
                      onChange={e => onChange(e)}
                      minLength="6"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn btn-dark btn-lg btn-block"
                    name="add_record"
                  >
                    Signup
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

export default connect(null, {signup}) (Signup);
