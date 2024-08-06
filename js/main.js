document.addEventListener("DOMContentLoaded", function () {
  // Scroll animation for home section
  document.addEventListener("scroll", function () {
    const homeSection = document.querySelector("#home .cover-image");
    const scrollPosition = window.scrollY;
    // Adjust the speed by changing the divisor value
    homeSection.style.transform = `translateY(${scrollPosition / 1.5}px)`;
  });

  // Scroll animation for arrow box of home section
  document.addEventListener("scroll", function () {
    const homeSection = document.querySelector("#home .arrow-box");
    const scrollPosition = window.scrollY;
    // Adjust the speed by changing the divisor value
    homeSection.style.transform = `translateY(${scrollPosition / 2}px)`;
  });

  document.addEventListener("scroll", function () {
    const homeSection = document.querySelector(".repository-button");
    const scrollPosition = window.scrollY;
    // Adjust the speed by changing the divisor value
    homeSection.style.transform = `translateY(${scrollPosition / 2}px)`;
  });

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
