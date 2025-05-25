// External JS extracted from original HTML

// Theme toggle logic
document.getElementById('themeToggle')?.addEventListener('click', function () {
  document.body.classList.toggle('light-mode');
  const icon = this.querySelector('i');
  if (document.body.classList.contains('light-mode')) {
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
  } else {
    icon.classList.remove('fa-sun');
    icon.classList.add('fa-moon');
  }
});

// Smooth scroll reveal (fade-in, slide-in)
function revealOnScroll() {
  const elements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right');
  const windowHeight = window.innerHeight;
  elements.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;
    if (elementTop < windowHeight - 100) {
      el.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);
