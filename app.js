const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "software engineer",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text: "Sentiments two occasional and one contrasted. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry.",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "ux designer",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "graphic designer",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "product manager",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];

const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

let currentIndex = 0;

// Load initial review.
window.addEventListener("DOMContentLoaded", () => {
  showReviewData();
});

// Show review data based on current index.
const showReviewData = () => {
  const reviewObj = reviews[currentIndex];
  img.src = reviewObj.img;
  author.textContent = reviewObj.name;
  job.textContent = reviewObj.job;
  info.textContent = reviewObj.text;
};

// Go to next review when clicked.
nextBtn.addEventListener("click", () => {
  currentIndex++;
  // Reset index if it exceeds last review item.
  if (currentIndex > reviews.length - 1) {
    currentIndex = 0;
  }
  showReviewData();
});

// Go to previous review when clicked.
prevBtn.addEventListener("click", () => {
  currentIndex--;
  // If current index is less than 0, set index to last review item.
  if (currentIndex < 0) {
    currentIndex = reviews.length - 1;
  }
  showReviewData();
});

// Get a random review when clicked.
randomBtn.addEventListener("click", () => {
  currentIndex = Math.floor(Math.random() * reviews.length);
  showReviewData();
});
