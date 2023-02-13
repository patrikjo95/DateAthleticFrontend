const swiper = document.querySelector("#swiper");
const like = document.querySelector("#like");
const dislike = document.querySelector("#dislike");

// Constants
const urls = [
  "../img/person4.jpg",
  "../img/person5.jpg",
  "../img/person6.jpg",
  "../img/person7.jpg",
  "../img/person8.jpg",
  "../img/person9.jpg",
  "../img/person10.jpg",
  "../img/person11.jpg",
  "../img/person12.jpg",
];
const titles = [
  "Micthell Brigde",
  "Patrik Johansson",
  "Killian Walsh",
  "Edwin Chaiderson",
  "Erkan Cicek",
  "Michael Charles",
  "Sahra Bile",
  "Bryan Bautista",
  "Toros",
];
const description = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi scelerisque vel nunc vitae bibendum.",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi scelerisque vel nunc vitae bibendum.",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi scelerisque vel nunc vitae bibendum.",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi scelerisque vel nunc vitae bibendum.",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi scelerisque vel nunc vitae bibendum.",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi scelerisque vel nunc vitae bibendum.",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi scelerisque vel nunc vitae bibendum.",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi scelerisque vel nunc vitae bibendum.",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi scelerisque vel nunc vitae bibendum.",
];
// Variables
let cardCount = 0;

// Functions
function appendNewCard() {
  const card = new Card({
    imageUrl: urls[cardCount % 9],
    allHeads: titles[cardCount % 9],
    allDesc: description[cardCount % 9],
    onDismiss: appendNewCard,
    onLike: () => {
      like.style.animationPlayState = "running";
      like.classList.toggle("trigger");
    },
    onDislike: () => {
      dislike.style.animationPlayState = "running";
      dislike.classList.toggle("trigger");
    },
  });
  swiper.append(card.element);
  cardCount++;

  const cards = swiper.querySelectorAll(".card:not(.dismissing)");
  cards.forEach((card, index) => {
    card.style.setProperty("--i", index);
  });
}

for (let i = 0; i < 6; i++) {
  appendNewCard();
}




/**popup */
function closeModal() {
  document.querySelector(".modal").classList.remove("open");
}
function openModal() {
  document.querySelector(".modal").classList.add("open");
}

function setViewHeight() {
  const vh = `${window.innerHeight}px`;
  document.documentElement.style.setProperty("--screen-h", vh);
}
setViewHeight();
window.addEventListener("resize", setViewHeight);


