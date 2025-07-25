const books = [
  {
    _id: 1,
    title: "Atomic Habits",
    author: "James Clear",
    category: ["Self-Help"],
    description:
      "A practical guide to building better habits and breaking bad ones through tiny, consistent changes. Clear emphasizes systems over goals, making self-improvement attainable and sustainable.",
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
        pictures: [],
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
    _id: 2,
    title: "Deep Work",
    author: "Cal Newport",
    category: ["Productivity"],
    description:
      "Explores the power of focused, undistracted work in a world of constant digital noise. Newport offers actionable strategies to cultivate deep concentration for greater productivity and creativity.",
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
        pictures: [],
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
    _id: 3,
    title: "Mindset",
    author: "Carol S. Dweck",
    category: ["Psychology"],
    description:
      "Reveals how our beliefs about ability—fixed vs. growth mindset—shape success in school, work, and life. Dweck shows how adopting a growth mindset can transform learning and resilience.",
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
        pictures: [],
      },
    ],
  },
  {
    _id: 4,
    title: "The Power of Now",
    author: "Eckhart Tolle",
    category: ["Spirituality"],
    description:
      "A spiritual classic that urges readers to let go of past regrets and future anxieties to find peace in the present moment. Tolle combines philosophy and mindfulness to deepen self-awareness.",
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
    _id: 5,
    title: "Can't Hurt Me",
    author: "David Goggins",
    category: ["Memoir"],
    description:
      "A raw and intense memoir by a former Navy SEAL who turned pain and adversity into mental toughness. Goggins challenges readers to push beyond perceived limits through self-discipline.",
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
        pictures: [],
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
  {
    _id: 6,
    title: "Sapiens: A Brief History of Humankind",
    author: "Yuval Noah Harari",
    category: ["History"],
    description:
      "A sweeping history of the human species, from the emergence of Homo sapiens to modern society. Harari examines how shared myths, culture, and technology have shaped humanity’s path.",
    price: 20.5,
    discount: null,
    addedToCart: false,
    year: 2014,
    image:
      "https://books.google.com.ph/books/publisher/content?id=FmyBAwAAQBAJ&pg=PP1&img=1&zoom=3&hl=en&bul=1&sig=ACfU3U3Psi7BRzn8bu-pJunoC24u0Py-Ng&w=1280",
    reviews: [
      {
        stars: 10,
        description:
          "A truly mind-blowing journey through human history. Essential reading!",
        username: "historyBuff",
        datetime: "2025-05-29T10:00:00Z",
        pictures: [],
      },
      {
        stars: 9,
        description:
          "Fascinating and thought-provoking, though some parts are quite dense.",
        username: "deepThinker",
        datetime: "2025-05-27T16:00:00Z",
        pictures: [],
      },
    ],
  },
  {
    _id: 7,
    title: "The Alchemist",
    author: "Paulo Coelho",
    category: ["Fiction"],
    description:
      "A poetic allegorical novel about a young shepherd's quest for his personal legend. Rich with symbolism, it teaches readers to follow their dreams and trust the journey of life.",
    price: 9.99,
    discount: 15,
    addedToCart: true,
    year: 1988,
    image:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1654371463i/18144590.jpg",
    reviews: [
      {
        stars: 8,
        description: "A beautiful and inspiring fable. Simple yet profound.",
        username: "dreamChaser",
        datetime: "2025-05-22T08:30:00Z",
        pictures: [],
      },
      {
        stars: 7,
        description:
          "Good for a quick, uplifting read. A bit too allegorical for my taste.",
        username: "pragmaticReader",
        datetime: "2025-05-20T12:45:00Z",
        pictures: [],
      },
    ],
  },
  {
    _id: 8,
    title: "Becoming",
    author: "Michelle Obama",
    category: ["Biography"],
    description:
      "An intimate memoir tracing Michelle Obama’s journey from the South Side of Chicago to the White House. It reflects on identity, resilience, and using one’s voice for impact and change.",
    price: 17.99,
    discount: null,
    addedToCart: false,
    year: 2018,
    image:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1528206996i/38746485.jpg",
    reviews: [
      {
        stars: 9,
        description:
          "An incredibly honest and inspiring memoir. Highly recommend the audiobook!",
        username: "biographyFan",
        datetime: "2025-05-15T18:00:00Z",
        pictures: [],
      },
      {
        stars: 8,
        description:
          "Well-written and engaging. A powerful story of resilience.",
        username: "empowermentSeeker",
        datetime: "2025-05-13T09:15:00Z",
        pictures: [],
      },
    ],
  },
  {
    _id: 9,
    title: "The Silent Patient",
    author: "Alex Michaelides",
    category: ["Thriller"],
    description:
      "A psychological thriller about a woman who shoots her husband and then stops speaking—and the therapist obsessed with uncovering her motive. Twists and suspense drive the narrative.",
    price: 11.5,
    discount: null,
    addedToCart: true,
    year: 2019,
    image:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1668782119i/40097951.jpg",
    reviews: [
      {
        stars: 9,
        description: "A gripping psychological thriller with an amazing twist!",
        username: "thrillerAddict",
        datetime: "2025-05-09T21:00:00Z",
        pictures: [],
      },
      {
        stars: 7,
        description: "Kept me guessing, but the ending felt a bit rushed.",
        username: "mysteryLover",
        datetime: "2025-05-07T14:00:00Z",
        pictures: [],
      },
    ],
  },
  {
    _id: 10,
    title: "Educated",
    author: "Tara Westover",
    category: ["Memoir"],
    description:
      "A gripping memoir of a woman who grew up in a strict, survivalist family with no formal education, yet eventually earned a PhD from Cambridge. It's a story of transformation and self-liberation.",
    price: 15.0,
    discount: 5,
    addedToCart: false,
    year: 2018,
    image:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1506026635i/35133922.jpg",
    reviews: [
      {
        stars: 10,
        description:
          "An incredible true story of resilience and self-discovery. Truly inspiring.",
        username: "bookwormExtra",
        datetime: "2025-05-02T11:00:00Z",
        pictures: [],
      },
      {
        stars: 9,
        description: "Heartbreaking and triumphant. A must-read memoir.",
        username: "nonfictionFan",
        datetime: "2025-04-30T17:30:00Z",
        pictures: [],
      },
    ],
  },
  {
    _id: 11,
    title: "The Subtle Art of Not Giving a F*ck",
    author: "Mark Manson",
    category: ["Self-Help"],
    description:
      "A blunt and honest self-help book that flips positivity on its head. Manson argues that life’s struggles give it meaning, and we should be selective about what we truly care about.",
    price: 13.99,
    discount: 10,
    addedToCart: false,
    year: 2016,
    image: "https://images-na.ssl-images-amazon.com/images/I/71QKQ9mwV7L.jpg",
    reviews: [
      {
        stars: 8,
        description: "Brutally honest and refreshing. Helped shift my mindset.",
        username: "truthSeeker",
        datetime: "2025-05-31T14:20:00Z",
        pictures: [],
      },
      {
        stars: 6,
        description: "Interesting take, but repetitive in parts.",
        username: "minimalThinker",
        datetime: "2025-05-26T09:00:00Z",
        pictures: [],
      },
    ],
  },
  {
    _id: 12,
    title: "Start With Why",
    author: "Simon Sinek",
    category: ["Business"],
    description: `Focuses on how leaders and organizations can inspire others by starting with "why"—their core purpose or belief. Sinek outlines a framework for building trust and lasting impact.`,
    price: 14.49,
    discount: null,
    addedToCart: false,
    year: 2009,
    image: "https://upload.wikimedia.org/wikipedia/en/8/8b/Start_With_Why.jpg",
    reviews: [
      {
        stars: 9,
        description:
          "Reframed how I lead and communicate. Clear and compelling.",
        username: "visionDriven",
        datetime: "2025-05-30T13:05:00Z",
        pictures: [],
      },
      {
        stars: 7,
        description: "Insightful, but could be more concise.",
        username: "valueSeeker",
        datetime: "2025-05-28T10:40:00Z",
        pictures: [],
      },
    ],
  },
  {
    _id: 13,
    title: "Rich Dad Poor Dad",
    author: "Robert T. Kiyosaki",
    category: ["Finance"],
    description:
      "A foundational personal finance book contrasting two father figures: one focused on traditional education, the other on financial literacy and investing. It challenges conventional views on money.",
    price: 10.99,
    discount: 20,
    addedToCart: true,
    year: 1997,
    image: "https://images-na.ssl-images-amazon.com/images/I/81bsw6fnUiL.jpg",
    reviews: [
      {
        stars: 9,
        description: "Completely changed how I see money and investing.",
        username: "financeGuru",
        datetime: "2025-05-21T10:15:00Z",
        pictures: [],
      },
      {
        stars: 7,
        description:
          "Good starter book, but too simplified for advanced readers.",
        username: "smartSaver",
        datetime: "2025-05-19T18:30:00Z",
        pictures: [],
      },
    ],
  },
  {
    _id: 14,
    title: "The Midnight Library",
    author: "Matt Haig",
    category: ["Fiction", "Fantasy", "Contemporary Literature"],
    description:
      "A thought-provoking novel about a woman who discovers a library between life and death, where she can try out different versions of her life. A poetic take on regret, choices, and self-worth.",
    price: 13.25,
    discount: null,
    addedToCart: false,
    year: 2020,
    image:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1602190253i/52578297.jpg",
    reviews: [
      {
        stars: 10,
        description:
          "Emotionally deep and thought-provoking. Beautifully written.",
        username: "bookishSoul",
        datetime: "2025-05-17T21:00:00Z",
        pictures: [],
      },
      {
        stars: 8,
        description: "Unique premise with a satisfying resolution.",
        username: "alternateRealist",
        datetime: "2025-05-16T14:40:00Z",
        pictures: [],
      },
    ],
  },
  {
    _id: 15,
    title: "12 Rules for Life: An Antidote to Chaos",
    author: "Jordan B. Peterson",
    category: ["Self-Help", "Psychology", "Philosophy", "Personal Development"],
    description:
      "A blend of psychology, philosophy, and practical advice that offers life principles like “stand up straight” and “tell the truth.” Peterson explores how order and responsibility lead to meaning.",
    price: 19.0,
    discount: 5,
    addedToCart: false,
    year: 2018,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/12_Rules_for_Life_Front_Cover_%282018_first_edition%29.jpg/800px-12_Rules_for_Life_Front_Cover_%282018_first_edition%29.jpg",
    reviews: [
      {
        stars: 8,
        description:
          "Dense but packed with wisdom. Not light reading, but worth it.",
        username: "deepDiver",
        datetime: "2025-05-11T11:30:00Z",
        pictures: [],
      },
      {
        stars: 9,
        description: "Helped me bring order and discipline into my life.",
        username: "structuredMind",
        datetime: "2025-05-10T09:00:00Z",
        pictures: [],
      },
    ],
  },
];

const getRating = (reviews) => {
  return (
    reviews.reduce((total, review) => total + review.stars, 0) /
    reviews.length /
    2
  );
};

const getRandomNum = () => Math.floor(Math.random() * 200) + 1;

books.forEach((b) => {
  b.reviews.forEach((review) => {
    // const randomArr = [getRandomNum(), getRandomNum(), getRandomNum()];
    const randomArr = Array.from(
      { length: Math.floor(Math.random() * 5) + 1 },
      () => getRandomNum()
    );
    for (let i = 0; i < randomArr.length; i++) {
      review.pictures.push(
        `https://picsum.photos/seed/${randomArr[i]}/400/300`
      );
    }
  });
});

// add rating to each book
books.forEach((book) => {
  book.rating = getRating(book.reviews);
});

export default books;
