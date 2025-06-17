// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 50, // Adjust for header height
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Hover Animation for Service Items
  const serviceItems = document.querySelectorAll('.service-item');
  serviceItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
      item.style.transform = 'scale(1.05)';
      item.style.transition = 'transform 0.3s ease-in-out';
    });
    item.addEventListener('mouseleave', () => {
      item.style.transform = 'scale(1)';
    });
  });
  
  // Form Validation for Contact Form
  const contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const name = contactForm.querySelector('input[placeholder="Your Name"]');
      const email = contactForm.querySelector('input[placeholder="Your Email"]');
      const message = contactForm.querySelector('textarea[placeholder="Your Message"]');
  
      let isValid = true;
  
      // Validate Name
      if (!name.value.trim()) {
        alert('Please enter your name.');
        isValid = false;
      }
  
      // Validate Email
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email.value.trim())) {
        alert('Please enter a valid email address.');
        isValid = false;
      }
  
      // Validate Message
      if (!message.value.trim()) {
        alert('Please enter your message.');
        isValid = false;
      }
  
      // If all fields are valid, submit the form
      if (isValid) {
        alert('Thank you! Your message has been sent.');
        contactForm.reset();
      }
    });
  }
  
  // Dynamic Text Animation for Hero Section
  const heroText = document.querySelector('.hero-section h1');
  if (heroText) {
    const text = heroText.textContent;
    heroText.textContent = '';
    let index = 0;
  
    function typeWriter() {
      if (index < text.length) {
        heroText.textContent += text.charAt(index);
        index++;
        setTimeout(typeWriter, 50); // Adjust typing speed here
      }
    }
  
    typeWriter();
  }
  // Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 50,
          behavior: 'smooth'
        });
      }
    });
  });

  const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});