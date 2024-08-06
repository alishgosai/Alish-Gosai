document.addEventListener("DOMContentLoaded", function () {
  let alishImage = document.getElementById("alish-image");

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
});
