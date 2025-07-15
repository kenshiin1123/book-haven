function getRandomDateTime() {
  const start = new Date(2022, 0, 1).getTime();
  const end = new Date().getTime();
  const randomTime = new Date(start + Math.random() * (end - start));
  return randomTime.toISOString();
}

const initDarkTheme = () => {
  const value = localStorage.getItem("darkTheme");
  if (value === null) {
    return false;
  } else {
    return value === "true";
  }
};

const userInformation = {
  profilePic: "",
  firstname: "",
  lastname: "",
  email: "",
  birthday: "",
  phone: "",
  address: "",
  password: "",
  preferences: {
    darkTheme: initDarkTheme(),
    notification: false, //Toaster
  },
  checkout: [],
  cart: [],
  purchases: [],
};

export default userInformation;
