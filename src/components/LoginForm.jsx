import { useState } from "react";
import "./LoginForm.css";

const LoginForm = (props) => {
  const [userCredentials, setUserCredentials] = useState({
    username: "",
    password: "",
  });

  const usernameHandler = (event) => {
    setUserCredentials({
      ...userCredentials,
      username: event.target.value,
    });
  };

  const passwordHandler = (event) => {
    setUserCredentials({
      ...userCredentials,
      password: event.target.value,
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.loginHandler(userCredentials);
  };

  return (
    <>
      <form onSubmit={submitHandler} className="login-form">
        <p className="text-center mb-4">
          <img src="logowbg.png" alt="" className="img-fluid w-50" />
        </p>
        <p className="text-center">
          <input
            type="text"
            name="username"
            onChange={usernameHandler}
            className="form-control mb-2 text-center"
            placeholder="Usuario"
          />
        </p>
        <input
          name="password"
          type="password"
          onChange={passwordHandler}
          className="form-control mb-4 text-center"
          placeholder="Password"
        />

        <p className="text-center">
          <button
            disabled={
              userCredentials.username.length > 0 &&
              userCredentials.password.length > 0
                ? false
                : true
            }
            type="submit"
            className="btn btn-login"
          >
            Entrar
          </button>
        </p>
        <p className="text-center mt-5 text-small">made by @zaracero</p>
      </form>
    </>
  );
};

export default LoginForm;
