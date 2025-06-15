function getRandomDateTime() {
  const start = new Date(2022, 0, 1).getTime();
  const end = new Date().getTime();
  const randomTime = new Date(start + Math.random() * (end - start));
  return randomTime.toISOString();
}

const userInformation = {
  firstname: "lance",
  lastname: "fernandez",
  email: "fernandezlanceivangil@gmail.com",
  birthday: "11-23-2004",
  accountType: "Buyer",
  checkout: [
    {
      _id: 1, // Book Id
      quantity: 1,
    },
    {
      _id: 2,
      quantity: 2,
    },
    {
      _id: 3,
      quantity: 1,
    },
    {
      _id: 4,
      quantity: 3,
    },
  ],
  cart: [
    {
      _id: 1, // Book Id
      quantity: 1,
    },
    {
      _id: 2,
      quantity: 2,
    },
    {
      _id: 3,
      quantity: 1,
    },
    {
      _id: 4,
      quantity: 3,
    },
  ],
  purchases: [
    {
      _id: 1,
      quantity: 1,
      status: "pending",
      datetime: getRandomDateTime(),
    },
    {
      _id: 2,
      quantity: 2,
      status: "shipped",
      datetime: getRandomDateTime(),
    },
    {
      _id: 3,
      quantity: 1,
      status: "delivered",
      datetime: getRandomDateTime(),
    },
    {
      _id: 4,
      quantity: 3,
      status: "cancelled",
      datetime: getRandomDateTime(),
    },
    {
      _id: 5,
      quantity: 1,
      status: "returned",
      datetime: getRandomDateTime(),
    },
    {
      _id: 6,
      quantity: 1,
      status: "processing",
      datetime: getRandomDateTime(),
    },
  ],
};

export default userInformation;
