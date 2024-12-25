// Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

// Dynamic greeting based on time
window.addEventListener('DOMContentLoaded', () => {
  const greeting = document.createElement('p');
  const hours = new Date().getHours();
  if (hours < 12) {
    greeting.textContent = 'Good Morning!';
  } else if (hours < 18) {
    greeting.textContent = 'Good Afternoon!';
  } else {
    greeting.textContent = 'Good Evening!';
  }
  document.querySelector('header').appendChild(greeting);
});

// Highlight active section on scroll
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('a[href^="#"]');
  let currentSection = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - sectionHeight / 3) {
      currentSection = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').includes(currentSection)) {
      link.classList.add('active');
    }
  });
});
