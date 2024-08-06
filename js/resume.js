
document.addEventListener('DOMContentLoaded', function () {
  const skills = document.querySelectorAll('.skill');

  // Function to check if an element is in viewport
  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  // Function to animate skills when they scroll into view
  function animateSkills() {
    let delay = 0;
    skills.forEach(skill => {
      if (isInViewport(skill) && !skill.classList.contains('active')) {
        setTimeout(() => {
          skill.classList.add('active');
          const progressBar = skill.querySelector('.progress-bar');
          const progress = progressBar.dataset.progress;
          progressBar.style.width = progress; // Set width based on data-progress attribute
        }, delay);
        delay += 200; // Adjust animation delay as needed
      }
    });
  }

  // Event listener for scrolling
  window.addEventListener('scroll', animateSkills);

  // Initial animation check on DOMContentLoaded
  animateSkills();
});