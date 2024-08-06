document.addEventListener('DOMContentLoaded', function() {
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
      const skills = document.querySelectorAll('.skill');
      let allAnimated = true; // Flag to track if all skills have been animated
  
      skills.forEach(skill => {
        if (isInViewport(skill) && !skill.classList.contains('animated')) {
          skill.classList.add('active', 'animated');
          
          // Animate progress bar width
          const progressBar = skill.querySelector('.progress-bar');
          const width = progressBar.dataset.progress;
          progressBar.style.width = width + '%'; // Set width directly
        }
  
        // Check if all skills have been animated
        if (!skill.classList.contains('animated')) {
          allAnimated = false;
        }
      });
  
      // If all skills have been animated, remove the scroll event listener
      if (allAnimated) {
        window.removeEventListener('scroll', animateSkills);
      }
    }
  
    // Event listener for scrolling
    window.addEventListener('scroll', animateSkills);
  
    // Initial animation check on DOMContentLoaded
    animateSkills();
  });
  

  