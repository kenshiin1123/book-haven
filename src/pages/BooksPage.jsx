import React from "react";

const books = [
  {
    title: "Atomic Habits",
    author: "James Clear",
    ratings: 4.8,
    price: 16.99,
    addedToCart: false,
    year: 2018,
    image: "https://m.media-amazon.com/images/I/91bYsX41DVL._AC_UY218_.jpg",
  },
  {
    title: "Deep Work",
    author: "Cal Newport",
    ratings: 4.7,
    price: 14.99,
    addedToCart: true,
    year: 2016,
    image:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1447957962i/25744928.jpg",
  },
  {
    title: "Mindset",
    author: "Carol S. Dweck",
    ratings: 4.6,
    price: 13.5,
    addedToCart: false,
    year: 2006,
    image: "https://m.media-amazon.com/images/I/81vpsIs58WL._AC_UY218_.jpg",
  },
  {
    title: "The Power of Now",
    author: "Eckhart Tolle",
    ratings: 4.5,
    price: 12.99,
    addedToCart: false,
    year: 1997,
    image:
      "https://books.google.com.ph/books/content?id=sQYqRCIhFAMC&pg=PP1&img=1&zoom=3&hl=en&bul=1&sig=ACfU3U1fNlZ6KPWOf0nRv3eTLr29-HZ5bw&w=1280",
  },
  {
    title: "Can't Hurt Me",
    author: "David Goggins",
    ratings: 4.9,
    price: 18.99,
    addedToCart: true,
    year: 2018,
    image:
      "https://books.google.com.ph/books/publisher/content?id=OSchEAAAQBAJ&pg=PA1&img=1&zoom=3&hl=en&bul=1&sig=ACfU3U0ENO2BcYBAILxzc9B-_8-H39Vh3w&w=1280",
  },
];

import BookCards from "../components/BookCards";

export default function BooksPage() {
  return (
    <>
      <BookCards books={books} />
    </>
  );
}
