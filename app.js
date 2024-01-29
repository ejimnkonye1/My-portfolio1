
  document.addEventListener("DOMContentLoaded", function () {
    // Toggle the navigation menu on mobile devices
    const hamburgerMenu = document.querySelector(".menu-toggler");
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
    const hamburgerMenu = document.querySelector(".menu-toggler");
    const links = document.querySelector(".links ul");
    const nav = document.querySelector("nav");
  
    hamburgerMenu.addEventListener("click", function () {
      hamburgerMenu.classList.toggle("change");
      links.classList.toggle("active");
      nav.classList.toggle("open");
    });
  });
  
  
  
  const numbers = document.querySelectorAll('.number'); // Select all elements with class 'number'


  
  // Function to update data-num attribute based on the desired value
  function updateDataNumValue(element, newValue) {
    element.setAttribute('data-num', newValue);
    element.textContent = newValue;
  }

  // Example usage: Update the data-num attribute for the 'number' elements
  // Replace '7' with the desired value for each element
  updateDataNumValue(numbers[0], 10); // Update the first element to '10'
  updateDataNumValue(numbers[1], 8);  // Update the second element to '8'
  updateDataNumValue(numbers[2], 20); // Update the third element to '20'
  updateDataNumValue(numbers[3], 4);  // Update the fourth element to '4'

  document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.filter-btn');
    const items = document.querySelectorAll('.grid-item');

    buttons.forEach(button => {
      button.addEventListener('click', function () {
        const filterValue = this.getAttribute('data-filter');

        items.forEach(item => {
          if (filterValue === 'all' || item.classList.contains(filterValue)) {
            item.classList.remove('hidden');
          } else {
            item.classList.add('hidden');
          }
        });
      });
    });
  });
  // Select all link elements inside the .links class
const links = document.querySelectorAll('.links a');

// Select the nav element
const navElement = document.querySelector('nav');

// Add a click event listener to each link
links.forEach(link => {
  link.addEventListener('click', () => {
    // Remove the 'open' class from the nav element
    navElement.classList.remove('open');
  });
});
function myFunction(x) {
  x.classList.toggle("change");
}

