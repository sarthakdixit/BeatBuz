import React, { useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import "../style/Login.css";
import {login, checkAuthenticated, load_user} from '../actions/auth'

const Login = ({login, checkAuthenticated, load_user, isAuthenticated}) => {
  useEffect(() => {
    checkAuthenticated();
    load_user();
  }, [])

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    // login
    login(email, password);
  };

  if(isAuthenticated){
    return <Redirect to='/home' />
  }

  return (
    <section id="cover" className="min-vh-100">
      <div id="cover-caption">
        <div className="container">
          <div className="row text-white">
            <div className="col-xl-5 col-lg-6 col-md-8 col-sm-10 mx-auto text-center form p-4">
              <h1 className="display-4 py-2 text-truncate">BeatBuz</h1>
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
                  <div className="form-group">
                    <input
                      type="password"
                      className="form-control"
                      name="password"
                      placeholder="Password"
                      minLength="6"
                      value={password}
                      onChange={(e) => onChange(e)}
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn btn-dark btn-lg btn-block"
                    name="add_record"
                  >
                    Signin
                  </button>
                  <div style={{ marginTop: "10px" }}>
                    <button
                      type="button"
                      className="btn btn-dark"
                      style={{ marginRight: "5px" }}
                    >
                      <Link to="/signup" style={{textDecoration: "none", color:"white"}}>Create Your Account</Link>
                    </button>
                    <button
                      type="button"
                      className="btn btn-dark"
                      style={{ marginLeft: "5px" }}
                    >
                      <Link to="/reset-password" style={{textDecoration: "none", color:"white"}}>Forget Your Password?</Link>
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
};

const mapStateToProps = state =>({
  isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, {login, checkAuthenticated, load_user})(Login);
