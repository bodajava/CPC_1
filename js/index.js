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
  "use strict";

  const form = document.querySelector("#creatAccMealFemal form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    e.stopPropagation();

    let isValid = true;

    const inputs = form.querySelectorAll("input");

    inputs.forEach((input) => {
      const value = input.value.trim();
      input.classList.remove("is-invalid", "is-valid");

      // Firstname & Lastname validation
      if (
        input.type === "text" &&
        input.nextElementSibling.textContent.includes("name")
      ) {
        const nameRegex = /^[A-Za-z؀-ۿ\s]{2,20}$/;
        if (!nameRegex.test(value)) {
          showError(
            input,
            "Name must contain only letters and be at least 2 characters"
          );
          isValid = false;
        } else {
          showSuccess(input);
        }
      }

      // Email validation
      if (input.type === "email") {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
          showError(input, "Please enter a valid email address");
          isValid = false;
        } else {
          showSuccess(input);
        }
      }

      // Password validation
      if (input.type === "password") {
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
        if (!passwordRegex.test(value)) {
          showError(
            input,
            "Password must be at least 6 characters and contain both letters and numbers"
          );
          isValid = false;
        } else {
          showSuccess(input);
        }
      }

      // Phone number validation
      if (input.type === "number") {
        const phoneRegex = /^(010|011|012|015)[0-9]{8}$/;
        if (!phoneRegex.test(value)) {
          showError(
            input,
            "Phone must start with 010/011/012/015 and be 11 digits"
          );
          isValid = false;
        } else {
          showSuccess(input);
        }
      }
    });

    // Gender checkboxes
    const genderMale = form.querySelector("#terms-checkbox-male");
    const genderFemale = form.querySelector("#terms-checkbox-female");
    const genderValid = genderMale.checked || genderFemale.checked;
    if (!genderValid) {
      alert("Please select a gender (Male or Female)");
      isValid = false;
    }

    if (isValid) {
      form.classList.add("was-validated");
      // Submit or handle success logic
      alert("Form submitted successfully!");
    }
  });

  function showError(input, message) {
    input.classList.add("is-invalid");
    let feedback = input.nextElementSibling;
    if (!feedback || !feedback.classList.contains("invalid-feedback")) {
      feedback = document.createElement("div");
      feedback.className = "invalid-feedback";
      input.parentNode.appendChild(feedback);
    }
    feedback.textContent = message;
  }

  function showSuccess(input) {
    input.classList.add("is-valid");
    const feedback = input.parentNode.querySelector(".invalid-feedback");
    if (feedback) feedback.remove();
  }
})();

