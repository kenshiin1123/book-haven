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
  profilePic: "/pictures/default-profile.png",
  firstname: "lance",
  lastname: "fernandez",
  email: "fernandezlanceivangil@gmail.com",
  birthday: "2004-11-23",
  accountType: "Buyer",
  phone: "0912 312 3123",
  address: "4827 Maplewood Drive, Brookhaven, IL 60510, USA",
  password: "123",
  preferences: {
    darkTheme: initDarkTheme(),
    notification: false, //Toaster
  },
  checkout: [],
  cart: [],
  purchases: [],
};

export default userInformation;
