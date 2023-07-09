import React from "react";
import LoginForm from "./../components/LoginForm";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
const Login = () => {
  const navigate = useNavigate();

  const [isValid, setIsValid] = useState(true);

  const loginHandler = (userCredentials) => {
    console.log(userCredentials);
    if (checkCredentials(userCredentials)) {
      navigate("/pos/home");
    } else {
      setIsValid(!isValid);
    }
  };

  function checkCredentials(userCredentials) {
    return true;
  }

  const alert = (
    <div
      className="alert alert-warning alert-dismissible fade show"
      role="alert"
    >
      <strong>Ups! algo salío mal </strong>Revisa tu usuario y/o contraseña
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={() => setIsValid(true)}
      ></button>
    </div>
  );

  return (
    <div>
      {!isValid && alert}
      <LoginForm loginHandler={loginHandler}></LoginForm>
    </div>
  );
};

export default Login;
