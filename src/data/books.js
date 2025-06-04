const books = [
  {
    title: "Atomic Habits",
    author: "James Clear",
    price: 16.99,
    discount: null,
    addedToCart: false,
    year: 2018,
    image: "https://m.media-amazon.com/images/I/91bYsX41DVL._AC_UY218_.jpg",
    reviews: [
      {
        stars: 9,
        description: "Transformed the way I approach habits. Super practical!",
        username: "habitMaster23",
        datetime: "2025-05-30T15:12:00Z",
        pictures: [
          "https://example.com/review-pics/atomic-habits-1.jpg",
          "https://example.com/review-pics/atomic-habits-2.jpg",
        ],
      },
      {
        stars: 10,
        description: "Every chapter felt like gold. Highly recommended.",
        username: "lifecoach101",
        datetime: "2025-05-28T09:45:00Z",
        pictures: [],
      },
    ],
  },
  {
    title: "Deep Work",
    author: "Cal Newport",
    price: 14.99,
    discount: null,
    addedToCart: true,
    year: 2016,
    image:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1447957962i/25744928.jpg",
    reviews: [
      {
        stars: 8,
        description: "Great ideas but a bit dense in parts. Worth it overall.",
        username: "focusedMind",
        datetime: "2025-05-25T17:30:00Z",
        pictures: ["https://example.com/review-pics/deep-work.jpg"],
      },
      {
        stars: 9,
        description: "Helped me regain control over my digital distractions.",
        username: "noMoreMultitasking",
        datetime: "2025-05-20T11:20:00Z",
        pictures: [],
      },
      {
        stars: 9,
        description: "Helped me regain control over my digital distractions.",
        username: "noMoreMultitasking",
        datetime: "2025-05-20T11:20:00Z",
        pictures: [],
      },
    ],
  },
  {
    title: "Mindset",
    author: "Carol S. Dweck",
    price: 13.5,
    discount: 10, // This book has a discount
    addedToCart: false,
    year: 2006,
    image: "https://m.media-amazon.com/images/I/81vpsIs58WL._AC_UY218_.jpg",
    reviews: [
      {
        stars: 8,
        description: "Gave me a whole new perspective on growth and learning.",
        username: "openLearner",
        datetime: "2025-05-18T08:10:00Z",
        pictures: [],
      },
      {
        stars: 7,
        description: "Valuable concepts but slightly repetitive.",
        username: "criticalThinker",
        datetime: "2025-05-15T13:50:00Z",
        pictures: ["https://example.com/review-pics/mindset-page.jpg"],
      },
    ],
  },
  {
    title: "The Power of Now",
    author: "Eckhart Tolle",
    price: 12.99,
    discount: 10,
    addedToCart: false,
    year: 1997,
    image:
      "https://books.google.com.ph/books/content?id=sQYqRCIhFAMC&pg=PP1&img=1&zoom=3&hl=en&bul=1&sig=ACfU3U1fNlZ6KPWOf0nRv3eTLr29-HZ5bw&w=1280",
    reviews: [
      {
        stars: 9,
        description:
          "Very spiritual and calming. Helped me slow down mentally.",
        username: "zenSeeker",
        datetime: "2025-05-10T20:00:00Z",
        pictures: [],
      },
      {
        stars: 6,
        description: "Good message but not for everyone. Felt abstract.",
        username: "rationalReader",
        datetime: "2025-05-08T14:35:00Z",
        pictures: [],
      },
    ],
  },
  {
    title: "Can't Hurt Me",
    author: "David Goggins",
    price: 18.99,
    discount: null,
    addedToCart: true,
    year: 2018,
    image:
      "https://books.google.com.ph/books/publisher/content?id=OSchEAAAQBAJ&pg=PA1&img=1&zoom=3&hl=en&bul=1&sig=ACfU3U0ENO2BcYBAILxzc9B-_8-H39Vh3w&w=1280",
    reviews: [
      {
        stars: 10,
        description: "The most motivating book I’ve ever read. Life-changing.",
        username: "neverQuit",
        datetime: "2025-05-05T19:22:00Z",
        pictures: ["https://example.com/review-pics/cant-hurt-me-1.jpg"],
      },
      {
        stars: 9,
        description: "Intense and raw. Goggins is a beast!",
        username: "ultraRunner",
        datetime: "2025-05-03T11:50:00Z",
        pictures: [],
      },
    ],
  },
];

export default books;
