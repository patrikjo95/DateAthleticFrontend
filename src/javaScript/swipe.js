'use strict';


const noButton = document.getElementById("noButton");
const likeButton = document.getElementById("likeButton");
const card = document.getElementById("cards");

noButton.addEventListener("click", handleNo);
likeButton.addEventListener("click", handleYes);

function handleNo() {
    card.classList.add("slide-out-left");
    setTimeout(() => {
        card.classList.remove("slide-out-left");
    }, 500);
}

function handleYes() {
    card.classList.add("slide-out-right");
    setTimeout(() => {
        card.classList.remove("slide-out-right");
    }, 500);
}

