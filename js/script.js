const links = document.querySelectorAll('nav a');

links.forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    const targetId = link.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    const offsetTop = targetElement.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth'
    });
  });
});

const toggleButton = document.querySelector('.toggle-button');
const toggleContainer = document.querySelector('.toggle-container');
const nav = document.querySelector('nav');

toggleButton.addEventListener('click', () => {
  toggleContainer.classList.toggle('translate-x-full');
  nav.classList.toggle('opacity-0');
  nav.classList.toggle('pointer-events-none');
});
