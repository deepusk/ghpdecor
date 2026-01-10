document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.header');
  const menuToggle = document.querySelector('.menu-toggle');
  const navList = document.querySelector('.nav-list');

  // Mobile menu
  if (menuToggle) {
    menuToggle.addEventListener('click', () => {
      navList.classList.toggle('active');
      menuToggle.textContent = navList.classList.contains('active') ? '✕' : '☰';
    });

    // Close when clicking link
    navList.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navList.classList.remove('active');
        menuToggle.textContent = '☰';
      });
    });
  }

  // Header becomes more solid on scroll
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 50);
  });
});
