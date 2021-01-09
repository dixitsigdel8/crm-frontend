import React, { useState } from "react";
import { Jumbotron } from "react-bootstrap";
import { Login } from "../../components/login/Login";
import { ResetPassword } from "../../components/password-reset/PasswordRest";
import "./entry.style.css";
export const Entry = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [frmLoad, setFrmLoad] = useState("login");

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      default:
        break;
    }
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      return alert("Fill up form first");
    }
    //Todo call api to submit the form
    console.log(email, password);
  };
  const handleOnResetSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      return alert("Fill up form first");
    }
    //Todo call api to submit the form
    console.log(email);
  };
  const formSwitcher = (frmType) => {
    setFrmLoad(frmType);
  };

  return (
    <div className="entry-page bg-info ">
      <Jumbotron className="form-box">
        {frmLoad === "login" && (
          <Login
            handleChange={handleChange}
            email={email}
            password={password}
            handleOnSubmit={handleOnSubmit}
            formSwitcher={formSwitcher}
          />
        )}

        {frmLoad === "reset" && (
          <ResetPassword
            handleChange={handleChange}
            email={email}
            handleOnResetSubmit={handleOnResetSubmit}
            formSwitcher={formSwitcher}
          />
        )}
      </Jumbotron>
    </div>
  );
};
