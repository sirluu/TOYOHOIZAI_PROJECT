import React, { useState } from "react";
// import { connect } from "react-redux";
import { Redirect, Switch } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { loginAPICreator, logoutCreator } from "../redux/actions/auth";

import classes from "./login.module.css";

const Login = (props) => {
  const [formData, updateFormData] = useState({});
  const { tokenStatus, isLoginPending, statusLogin } = useSelector(
    (state) => state.authAPI
  );
  const [emptyForm, setEmptyForm] = useState(false)
  const dispatch = useDispatch();

  const handleChange = (e) => {
    updateFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setEmptyForm(false)
    if(formData.email&&formData.password){
      dispatch(logoutCreator())
      dispatch(loginAPICreator(formData));
    }else{
      dispatch(logoutCreator())
      setEmptyForm(true)
    }
  };
  return (
    <>
      {statusLogin === 200 && tokenStatus.token ? (
        <Switch>
          <Redirect from='/login' to='/' exact />
        </Switch>
      ) : (
        <div className={classes.container}>
          <div className={classes.boxlogin}>
            <form
              className={classes.contentlogin}
              onSubmit={(e) => {
                handleSubmit(e);
              }}>
              <h1
                style={{
                  color: "#FFFFFF",
                  fontSize: "40px",
                  fontWeight: "900",
                  marginBottom: "30px",
                }}>
                L O G I N
              </h1>
              <div className={classes.line}>
                <div className={classes.label}>Email</div>
                <input
                  className={classes.input}
                  type='email'
                  name='email'
                  onChange={(e) => {
                    return handleChange(e);
                  }}
                />
              </div>
              <div className={classes.line}>
                <div className={classes.label}>Password</div>
                <input
                  className={classes.input}
                  type='password'
                  name='password'
                  onChange={(e) => {
                    return handleChange(e);
                  }}
                />
              </div>

              <div className={classes.linebtn}>
                <button
                  style={{ outline: "none" }}
                  className={classes.button}
                  type='submit'>
                  {isLoginPending ? (
                    <i className='fa fa-spinner fa-spin fa-2x fa-fw'></i>
                  ) : (
                    "Login"
                  )}
                </button>
              </div>
              {emptyForm?(
                <p style={{ color: "#f56438", backgroundColor: "#FFFFFF" }}>
                  Please, complete your login data
                </p>
              ):null}
              {statusLogin === 500 ? (
                <p style={{ color: "#f56438", backgroundColor: "#FFFFFF" }}>
                  Email or password is wrong
                </p>
              ) : (
                <p style={{ color: "#FFFFFF", textAlign:"center" }}>
                  {props.history.action==="REPLACE"?"Please, login first as admin or cashier":"Welcome back in..."}
                </p>
              )}
              <h1
                style={{
                  color: "#FFFFFF",
                  fontSize: "30px",
                  fontWeight: "500",
                  marginBottom: "10px",
                }}>
                TOYOHOIZAI_PROJECT
              </h1>
            </form>
          </div>
        </div>
      )}
    </>
  );
  // }
};
export default Login;
// const mapStateToProps = (state) => {
//   const { authAPI } = state;
//   return { authAPI };
// };
// const mapDispatchToProps = (dispacth) => {
//   return {
//     login: (body) => {
//       dispacth(loginAPICreator(body));
//     },
//     validate: () => {
//       dispacth(validateTokenAPICreator());
//     },
//   };
// };
// export default connect(mapStateToProps, mapDispatchToProps)(Login);
