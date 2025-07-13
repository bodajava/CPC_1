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

/*======================================================================start=========================================================================*/

let cardOne = document.querySelectorAll(".custom-card-1");
let cardTwo = document.querySelectorAll(".custom-card-2");
let cardThree = document.querySelectorAll(".custom-card-3");

let loginOne = document.querySelector("#login");
let loginTwo = document.querySelector("#login-2");
let forgetPasswors = document.querySelector("#forget-passwors");
let creatacout = document.querySelector("#creat-acc");

let closeButtons = document.querySelectorAll(".close-btn");
let containers = document.querySelectorAll(".lightBoxContainer");
let forGetPassworAnthor = document.querySelectorAll("#forGetPasswor");
let CreatAcc = document.querySelectorAll(".CreatAcc");

let navbar = document.querySelector("#mainNavbar");

// لما تضغط على كارد 1
for (let i = 0; i < cardOne.length; i++) {
  cardOne[i].addEventListener("click", function () {
    loginOne.classList.remove("d-none");
    navbar.classList.add("d-none");
  });
}

// كارد 2
for (let i = 0; i < cardTwo.length; i++) {
  cardTwo[i].addEventListener("click", function () {
    loginTwo.classList.remove("d-none");
    navbar.classList.add("d-none");
  });
}

// كارد 3
for (let i = 0; i < cardThree.length; i++) {
  cardThree[i].addEventListener("click", function () {
    loginTwo.classList.remove("d-none");
    navbar.classList.add("d-none");
  });
}

// زرار الإغلاق
for (let i = 0; i < closeButtons.length; i++) {
  closeButtons[i].addEventListener("click", function () {
    let section = closeButtons[i].closest("section");
    section.classList.add("d-none");
    navbar.classList.remove("d-none");
  });
}

// لما تضغط برا الفورم
for (let i = 0; i < containers.length; i++) {
  containers[i].addEventListener("click", function (e) {
    if (e.target === containers[i]) {
      let section = containers[i].closest("section");
      section.classList.add("d-none");
      navbar.classList.remove("d-none");
    }
  });
}

// زرار نسيت الباسورد
for (let i = 0; i < forGetPassworAnthor.length; i++) {
  forGetPassworAnthor[i].addEventListener("click", function () {
    forgetPasswors.classList.remove("d-none");
    loginOne.classList.add("d-none");
    navbar.classList.add("d-none");
  });
}

// زرار إنشاء حساب
for (let i = 0; i < CreatAcc.length; i++) {
  CreatAcc[i].addEventListener("click", function () {
    loginTwo.classList.add("d-none");
    creatacout.classList.remove("d-none");
    navbar.classList.add("d-none");
  });
}
