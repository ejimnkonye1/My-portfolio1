
  document.addEventListener("DOMContentLoaded", function () {
    // Toggle the navigation menu on mobile devices
    const hamburgerMenu = document.querySelector(".hamburger-menu");
    const links = document.querySelector(".links");
    hamburgerMenu.addEventListener("click", () => {
      links.classList.toggle("active");
    });

    // Skill progress animation
    const skills = document.querySelectorAll(".skill-progress");
    skills.forEach((skill) => {
      const targetProgress = skill.getAttribute("data-progress");
      const progressBar = skill.querySelector(".skill-bar");

      let currentProgress = 0;
      const interval = 10; // Interval in milliseconds

      const animateProgress = () => {
        if (currentProgress < targetProgress) {
          currentProgress += 1;
          progressBar.style.width = currentProgress + "%";
          requestAnimationFrame(animateProgress);
        }
      };

      setTimeout(() => {
        requestAnimationFrame(animateProgress);
      }, 1000); // Delay the animation by 1 second
    });

    // Count up numbers for records section
    const recordNumbers = document.querySelectorAll(".number");
    recordNumbers.forEach((number) => {
      const targetNumber = parseInt(number.getAttribute("data-num"));
      let currentNumber = 0;
      const interval = 20; // Interval in milliseconds

      const animateNumber = () => {
        if (currentNumber < targetNumber) {
          currentNumber += 1;
          number.textContent = currentNumber;
          setTimeout(animateNumber, interval);
        }
      };

      animateNumber();
    });
  });

// Function to animate the skill progress bars
function animateSkills() {
    const skillBars = document.querySelectorAll('.skill-progress');
    skillBars.forEach((skillBar) => {
      const targetProgress = skillBar.getAttribute('data-progress');
      skillBar.style.width = '0%';
      let currentProgress = 0;
      const animationInterval = setInterval(() => {
        if (currentProgress >= parseInt(targetProgress)) {
          clearInterval(animationInterval);
        } else {
          currentProgress++;
          skillBar.style.width = currentProgress + '%';
        }
      }, 10); // Adjust the interval for smoother or faster animation
    });
  }
  
  // Call the animateSkills function when the page is loaded
  window.addEventListener('load', animateSkills);
  document.addEventListener("DOMContentLoaded", function () {
    const hamburgerMenu = document.querySelector(".hamburger-menu");
    const links = document.querySelector(".links ul");

    hamburgerMenu.addEventListener("click", function () {
      links.classList.toggle("active");
    });
  });
  document.addEventListener("DOMContentLoaded", function () {
    const hamburgerMenu = document.querySelector(".hamburger-menu");
    const links = document.querySelector(".links ul");

    hamburgerMenu.addEventListener("click", function () {
      links.classList.toggle("active");
    });
  });
  document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.querySelector(".menu-toggler");
    const nav = document.querySelector("nav");
  
    menuButton.addEventListener("click", function () {
      nav.classList.toggle("open");
    });
  });
  