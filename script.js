const content = document.getElementById('content');


document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.getElementById('menu-toggle');
  const nav = document.getElementById('nav-links')

  toggleButton.addEventListener('click', () => {
    nav.classList.toggle('show');
    toggleButton.classList.toggle('rotate');
  });

  document.addEventListener("click", (event) => {
    const isClickInsideMenu = nav.contains(event.target);
    const isClickInsideButton = toggleButton.contains(event.target);

    if (!isClickInsideMenu && !isClickInsideButton) {
      nav.classList.remove('show');
      toggleButton.classList.remove('rotate');
    }
  });
  const dropdown = nav.querySelector('.dropdown');
  const menuToggle = document.getElementById('menu-toggle');
  const dropBtn = nav.querySelector('.dropbtn');

  // Toggle dropdown submenu on mobile when clicking 'Upcoming Meetings'
  dropBtn.addEventListener('click', (e) => {
    if (window.innerWidth <= 768) {
      e.preventDefault(); // prevent following the link
      dropdown.classList.toggle('show-dropdown');
    }
  });

  // Optional: Close menu if clicking outside on mobile
  document.addEventListener('click', (e) => {
    if (!nav.contains(e.target) && !menuToggle.contains(e.target)) {
      nav.classList.remove('show');
      menuToggle.classList.remove('rotate');
      dropdown.classList.remove('show-dropdown');
    }
  });

});


content.appendChild(heading);
content.appendChild(intro);
content.appendChild(mission);

// Carousel functionality - only run if carousel exists
let currentSlideIndex = 0;
let slides = [];
let dots = [];
let autoSlideInterval;

function showSlide(index) {
  // Remove active class from all slides and dots
  slides.forEach(slide => slide.classList.remove('active'));
  dots.forEach(dot => dot.classList.remove('active'));

  // Add active class to current slide and dot
  if (slides[index]) {
    slides[index].classList.add('active');
  }
  if (dots[index]) {
    dots[index].classList.add('active');
  }
}

function changeSlide(direction) {
  currentSlideIndex += direction;

  if (currentSlideIndex >= slides.length) {
    currentSlideIndex = 0;
  } else if (currentSlideIndex < 0) {
    currentSlideIndex = slides.length - 1;
  }

  showSlide(currentSlideIndex);
  resetAutoSlide();
}

function currentSlide(index) {
  currentSlideIndex = index - 1;
  showSlide(currentSlideIndex);
  resetAutoSlide();
}

function nextSlide() {
  changeSlide(1);
}

function resetAutoSlide() {
  clearInterval(autoSlideInterval);
  startAutoSlide();
}

function startAutoSlide() {
  autoSlideInterval = setInterval(nextSlide, 10000); // 10 seconds
}

// Initialize carousel when page loads - only if carousel elements exist
document.addEventListener('DOMContentLoaded', function() {
  slides = document.querySelectorAll('.carousel-slide');
  dots = document.querySelectorAll('.dot');

  if (slides.length > 0) {
    showSlide(0);
    startAutoSlide();
  }
});