const images = [
  "img/1739020009_iii%20copy.png",
  "img/1739296959_476190554_122110456322727096_4814193811120753855_n.jpg",
];

let currentIndex = 0;
const bgSlide = document.querySelector(".bg-slide");
const dots = document.querySelectorAll(".dot");

function showImage(index) {
  // Fade out
  bgSlide.style.opacity = 0;

  setTimeout(() => {
    // تغيير الخلفية بعد fade
    bgSlide.style.backgroundImage = `url(${images[index]})`;

    // Fade in
    bgSlide.style.opacity = 1;

    // تحديث النقاط
    dots.forEach((dot) => dot.classList.remove("active"));
    document
      .querySelector(`.dot[data-index="${index}"]`)
      .classList.add("active");
  }, 400);
}

document.getElementById("next").addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
});

document.getElementById("prev").addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage(currentIndex);
});

dots.forEach((dot) => {
  dot.addEventListener("click", () => {
    currentIndex = parseInt(dot.dataset.index);
    showImage(currentIndex);
  });
});

// Initial load
showImage(currentIndex);

function showImage(index) {
  const currentImage = images[index];
  const navbar = document.getElementById("mainNavbar");

  // Fade out
  bgSlide.style.opacity = 0;

  setTimeout(() => {
    bgSlide.style.backgroundImage = `url(${currentImage})`;
    bgSlide.style.opacity = 1;

    // ✅ تغيير لون النافبار حسب الصورة
    if (currentImage.includes("1739020009_iii%20copy.png")) {
      navbar.style.backgroundColor = "#00000091"; // الأسود الشفاف
    } else {
      navbar.style.backgroundColor = "rgba(255, 255, 255, 0.1)"; // لون افتراضي أو أي لون آخر
    }

    // ✅ تحديث النقط
    dots.forEach((dot) => dot.classList.remove("active"));
    document
      .querySelector(`.dot[data-index="${index}"]`)
      .classList.add("active");
  }, 400);
}
