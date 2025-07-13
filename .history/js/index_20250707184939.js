const images = [
  "img/1739020009_iii copy.png",
  "img/1739296959_476190554_122110456322727096_4814193811120753855_n.jpg",
];

let currentIndex = 0;
const bgSlide = document.querySelector(".bg-slide");
const dots = document.querySelectorAll(".dot");
const navbar = document.getElementById("mainNavbar");

function showImage(index) {
  // Fade out
  bgSlide.style.transition = "opacity 0.5s ease";
  bgSlide.style.opacity = 0;

  setTimeout(() => {
    // تغيير الصورة
    bgSlide.style.backgroundImage = `url(${images[index]})`;

    // تغيير لون الـ navbar حسب الصورة
    if (images[index].includes("iii copy.png")) {
      navbar.style.backgroundColor = "#00000091";
    } else {
      navbar.style.backgroundColor = "#222"; // أو أي لون آخر
    }

    // Fade in
    bgSlide.style.opacity = 1;

    // تفعيل dot الحالية
    dots.forEach((dot) => dot.classList.remove("active"));
    const activeDot = document.querySelector(`.dot[data-index="${index}"]`);
    if (activeDot) activeDot.classList.add("active");
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

// أول صورة عند تحميل الصفحة
showImage(currentIndex);

// تغيير تلقائي كل 5 ثواني
setInterval(() => {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
}, 5000);
