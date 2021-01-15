import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import {reset_password_confirm} from '../actions/auth'

const ResetPasswordConfirm = ({match, reset_password_confirm}) => {
  const [request, setRequest] = useState(false);
  const [formData, setFormData] = useState({
    password: "",
    newpassword: "",
  });

  const { password, newpassword } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if(password === newpassword){
      const uid = match.params.uid ;
      const token = match.params.token;
      reset_password_confirm(uid, token, newpassword);
      setRequest(true);
    }
  };

  if(request){
    return <Redirect to="/" />
  }

  return(
    <div className="container">
      <div className="d-flex flex-column justify-content-center align-items-center" style={{marginTop: '10%'}}>
        <h2>Reset Your Password.</h2>
        <form onSubmit={(e) => onSubmit(e)}>
                <div className="form-group">
                    <input
                      type="password"
                      className="form-control"
                      name="password"
                      placeholder="New Password"
                      minLength="6"
                      value={password}
                      onChange={(e) => onChange(e)}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      className="form-control"
                      name="newpassword"
                      placeholder="Confirm New Password"
                      minLength="6"
                      value={newpassword}
                      onChange={(e) => onChange(e)}
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn btn-dark btn-lg btn-block"
                    name="add_record"
                  >
                    Reset Password
                  </button>
                </form>
      </div>
    </div>
  );
}

export default connect(null, {reset_password_confirm})(ResetPasswordConfirm);