(function () {
  "use strict";

  // Shared validation functions
  function showError(input, message) {
    input.classList.add("is-invalid");
    let feedback = input.nextElementSibling;
    if (!feedback || !feedback.classList.contains("invalid-feedback")) {
      feedback = document.createElement("div");
      feedback.className = "invalid-feedback";
      input.parentNode.appendChild(feedback);
    }
    feedback.textContent = message;
  }

  function showSuccess(input) {
    input.classList.add("is-valid");
    const feedback = input.parentNode.querySelector(".invalid-feedback");
    if (feedback) feedback.remove();
  }

  // Regex patterns
  const regexPatterns = {
    name: /^[A-Za-z؀-ۿ\s]{2,50}$/,
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    password: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/,
    phone: /^(010|011|012|015)[0-9]{8}$/,
    company: /^[A-Za-z؀-ۿ\s]{2,50}$/, // Same as name for company
  };

  // Validation for #creatAccMealFemal
  const formCreatAccMealFemal = document.querySelector(
    "#creatAccMealFemal form"
  );
  if (formCreatAccMealFemal) {
    formCreatAccMealFemal.addEventListener("submit", function (e) {
      e.preventDefault();
      e.stopPropagation();

      let isValid = true;
      const inputs = formCreatAccMealFemal.querySelectorAll("input");

      inputs.forEach((input) => {
        const value = input.value.trim();
        input.classList.remove("is-invalid", "is-valid");

        // Firstname & Lastname
        if (
          input.type === "text" &&
          input.nextElementSibling.textContent.includes("name")
        ) {
          if (!regexPatterns.name.test(value)) {
            showError(
              input,
              "Name must contain only letters and be 2–50 characters"
            );
            isValid = false;
          } else {
            showSuccess(input);
          }
        }

        // Email
        if (input.type === "email") {
          if (!regexPatterns.email.test(value)) {
            showError(input, "Please enter a valid email address");
            isValid = false;
          } else {
            showSuccess(input);
          }
        }

        // Password
        if (input.type === "password") {
          if (!regexPatterns.password.test(value)) {
            showError(
              input,
              "Password must be at least 6 characters and contain both letters and numbers"
            );
            isValid = false;
          } else {
            showSuccess(input);
          }
        }

        // Phone number
        if (input.type === "number") {
          if (!regexPatterns.phone.test(value)) {
            showError(
              input,
              "Phone must start with 010/011/012/015 and be 11 digits"
            );
            isValid = false;
          } else {
            showSuccess(input);
          }
        }
      });

      // Gender checkboxes
      const genderMale = formCreatAccMealFemal.querySelector(
        "#terms-checkbox-male"
      );
      const genderFemale = formCreatAccMealFemal.querySelector(
        "#terms-checkbox-female"
      );
      const genderValid = genderMale.checked || genderFemale.checked;
      if (!genderValid) {
        alert("Please select a gender (Male or Female)");
        isValid = false;
      }

      if (isValid) {
        formCreatAccMealFemal.classList.add("was-validated");
        alert("Form submitted successfully!");
      }
    });
  }

  // Validation for #login
  const formLogin = document.querySelector("#login form");
  if (formLogin) {
    formLogin.addEventListener("submit", function (e) {
      e.preventDefault();
      e.stopPropagation();

      let isValid = true;
      const inputs = formLogin.querySelectorAll("input");

      inputs.forEach((input) => {
        const value = input.value.trim();
        input.classList.remove("is-invalid", "is-valid");

        // Email
        if (input.type === "email") {
          if (!regexPatterns.email.test(value)) {
            showError(input, "Please enter a valid email address");
            isValid = false;
          } else {
            showSuccess(input);
          }
        }

        // Password
        if (input.type === "password") {
          if (!regexPatterns.password.test(value)) {
            showError(
              input,
              "Password must be at least 6 characters and contain both letters and numbers"
            );
            isValid = false;
          } else {
            showSuccess(input);
          }
        }
      });

      if (isValid) {
        formLogin.classList.add("was-validated");
        alert("Login successful!");
      }
    });
  }

  // Validation for #login-2
  const formLogin2 = document.querySelector("#login-2 form");
  if (formLogin2) {
    formLogin2.addEventListener("submit", function (e) {
      e.preventDefault();
      e.stopPropagation();

      let isValid = true;
      const inputs = formLogin2.querySelectorAll("input");

      inputs.forEach((input) => {
        const value = input.value.trim();
        input.classList.remove("is-invalid", "is-valid");

        // Phone number
        if (input.type === "number") {
          if (!regexPatterns.phone.test(value)) {
            showError(
              input,
              "Phone must start with 010/011/012/015 and be 11 digits"
            );
            isValid = false;
          } else {
            showSuccess(input);
          }
        }

        // Password
        if (input.type === "password") {
          if (!regexPatterns.password.test(value)) {
            showError(
              input,
              "Password must be at least 6 characters and contain both letters and numbers"
            );
            isValid = false;
          } else {
            showSuccess(input);
          }
        }
      });

      if (isValid) {
        formLogin2.classList.add("was-validated");
        alert("Login successful!");
      }
    });
  }

  // Validation for #forget-passwors
  const formForgetPassword = document.querySelector("#forget-passwors form");
  if (formForgetPassword) {
    formForgetPassword.addEventListener("submit", function (e) {
      e.preventDefault();
      e.stopPropagation();

      let isValid = true;
      const inputs = formForgetPassword.querySelectorAll("input");

      inputs.forEach((input) => {
        const value = input.value.trim();
        input.classList.remove("is-invalid", "is-valid");

        // Email
        if (input.type === "email") {
          if (!regexPatterns.email.test(value)) {
            showError(input, "Please enter a valid email address");
            isValid = false;
          } else {
            showSuccess(input);
          }
        }

        // Phone number
        if (input.type === "number") {
          if (!regexPatterns.phone.test(value)) {
            showError(
              input,
              "Phone must start with 010/011/012/015 and be 11 digits"
            );
            isValid = false;
          } else {
            showSuccess(input);
          }
        }
      });

      if (isValid) {
        formForgetPassword.classList.add("was-validated");
        alert("Password reset request submitted successfully!");
      }
    });
  }

  // Validation for #creat-acc
  const formCreatAcc = document.querySelector("#creat-acc form");
  if (formCreatAcc) {
    formCreatAcc.addEventListener("submit", function (e) {
      e.preventDefault();
      e.stopPropagation();

      let isValid = true;
      const inputs = formCreatAcc.querySelectorAll("input");

      inputs.forEach((input) => {
        const value = input.value.trim();
        input.classList.remove("is-invalid", "is-valid");

        // Firstname & Lastname
        if (
          input.type === "text" &&
          input.nextElementSibling.textContent.includes("name") &&
          !input.nextElementSibling.textContent.includes("Company")
        ) {
          if (!regexPatterns.name.test(value)) {
            showError(
              input,
              "Name must contain only letters and be 2–50 characters"
            );
            isValid = false;
          } else {
            showSuccess(input);
          }
        }

        // Company Name
        if (
          input.type === "text" &&
          input.nextElementSibling.textContent.includes("Company")
        ) {
          if (!regexPatterns.company.test(value)) {
            showError(
              input,
              "Company name must contain only letters and be 2–50 characters"
            );
            isValid = false;
          } else {
            showSuccess(input);
          }
        }

        // Email
        if (input.type === "email") {
          if (!regexPatterns.email.test(value)) {
            showError(input, "Please enter a valid email address");
            isValid = false;
          } else {
            showSuccess(input);
          }
        }

        // Password
        if (input.type === "password") {
          if (!regexPatterns.password.test(value)) {
            showError(
              input,
              "Password must be at least 6 characters and contain both letters and numbers"
            );
            isValid = false;
          } else {
            showSuccess(input);
          }
        }

        // Phone number
        if (input.type === "number") {
          if (!regexPatterns.phone.test(value)) {
            showError(
              input,
              "Phone must start with 010/011/012/015 and be 11 digits"
            );
            isValid = false;
          } else {
            showSuccess(input);
          }
        }
      });

      // Agree to conditions checkbox
      const agreeCheckbox = formCreatAcc.querySelector(
        "#terms-checkbox-female"
      );
      if (!agreeCheckbox.checked) {
        alert("Please agree to the conditions");
        isValid = false;
      }

      if (isValid) {
        formCreatAcc.classList.add("was-validated");
        alert("Account created successfully!");
      }
    });
  }

  // Ensure only one gender checkbox is selected at a time
  const genderCheckboxes = document.querySelectorAll('input[name="gender"]');
  genderCheckboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", function () {
      if (this.checked) {
        genderCheckboxes.forEach((cb) => {
          if (cb !== this) cb.checked = false;
        });
      }
    });
  });
})();

let htmlCARD_1 = document.querySelectorAll("#CARD_1");
let first_sec = document.querySelector("#first_sec");

for (let i = 0; i < htmlCARD_1.length; i++) {
  htmlCARD_1[i].addEventListener("click", function () {
    first_sec.classList.remove("d-none");
  });
}

// إغلاق النافبار لما أضغط في أي حتة خارجها
document.addEventListener("click", function (event) {
  const navbarToggler = document.querySelector(".navbar-toggler");
  const navbarCollapse = document.querySelector(".navbar-collapse");

  const isClickInsideNavbar =
    navbarCollapse.contains(event.target) ||
    navbarToggler.contains(event.target);

  if (!isClickInsideNavbar && navbarCollapse.classList.contains("show")) {
    new bootstrap.Collapse(navbarCollapse).hide();
  }
});
