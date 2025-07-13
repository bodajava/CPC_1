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

let closeButtons = document.querySelectorAll(".close-btn");

for (let i = 0; i < cardOne.length; i++) {
  cardOne[i].addEventListener("click", function () {
    loginOne.classList.remove("d-none");
  });
}

for (let i = 0; i < cardTwo.length; i++) {
  cardTwo[i].addEventListener("click", function () {
    loginTwo.classList.remove("d-none");
  });
}

for (let i = 0; i < cardThree.length; i++) {
  cardThree[i].addEventListener("click", function () {
    loginTwo.classList.remove("d-none");
  });
}

for (let i = 0; i < closeButtons.length; i++) {
  closeButtons[i].addEventListener("click", function () {
    let section = closeButtons[i].closest("section");
    section.classList.add("d-none");
  });
}

let containers = document.querySelectorAll(".lightBoxContainer");

for (let i = 0; i < containers.length; i++) {
  containers[i].addEventListener("click", function (e) {
    if (e.target === containers[i]) {
      let section = containers[i].closest("section");
      section.classList.add("d-none");
    }
  });
}

/*======================================================================start=========================================================================*/
document.addEventListener("DOMContentLoaded", function () {
  const scrollSpy = new bootstrap.ScrollSpy(document.body, {
    target: "#mainNavbar",
    offset: 100,
  });

  // Smooth scrolling for navbar links
  document.querySelectorAll(".navbar-nav .nav-link").forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      document.querySelectorAll(".navbar-nav .nav-link").forEach((link) => {
        link.classList.remove("active");
      });
      this.classList.add("active");
    });
  });

  window.addEventListener("scroll", function () {
    const sections = document.querySelectorAll("section[id]");
    let currentSection = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 100; // Adjust for offset
      const sectionHeight = section.offsetHeight;
      if (
        window.scrollY >= sectionTop &&
        window.scrollY < sectionTop + sectionHeight
      ) {
        currentSection = section.getAttribute("id");
      }
    });

    document.querySelectorAll(".navbar-nav .nav-link").forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${currentSection}`) {
        link.classList.add("active");
      }
    });
  });
});
/*======================================================================start=========================================================================*/
let forGetPassworAnthor = document.querySelectorAll("#forGetPasswor");
let forgetPasswors = document.querySelector("#forget-passwors");

for (let i = 0; i < forGetPassworAnthor.length; i++) {
  forGetPassworAnthor[i].addEventListener("click", function () {
    forgetPasswors.classList.remove("d-none");
    loginOne.classList.add("d-none");
  });
}

let CreatAcc = document.querySelectorAll(".CreatAcc");
let creatacout = document.querySelector("#creat-acc");

for (let i = 0; i < CreatAcc.length; i++) {
  CreatAcc[i].addEventListener("click", function () {
    loginTwo.classList.add("d-none");
    creatacout.classList.remove("d-none");
  });
}

let creatAccMealFemal = document.querySelector("#creatAccMealFemal");

let createAccMealFemalBtn = document.querySelectorAll(".CreatAccMealFemal");

for (let i = 0; i < createAccMealFemalBtn.length; i++) {
  createAccMealFemalBtn[i].addEventListener("click", function (e) {
    e.preventDefault();
    loginTwo.classList.add("d-none");
    creatAccMealFemal.classList.remove("d-none");
  });
}

let signinLink = document.getElementById("seeen");

signinLink.addEventListener("click", function (e) {
  e.preventDefault();

  loginTwo.classList.remove("d-none");
});






// JS Validation for #creatAccMealFemal section
(function () {
  'use strict';
  
  const form = document.querySelector('#creatAccMealFemal form');

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    e.stopPropagation();

    let isValid = true;

    const inputs = form.querySelectorAll('input');

    inputs.forEach(input => {
      const value = input.value.trim();
      input.classList.remove('is-invalid', 'is-valid');

      // Firstname & Lastname validation
      if (input.type === 'text' && input.nextElementSibling.textContent.includes('name')) {
        const nameRegex = /^[A-Za-z؀-ۿ\s]{2,20}$/;
        if (!nameRegex.test(value)) {
          showError(input, 'Name must contain only letters and be at least 2 characters');
          isValid = false;
        } else {
          showSuccess(input);
        }
      }

      // Email validation
      if (input.type === 'email') {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
          showError(input, 'Please enter a valid email address');
          isValid = false;
        } else {
          showSuccess(input);
        }
      }

      // Password validation
      if (input.type === 'password') {
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
        if (!passwordRegex.test(value)) {
          showError(input, 'Password must be at least 6 characters and contain both letters and numbers');
          isValid = false;
        } else {
          showSuccess(input);
        }
      }

      // Phone number validation
      if (input.type === 'number') {
        const phoneRegex = /^(010|011|012|015)[0-9]{8}$/;
        if (!phoneRegex.test(value)) {
          showError(input, 'Phone must start with 010/011/012/015 and be 11 digits');
          isValid = false;
        } else {
          showSuccess(input);
        }
      }
    });

    // Gender checkboxes
    const genderMale = form.querySelector('#terms-checkbox-male');
    const genderFemale = form.querySelector('#terms-checkbox-female');
    const genderValid = genderMale.checked || genderFemale.checked;
    if (!genderValid) {
      alert('Please select a gender (Male or Female)');
      isValid = false;
    }

    if (isValid) {
      form.classList.add('was-validated');
      // Submit or handle success logic
      alert('Form submitted successfully!');
    }
  });

  function showError(input, message) {
    input.classList.add('is-invalid');
    let feedback = input.nextElementSibling;
    if (!feedback || !feedback.classList.contains('invalid-feedback')) {
      feedback = document.createElement('div');
      feedback.className = 'invalid-feedback';
      input.parentNode.appendChild(feedback);
    }
    feedback.textContent = message;
  }

  function showSuccess(input) {
    input.classList.add('is-valid');
    const feedback = input.parentNode.querySelector('.invalid-feedback');
    if (feedback) feedback.remove();
  }
})();








================================================

