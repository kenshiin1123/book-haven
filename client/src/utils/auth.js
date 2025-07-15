import { redirect } from "react-router";
const getAuthToken = () => {
  const token = localStorage.getItem("token");
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

export { getAuthToken, tokenLoader, deleteAuthToken, checkAuthLoader };
