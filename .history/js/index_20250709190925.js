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

setInterval(() => {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
}, 5000);

document.addEventListener("DOMContentLoaded", () => {
  // الأقسام التى نراقبها (تأكّد أن لكل Section id فريد)
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll("#color-url a");

  // الدالة التى تفعّل / تُعطّل الـ active
  function setActive(id) {
    navLinks.forEach((link) => {
      link.classList.toggle("active", link.getAttribute("href") === `#${id}`);
    });
  }

  // مراقبة ظهور القسم بنسبة 60٪ على الأقل
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActive(entry.target.getAttribute("id"));
        }
      });
    },
    { threshold: 0.6 }
  );

  // تشغيل المراقب على كل Section
  sections.forEach((section) => observer.observe(section));

  // فى البداية نضبط على Home
  setActive("Home");
});
