

const testimonials = [
    {
        name: "Thomas A. Edison",
        photoUrl:  "images/thomas.jpg",
        text: "I have not failed. I've just found 10,000 ways that won't work.",
      },
      {
        name: " Dr. Seuss, Oh, the Places You’ll Go!",
        photoUrl: "images/seuss.jpg",
        text: "You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose. You're on your own. And you know what you know. And YOU are the one who'll decide where to go...”",
  
      },

      {
        name: "Oscar ",
        photoUrl: "images/oscar.jpg",
        text: "Be yourself; everyone else is already taken."
      },
      {
        name: "Bill Keane",
        photoUrl: "images/bill.jpg",
        text: "Yesterday is history, tomorrow is a mystery, today is a gift of God, which is why we call it the present."
      },
      {
        name:"William W. Purkey",
        photoUrl:"images/willy.jpg",
        text: "You've gotta dance like there's nobody watching, \n Love like you'll never be hurt, \n Sing like there's nobody listening, \n And live like it's heaven on earth."
      },
      {
        name: "Theodore Roosevelt",
        photoUrl: "images/theodore1.jpg",
        text: "Do what you can, with what you have, where you are."

      },
];

const imgEl = document.querySelector("img");
const textEl = document.querySelector(".text");
const usernameEl = document.querySelector(".username");

let idx = 0;

updateTestimonial();

function updateTestimonial() {
    const { name, photoUrl, text} = testimonials[idx];
    imgEl.src = photoUrl;
    textEl.innerText = text;
    usernameEl.innerText = name;
    idx++;
    
    if (idx === testimonials.length) {
        idx = 0;
    }
    setTimeout(() => {
        updateTestimonial();
    }, 10000);
}


