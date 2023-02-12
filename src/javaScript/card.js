const images = [
  '../img/fir.jpg',
  '../img/fir2.jpg',
  '../img/fir3.jpg',
  '../img/fir4.jpg',
  '../img/fir5.jpg',
  '../img/fir6.jpg',
  '../img/fir7.jpg',
  '../img/karate.jpg',
  '../img/motorcycle.jpg',
  '../img/one.jpg',
  '../img/jim.jpg',
  '../img/man1.jpg',
  '../img/merathorn.jpg',
  '../img/footbal.jpg',
];
// Function to randomly select three non-duplicated images
function selectThreeRandomImages() {
  // Create an array to store the selected images
  const selectedImages = [];

  // Create a copy of the images array to avoid modifying the original array
  const imagesCopy = [...images];

  // Repeat the following process three times
  for (let i = 0; i < 3; i++) {
    // Check if there are still images remaining in the copy
    if (imagesCopy.length > 0) {
      // Generate a random index based on the number of remaining images
      const randomIndex = Math.floor(Math.random() * imagesCopy.length);

      // Add the image at the random index to the selected images array
      selectedImages.push(imagesCopy[randomIndex]);

      // Remove the selected image from the copy to avoid duplicates
      imagesCopy.splice(randomIndex, 1);
    } else {
      // If there are no more images remaining, break out of the loop
      break;
    }
  }

  return selectedImages;
}
class Card {
  constructor({ imageUrl, onDismiss, onLike, onDislike, allHeads, allDesc }) {
    this.imageUrl = imageUrl;
    this.allHeads = allHeads;
    this.allDesc = allDesc;
    this.onDismiss = onDismiss;
    this.onLike = onLike;
    this.onDislike = onDislike;
    this.#init();
  }
  #startPoint;
  #offsetX;
  #offsetY;
  #isTouchDevice = () => {
    return (
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0 ||
      navigator.msMaxTouchPoints > 0
    );
  };
  #init = () => {
    const card = document.createElement("div");
    card.classList.add("card");
    const img = document.createElement("img");
    const button2 = document.createElement("a");
    const title = document.createElement("h3");
    const paragraph = document.createElement("p");


    img.src = this.imageUrl;
    button2.innerHTML = 'Mer info'
    // title.innerHTML = 'Förnamn Efternamn'
    title.innerHTML = this.allHeads
    paragraph.innerHTML = this.allDesc



    card.append(img);
    card.append(title)
    card.append(paragraph)
    card.append(button2)
    // card.append(paragraph)


    this.element = card;
    if (this.#isTouchDevice()) {
      this.#listenToTouchEvents();
    } else {
      this.#listenToMouseEvents();
    }
    const modal2 = document.getElementById('modal_box')
    const close_modals = document.getElementById('btn_cross6')
    const imgs = document.getElementById('IMG')
    button2.addEventListener('click', () => {
      const randomImages = selectThreeRandomImages();
      console.log(randomImages)
      let imgs2= document.getElementById('all_imgs').children;
      imgs2[0].src = randomImages[0]
      imgs2[1].src =  randomImages[1]
      imgs2[2].src =  randomImages[2]
   
      modal2.classList.add('active')
      imgs.src = this.imageUrl
    })

    close_modals.addEventListener('click', () => {
      modal2.classList.remove('active')
    })
  };



  #listenToTouchEvents = () => {
    this.element.addEventListener("touchstart", (e) => {
      const touch = e.changedTouches[0];
      if (!touch) return;
      const { clientX, clientY } = touch;
      this.#startPoint = { x: clientX, y: clientY };
      document.addEventListener("touchmove", this.#handleTouchMove);
      this.element.style.transition = "transform 0s";
    });
    document.addEventListener("touchend", this.#handleTouchEnd);
    document.addEventListener("cancel", this.#handleTouchEnd);
  };
  #listenToMouseEvents = () => {
    this.element.addEventListener("mousedown", (e) => {
      const { clientX, clientY } = e;
      this.#startPoint = { x: clientX, y: clientY };
      document.addEventListener("mousemove", this.#handleMouseMove);
      this.element.style.transition = "transform 0s";
    });

    document.addEventListener("mouseup", this.#handleMoveUp);

    this.element.addEventListener("dragstart", (e) => {
      e.preventDefault();
    });
  };
  #handleMove = (x, y) => {
    this.#offsetX = x - this.#startPoint.x;
    this.#offsetY = y - this.#startPoint.y;
    const rotate = this.#offsetX * 0.1;
    this.element.style.transform = `translate(${this.#offsetX}px, ${this.#offsetY
      }px) rotate(${rotate}deg)`;

    if (Math.abs(this.#offsetX) > this.element.clientWidth * 0.7) {
      this.#dismiss(this.#offsetX > 0 ? 1 : -1);
    }
  };
  #handleMouseMove = (e) => {
    e.preventDefault();
    if (!this.#startPoint) return;
    const { clientX, clientY } = e;
    this.#handleMove(clientX, clientY);
  };
  #handleMoveUp = () => {
    this.#startPoint = null;
    document.removeEventListener("mousemove", this.#handleMouseMove);
    this.element.style.transform = "";
  };
  #handleTouchMove = (e) => {
    if (!this.#startPoint) return;
    const touch = e.changedTouches[0];
    if (!touch) return;
    const { clientX, clientY } = touch;
    this.#handleMove(clientX, clientY);
  };
  #handleTouchEnd = () => {
    this.#startPoint = null;
    document.removeEventListener("touchmove", this.#handleTouchMove);
    this.element.style.transform = "";
  };
  #dismiss = (direction) => {
    this.#startPoint = null;
    document.removeEventListener("mouseup", this.#handleMoveUp);
    document.removeEventListener("mousemove", this.#handleMouseMove);
    document.removeEventListener("touchend", this.#handleTouchEnd);
    document.removeEventListener("touchmove", this.#handleTouchMove);
    this.element.style.transition = "transform 1s";
    this.element.style.transform = `translate(${direction * window.innerWidth
      }px, ${this.#offsetY}px) rotate(${90 * direction}deg)`;
    this.element.classList.add("dismissing");
    setTimeout(() => {
      this.element.remove();
    }, 1000);
    if (typeof this.onDismiss === "function") {
      this.onDismiss();
    }
    if (typeof this.onLike === "function" && direction === 1) {
      this.onLike();
    }
    if (typeof this.onDislike === "function" && direction === -1) {
      this.onDislike();
    }
  };
}
const imgs = document.getElementById('IMG')

function img1(e) {
   imgs.src = e.src;
}
function img2(e) {
  imgs.src = e.src;
}
function img3(e) {
  imgs.src = e.src;
}



