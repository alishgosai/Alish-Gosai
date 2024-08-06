document.addEventListener("DOMContentLoaded", function () {
  // Smooth scroll to about section
  document
    .querySelector(".scroll-down")
    .addEventListener("click", function (e) {
      e.preventDefault();
      const aboutPage = document.querySelector("#about");
      const aboutPageTop = aboutPage.offsetTop;
      window.scrollTo({ top: aboutPageTop, behavior: "smooth" });
    });
});