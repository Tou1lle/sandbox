const imageContainers = document.querySelectorAll(".img-container");
const carouselDots = document.querySelectorAll("li");
const arrowContainers = document.querySelectorAll(".arrow-container");
const arrowNext = document.querySelector(".arrow-right");
const arrowBack = document.querySelector(".arrow-left");

function resetActive(list) {
  list.forEach(item => {
    item.classList.remove("active");
  });
}

function setActive(list, index) {
  list[index].classList.add("active");
}

function getActiveIndex(imageContainers) {
  return Array.from(imageContainers)
    .map(imageContainer => imageContainer.classList)
    .findIndex(classList => classList.contains("active"));
}

function isEndOfArray(imageContainers, index) {
  return index === (imageContainers.length - 1) ? true : false;
}

function isBeginningOfArray(index) {
  return index === 0;
}

function setNewActive(imageContainers, index) {
  resetActive(imageContainers);
  setActive(imageContainers, index);
}

function showNext(imageContainers) {
  if (isEndOfArray(imageContainers, getActiveIndex(imageContainers))) {
    setNewActive(imageContainers, 0);
    return;
  }

  setNewActive(imageContainers, getActiveIndex(imageContainers) + 1);
}

function updateCarouselDost(carousel, imageContainers) {
  resetActive(carousel);
  setActive(carousel, getActiveIndex(imageContainers));
}

function showPrevious(imageContainers) {
  if (isBeginningOfArray(getActiveIndex(imageContainers))) {
    setNewActive(imageContainers, imageContainers.length - 1);
    return;
  }

  setNewActive(imageContainers, getActiveIndex(imageContainers) - 1);
}

arrowContainers.forEach(arrowContainer => {
  arrowContainer.addEventListener("click", e => {
    if (e.target.classList.contains("arrow-next")) {
      showNext(imageContainers);
    }
    if (e.target.classList.contains("arrow-previous")) {
      showPrevious(imageContainers);
    }

    updateCarouselDost(carouselDots, imageContainers);
  })
})

carouselDots.forEach(carouseDot => {
  carouseDot.addEventListener("click", e => {
    const index = e.currentTarget.dataset.index;
    setNewActive(imageContainers, index);
    updateCarouselDost(carouselDots, imageContainers);
  })
})

setInterval(() => {
  showNext(imageContainers);
  updateCarouselDost(carouselDots, imageContainers);
}, 2000);

updateCarouselDost(carouselDots, imageContainers);