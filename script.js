// Toggle menu visibility
document.querySelector('.menu-toggle').addEventListener('click', () => {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
  });
  
  // Typewriter Effect
const typewriter = document.querySelector(".typewriter");

const strings = ["Data Analyst", "Software Engineer", "Data Scientist"];
let stringIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const currentString = strings[stringIndex];

  if (isDeleting) {
    // Remove characters
    typewriter.textContent = currentString.substring(0, charIndex - 1);
    charIndex--;

    if (charIndex === 0) {
      isDeleting = false;
      stringIndex = (stringIndex + 1) % strings.length; // Move to the next string
    }
  } else {
    // Add characters
    typewriter.textContent = currentString.substring(0, charIndex + 1);
    charIndex++;

    if (charIndex === currentString.length) {
      isDeleting = true; // Start deleting after the full string is typed
      setTimeout(() => typeEffect(), 1000); // Pause at full string
      return;
    }
  }

  const delay = isDeleting ? 100 : 150; // Speed up deleting slightly
  setTimeout(typeEffect, delay);
}

// Start the effect
typeEffect();
