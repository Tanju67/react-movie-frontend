import React from "react";
import classes from "./Register.module.css";
import { useForm } from "../../shared/hooks/form-hook";
import Input from "../../shared/formElemets/Input";
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../../utils/validators";
import Button from "../../shared/UIElements/Button/Button";
import { Link } from "react-router-dom";

function Register() {
  const [inputHandler, formState] = useForm({
    name: { value: "", isValid: false },
    email: { value: "", isValid: false },
    password: { value: "", isValid: false },
    isValid: false,
  });

  const submithandler = async (e) => {
    e.preventDefault();
  };

  return (
    <div className={classes.registerPage}>
      <div className={classes.registerBox}>
        <h2>Register</h2>

        <form onSubmit={submithandler} className={classes.registerForm}>
          <Input
            id="name"
            element="input"
            type="text"
            label="Name"
            placeholder="Name"
            errorMsg="Please enter a name!"
            onInput={inputHandler}
            validators={[VALIDATOR_REQUIRE()]}
          />
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
          Do you have already an account?<Link to={"/login"}>Login</Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
