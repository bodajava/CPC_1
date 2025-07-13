const header = document.querySelector(".header-img");
const images = [
  "../img/1739020009_iii copy.png)",
  "../img/1739296959_....jpg/",
];
let currentIndex = 0;

function showImage(index) {
  header.style.backgroundImage = `url(${images[index]})`;
  document
    .querySelectorAll(".dot")
    .forEach((dot) => dot.classList.remove("active"));
  document.querySelector(`.dot[data-index="${index}"]`).classList.add("active");
}

document.getElementById("next").addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
});

document.getElementById("prev").addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage(currentIndex);
});

document.querySelectorAll(".dot").forEach((dot) => {
  dot.addEventListener("click", () => {
    currentIndex = parseInt(dot.dataset.index);
    showImage(currentIndex);
  });
});

// Initial load
showImage(currentIndex);
