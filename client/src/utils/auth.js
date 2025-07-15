import { redirect } from "react-router";

const getTokenDuration = () => {
  /*
    This function calculates how much time is left before a stored JWT token expires.
    It retrieves the token from the browser’s local storage, decodes its payload to
    extract the expiration timestamp (exp), and converts it into a readable date.
    Then, it compares the expiration time with the current time and returns the
    remaining duration in milliseconds. If the result is negative, it means the
    token has already expired.
  */
  const token = localStorage.getItem("token");

  if (!token) {
    return 0;
  }

  const expiration = new Date(JSON.parse(atob(token.split(".")[1])).exp * 1000);

  const now = new Date();
  return expiration - now.getTime();
};

const getAuthToken = () => {
  const token = localStorage.getItem("token");

  if (!token) {
    return;
  }

  if (getTokenDuration() < 0) {
    return "EXPIRED";
  }

  // Expiration log
  // const durationInMs = getTokenDuration();
  // const durationInDays = Math.floor(durationInMs / (1000 * 60 * 60 * 24));
  // console.log(`Your authentication will expire in ${durationInDays} day(s).`);

  return token;
};

const tokenLoader = () => {
  return getAuthToken();
};

const checkAuthLoader = () => {
  const token = getAuthToken();

  if (!token) {
    return redirect("/login");
  }

  return null;
};

const deleteAuthToken = () => {
  localStorage.removeItem("token");
};

export {
  getAuthToken,
  tokenLoader,
  deleteAuthToken,
  checkAuthLoader,
  getTokenDuration,
};
