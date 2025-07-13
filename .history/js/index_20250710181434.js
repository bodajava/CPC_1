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

window.addEventListener("load", function () {
  // هنخلي اللودر يفضل ظاهر لمدة 2 ثانية
  setTimeout(() => {
    const loader = document.getElementById("loader");
    loader.style.opacity = "0";
    loader.style.transition = "opacity 0.5s ease";

    setTimeout(() => {
      loader.style.display = "none";
    }, 500); // اختفاء تدريجي بعد الفيد
  }, 1000); // الانتظار 2 ثانية بعد تحميل الصفحة
});

/*======================================================================start=========================================================================*/
document.addEventListener("DOMContentLoaded", function () {
  const checkbox = document.getElementById("terms-checkbox-female");
  const submitButton = document.querySelector(".submit");

  // أول ما الصفحة تفتح: خلي الزرار معطل
  submitButton.disabled = true;
  submitButton.classList.add("disabled-button");

  checkbox.addEventListener("change", function () {
    if (checkbox.checked) {
      submitButton.disabled = false;
      submitButton.classList.remove("disabled-button");
    } else {
      submitButton.disabled = true;
      submitButton.classList.add("disabled-button");
    }
  });
});
/*======================================================================start=========================================================================*/
document.querySelectorAll(".tooltip-container").forEach(function (container) {
  const tooltip = container.querySelector(".tooltip-content");

  // عند دخول الماوس على الزر أو المحتوى
  container.addEventListener("mouseenter", () => {
    tooltip.classList.add("visible");
  });

  // عند مغادرة الماوس الزر أو المحتوى
  container.addEventListener("mouseleave", () => {
    tooltip.classList.remove("visible");
  });
}); /*======================================================================start=========================================================================*/

let acrd = document.querySelectorAll(".custom-card-1");
let login = document.querySelector("login");

for (let i = 0; i < acrd.length; i++) {
  acrd[i].addEventListener("click", function () {});
  login.classList.remove("d-none");
}
