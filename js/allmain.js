document.addEventListener("DOMContentLoaded", function () {
  const navToggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelector(".nav-links");
  let alishImage = document.getElementById("alish-image");

  // Navbar toggle functionality
  navToggle.addEventListener("click", function () {
    navLinks.classList.toggle("show");
    navToggle.classList.toggle("active");

    // Toggle between hamburger and cross icons
    const isActive = navToggle.classList.contains("active");
    if (isActive) {
      navToggle.querySelector(".fa-bars").style.display = "none";
      navToggle.querySelector(".fa-times").style.display = "block";
    } else {
      navToggle.querySelector(".fa-bars").style.display = "block";
      navToggle.querySelector(".fa-times").style.display = "none";
    }
  });

  // Close nav-links when clicking outside
  document.addEventListener("click", function (e) {
    if (!navLinks.contains(e.target) && !navToggle.contains(e.target)) {
      navLinks.classList.remove("show");
      navToggle.classList.remove("active");
      navToggle.querySelector(".fa-bars").style.display = "block";
      navToggle.querySelector(".fa-times").style.display = "none";
    }
  });

  // Close nav-links on window resize
  window.addEventListener("resize", function () {
    if (window.innerWidth > 768) {
      navLinks.classList.remove("show");
      navToggle.classList.remove("active");
      navToggle.querySelector(".fa-bars").style.display = "block";
      navToggle.querySelector(".fa-times").style.display = "none";
    }
  });

  // Change nav background on scroll
  window.addEventListener("scroll", function () {
    const nav = document.querySelector(".nav");
    if (window.scrollY > 0) {
      nav.classList.add("scrolled");
    } else {
      nav.classList.remove("scrolled");
    }
  });

  // Function to hide the image after mouse interaction
  function hideImage() {
    if (alishImage) {
      alishImage.style.display = "none";
      // Remove mousemove event listener after hiding the image
      document.removeEventListener("mousemove", handleMouseMove);
    }
  }

  // Mousemove event handler to track mouse position
  function handleMouseMove(event) {
    if (alishImage) {
      var mouseX = event.pageX;
      var mouseY = event.pageY;
      var halfWidth = alishImage.width / 2;
      var halfHeight = alishImage.height / 2;

      // Position image based on mouse position
      alishImage.style.left = mouseX - halfWidth + "px";
      alishImage.style.top = mouseY - halfHeight + "px";
    }
  }

  // Add mousemove event listener to the document
  if (alishImage) {
    document.addEventListener("mousemove", handleMouseMove);

    // Add click event listener to hide the image after first mouse interaction
    document.addEventListener("click", hideImage);
  }

  // Check if the device is mobile and hide the image accordingly
  function checkDeviceType() {
    if (alishImage) {
      const mobileDevice = window.matchMedia("(max-width: 768px)");
      if (mobileDevice.matches) {
        alishImage.style.display = "none";
        // Remove mousemove event listener for mobile devices
        document.removeEventListener("mousemove", handleMouseMove);
      }
    }
  }

  // Call the function to check device type on page load
  checkDeviceType();

  // Listen for window resize to re-check device type
  window.addEventListener("resize", checkDeviceType);

  // Scroll animation for home section
  document.addEventListener("scroll", function () {
    const homeSection = document.querySelector("#home .cover-image");
    const scrollPosition = window.scrollY;
    // Adjust the speed by changing the divisor value
    homeSection.style.transform = `translateY(${scrollPosition / 1.5}px)`;
  });

  // Scroll animation for arrow box
  document.addEventListener("scroll", function () {
    const homeSection = document.querySelector("#home .arrow-box");
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
