import { Fragment, useContext, useRef, useState } from "react";
import Input from "../UI/Input";
import Modal from "../UI/Modal";
import classes from "./Login.module.css";
import firebase from "firebase/app";
import 'firebase/auth';
import userContext from "../../store/user-context";
import Loader from "../UI/Loader";
import UserModel from "../../model/UserModel";

function isEmail(val) {
  let regEmail = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/;
  return regEmail.test(val);
}
function passwordValid(password) {
  return password.trim().length > 5;
}
function confirmPasswordValid(password, confirmPassword) {
  return password.trim() === confirmPassword.trim();
}
function notEmpty(val) {
  return val.trim().length > 0;
}
const Login = (props) => {
  const userCtx = useContext(userContext);
  const [isLogin, setIsLogin] = useState(true);
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [errorText, setErrorText] = useState("");
  const [emailInvalid, setEmailInvalid] = useState(false);
  const [passwordInvalid, setPasswordInvalid] = useState(false);
  const [confirmPasswordInvalid, setConfirmPasswordInvalid] = useState(false);
  const [firstNameInvalid, setFirstNameInvalid] = useState(false);
  const [lastNameInvalid, setLastNameInvalid] = useState(false);
  const passwordRef = useRef();
  const emailRef = useRef();
  const confimPasswordRef = useRef();
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const switchAuthModeHandler = () => {
    resetForm();
    setIsLogin((prevState) => !prevState);
  };

  const resetForm = () => {
    setErrorText(null);
    setEmailInvalid(false);
    setPasswordInvalid(false);
    setConfirmPasswordInvalid(false);
    setFirstNameInvalid(false);
    setLastNameInvalid(false);
  };
  const confirmHandler = (event) => {
    event.preventDefault();
    resetForm();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    if (isLogin) {
      const loginFormValid = isLoginFormValid(email, password);
      if (!loginFormValid) {
        return;
      }
      loginHandler(email, password);
      return;
    }
    const confirmPassword = confimPasswordRef.current.value;
    const firstName = firstNameRef.current.value;
    const lastName = lastNameRef.current.value;
    const userObject = {
      email,
      password,
      confirmPassword,
      firstName,
      lastName,
    };
    const registerFormValid = isRegisterFormValid(userObject);
    if (!registerFormValid) {
      return;
    }
    registerHandler(userObject);
    return;
  };
  const isLoginFormValid = (email, password) => {
    const emailIsValid = isEmail(email);
    setEmailInvalid(!emailIsValid);
    if (!emailIsValid) {
      setErrorText("Email Invalid");
      return false;
    }
    const passwordIsValid = passwordValid(password);
    setPasswordInvalid(!passwordIsValid);
    if (!passwordIsValid) {
      setErrorText("Password Must be at least 6 characters");
      return false;
    }
    return true;
  };
  const isRegisterFormValid = ({
    email,
    password,
    confirmPassword,
    firstName,
    lastName,
  }) => {
    const emailIsValid = isEmail(email);
    const passwordIsValid = passwordValid(password);
    const confirmPasswordIsValid = confirmPasswordValid(
      password,
      confirmPassword
    );
    const firstNameIsValid = notEmpty(firstName);
    const lastNameIsValid = notEmpty(lastName);
    setEmailInvalid(!emailIsValid);
    if (!emailIsValid) {
      setErrorText("Email Invalid");
      return false;
    }
    setPasswordInvalid(!passwordIsValid);
    if (!passwordIsValid) {
      setErrorText("Password Must be at least 6 characters");
      return false;
    }
    setConfirmPasswordInvalid(!confirmPasswordIsValid);
    if (!confirmPasswordIsValid) {
      setErrorText("Confirm Password doesn't match");
      return false;
    }
    setFirstNameInvalid(!firstNameIsValid);
    if (!firstNameIsValid) {
      setErrorText("First Name Can't Be Empty");
      return false;
    }
    setLastNameInvalid(!lastNameIsValid);
    if (!lastNameIsValid) {
      setErrorText("Last Name Can't Be Empty");
      return false;
    }
    return true;
  };
  const loginHandler = async (email, password) => {
    setIsLoggingIn(true);
    const loginResponse = await firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((err) => {
        setIsLoggingIn(false);
        setEmailInvalid(true);
        setPasswordInvalid(true);
        setErrorText("Email or Password are incorrect");
      });
    if (loginResponse) {
      setIsLoggingIn(false);
      let user = loginResponse.user;
      const tokenData = await user.getIdTokenResult();
      const expirationTime = new Date(tokenData.expirationTime);
      let userData = await UserModel.getUserfromRealTime(user.uid);
      userData = await userData.json();
      console.log(userData)
      userCtx.setUser({
        name: user.displayName,
        id: user.uid,
        email: user.email,
        street: userData.street,
        city: userData.city,
        postal: userData.postal,
        token: tokenData.token,
      }, expirationTime);
      props.onClose()
    }
  };

  const registerHandler = async ({ email, password, firstName, lastName }) => {
    setIsLoggingIn(true);
    const registerResponse = await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password).catch((err) => {
        setIsLoggingIn(false);;
        setEmailInvalid(true);
        setErrorText(err.message);
      });;
    if (registerResponse) {
      setIsLoggingIn(false);
      let user = registerResponse.user;
      const token = await user.getIdToken();
      await user.updateProfile({
        displayName: `${firstName} ${lastName}`,
      });
      user = firebase.auth().currentUser;
      console.log("qgwasv")
      await UserModel.addUserToRealTime(user.uid, {first_name: firstName, last_name: lastName, email})
      const tokenData = await user.getIdTokenResult();
      const expirationTime = new Date(tokenData.expirationTime);
      userCtx.setUser({
        name: user.displayName,
        id: user.uid,
        email: user.email,
        token: token,
      }, expirationTime);
      props.onClose()
    }
  };
  
  const registerInputs = (
    <Fragment>
      <div className={classes.control}>
        <Input
          label="Confirm Password"
          invalid={confirmPasswordInvalid}
          ref={confimPasswordRef}
          input={{
            id: "confirm-password",
            type: "password",
            required: true,
            minLength: 6,
          }}
        />
      </div>
      <div className={classes.control}>
        <Input
          label="First Name"
          invalid={firstNameInvalid}
          ref={firstNameRef}
          input={{ id: "first-name", type: "text", required: true }}
        />
      </div>
      <div className={classes.control}>
        <Input
          label="Last Name"
          invalid={lastNameInvalid}
          ref={lastNameRef}
          input={{ id: "last-name", type: "text", required: true }}
        />
      </div>
    </Fragment>
  );
  const buttonClasses = classes['login-button'] + ' ' + (isLoggingIn ? classes.disabled : '' );
  return (
    <Modal onClose={props.onClose} className={classes.auth}>
      <h1 className={classes.title}>{isLogin ? "Login" : "Sign Up"}</h1>
      <form className={classes.form} onSubmit={confirmHandler}>
        <div className={classes.control}>
          <Input
            label="Email"
            ref={emailRef}
            invalid={emailInvalid}
            input={{ id: "email", type: "email", required: true }}
          />
        </div>
        <div className={classes.control}>
          <Input
            label="Password"
            ref={passwordRef}
            invalid={passwordInvalid}
            input={{
              id: "password",
              type: "password",
              required: true,
              minLength: 6,
            }}
          />
        </div>
        {!isLogin && registerInputs}
        {errorText && (
          <div className={classes["error-text"]}>
            <label>{errorText}</label>
          </div>
        )}
        <div className={classes.actions}>
          {!isLoggingIn ? <button className={buttonClasses} >{isLogin ? "Login" : "Register"}</button> : <button disabled className={buttonClasses}><Loader></Loader></button> }
          <button
            type="button"
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? "Create new account" : "Login with existing account"}
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default Login;
