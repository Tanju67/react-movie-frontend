import React from "react";
import classes from "./Login.module.css";
import Input from "../../shared/formElemets/Input";
import { useForm } from "../../shared/hooks/form-hook";
import { VALIDATOR_EMAIL, VALIDATOR_MINLENGTH } from "../../utils/validators";
import Button from "../../shared/UIElements/Button/Button";
import { Link } from "react-router-dom";

function Login() {
  const [inputHandler, formState] = useForm({
    email: { value: "", isValid: false },
    password: { value: "", isValid: false },
    isValid: false,
  });

  const submithandler = async (e) => {
    e.preventDefault();
  };

  return (
    <div className={classes.loginPage}>
      <div className={classes.loginBox}>
        <h2>Login</h2>

        <form onSubmit={submithandler} className={classes.loginForm}>
          <Input
            id="email"
            element="input"
            type="email"
            label="Email"
            placeholder="Email"
            errorMsg="Please enter a valid email!"
            onInput={inputHandler}
            validators={[VALIDATOR_EMAIL()]}
          />
          <Input
            id="password"
            element="input"
            type="password"
            label="Password"
            placeholder="Password"
            errorMsg="Please enter a valid password!"
            onInput={inputHandler}
            validators={[VALIDATOR_MINLENGTH(6)]}
          />
          <Button disabled={!formState.isValid} type="submit">
            Login
          </Button>
        </form>
        <p>
          Doesn't have an account yet?<Link to={"/register"}>Register</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
