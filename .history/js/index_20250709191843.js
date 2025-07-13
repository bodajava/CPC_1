document.addEventListener("DOMContentLoaded", () => {
  // ░░░░░░░░░░░░░░░░░░░░░
  // ► تفعيل الـ active على الروابط حسب الـ section الظاهر
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll("#color-url a");

  function setActive(id) {
    navLinks.forEach((link) => {
      link.classList.toggle("active", link.getAttribute("href") === `#${id}`);
    });
  }

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

  sections.forEach((section) => observer.observe(section));
  setActive("Home");

  // ░░░░░░░░░░░░░░░░░░░░░
  // ► تفعيل sticky على النافبار عند دخول قسم Motor-Oils
  const navbar = document.getElementById("mainNavbar");
  const motorOils = document.getElementById("Motor-Oils");

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          navbar.classList.add("sticky");
        } else {
          navbar.classList.remove("sticky");
        }
      });
    },
    { rootMargin: "-80px 0px 0px 0px", threshold: 0 }
  );

  io.observe(motorOils);
});
