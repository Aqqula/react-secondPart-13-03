import React, { Component } from "react";
import cx from "classnames";
import styles from "./SignInForm.module.css";
const initialState = {
  email: "",
  password: "",
  emailValid: true,
  passwordValid: true,
};

class SignInForm extends Component {
  constructor(props) {
    super(props);
    this.state = { ...initialState };
  }
  handleSubmit = (event) => {
    event.preventDefault();
    const { target } = event;
    console.log(target.email.value);
    console.log(target.password.value);
    this.setState({ ...initialState });
  };

  handleInput = ({ target: { name, value } }) =>
    this.setState({ [name]: value, [name + "Valid"]: !value.includes(" ") });

  render() {
    const { email, password, emailValid, passwordValid } = this.state;
    const emailClassName = cx(styles.input, { [styles.invalid]: !emailValid });
    const passwordClassName = cx(styles.input, {
      [styles.invalid]: !passwordValid,
    });
    return (
      <form className={styles.container} onSubmit={this.handleSubmit}>
        <input
          className={emailClassName}
          type="email"
          placeholder="email"
          name="email"
          value={email}
          onChange={this.handleInput}
        />
        <input
          className={passwordClassName}
          type="password"
          placeholder="password"
          name="password"
          value={password}
          onChange={this.handleInput}
        />
        <input className={styles.input} type="submit" value="send" />
      </form>
    );
  }
}

export default SignInForm;
