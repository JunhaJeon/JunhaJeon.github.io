// Dynamic Greeting
const greetingElement = document.getElementById("dynamic-greeting");
const currentHour = new Date().getHours();

if (currentHour < 12) {
  greetingElement.textContent = "Good Morning!";
} else if (currentHour < 18) {
  greetingElement.textContent = "Good Afternoon!";
} else {
  greetingElement.textContent = "Good Evening!";
}

// Smooth Scrolling
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    const targetId = event.target.getAttribute('href').slice(1);
    document.getElementById(targetId).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Active Section Highlight
const navLinks = document.querySelectorAll('nav a');
const sections = document.querySelectorAll('main section');

window.addEventListener('scroll', () => {
  let currentSection = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 50;
    if (window.scrollY >= sectionTop) {
      currentSection = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').slice(1) === currentSection) {
      link.classList.add('active');
    }
  });
});
