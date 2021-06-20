import { useEffect, useReducer } from "react";

import UserContext from "./user-context";

const defaultUserData = {
  id: null,
  name: null,
  email: null,
  photoUrl: null,
  token: null,
  isLoggedIn: false,
};

let logoutTimer;

const userReducer = (state, action) => {
  if (action.type === "SET_USER") {
    const updatedUser = {};
    updatedUser.id = action.user.id;
    updatedUser.name = action.user.name;
    updatedUser.email = action.user.email;
    updatedUser.photoUrl = action.user.photoUrl;
    updatedUser.token = action.user.token;
    updatedUser.isLoggedIn = true;
    localStorage.setItem("user", JSON.stringify(updatedUser));
    localStorage.setItem("tokenExpirationTime", action.expirationTime);
    return updatedUser;
  }
  if (action.type === "LOGOUT") {
    localStorage.removeItem("user");
    localStorage.removeItem("tokenExpirationTime");
    if (logoutTimer) {
      clearTimeout(logoutTimer);
    }
    return defaultUserData;
  }

  return defaultUserData;
};

const calculateRemainingTime = (expirationTime) => {
  const currentTime = new Date().getTime();
  const adjExpirationTime = new Date(expirationTime).getTime();

  const remainingDuration = adjExpirationTime - currentTime;

  return remainingDuration;
};

const retrieveStoredToken = () => {
  let storedUser = localStorage.getItem("user");
  if (storedUser) {
    storedUser = JSON.parse(storedUser);
  }
  const storedExpirationDate = localStorage.getItem("tokenExpirationTime");

  const remainingTime = calculateRemainingTime(storedExpirationDate);

  if (remainingTime <= 3600) {
    localStorage.removeItem("user");
    localStorage.removeItem("tokenExpirationTime");
    return null;
  }

  return {
    user: storedUser,
    duration: remainingTime,
  };
};

const UserProvider = (props) => {
  const storedUserAndExpToken = retrieveStoredToken();

  let initialUser;
  if (storedUserAndExpToken) {
    initialUser = storedUserAndExpToken.user;
  }

  const isUserLoggedIn = !!initialUser;

  const defaultOfStorageUser = initialUser || defaultUserData;

  const [userState, dispatchUserAction] = useReducer(
    userReducer,
    defaultOfStorageUser
  );

  const setUserHandler = (user, expirationTime) => {
    const remainingTime = calculateRemainingTime(expirationTime);
    dispatchUserAction({ type: "SET_USER", user: user, expirationTime });
    logoutTimer = setTimeout(clearUserHandler, remainingTime);
  };

  const clearUserHandler = () => {
    dispatchUserAction({ type: "LOGOUT" });
  };
  const userContext = {
    id: userState.id,
    name: userState.name,
    email: userState.email,
    photoUrl: userState.photoUrl,
    token: userState.token,
    isLoggedIn: isUserLoggedIn,
    setUser: setUserHandler,
    clearUser: clearUserHandler,
  };

  useEffect(() => {
    if (storedUserAndExpToken) {
      logoutTimer = setTimeout(
        clearUserHandler,
        storedUserAndExpToken.duration
      );
    }
  }, [storedUserAndExpToken]);
  return (
    <UserContext.Provider value={userContext}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserProvider;
