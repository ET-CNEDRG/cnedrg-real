document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.getElementById('menu-toggle');
  const nav = document.getElementById('nav-links');

  let slideIndex = 1;
  showSlides(slideIndex);

  // Next/previous controls
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  // Thumbnail image controls
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

  function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
  }


  if (toggleButton && nav) {
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
    const dropBtn = nav.querySelector('.dropbtn');

    if (dropdown && dropBtn) {
      // Toggle dropdown submenu on mobile when clicking 'Upcoming Speakers'
      dropBtn.addEventListener('click', (e) => {
        if (window.innerWidth <= 768) {
          e.preventDefault(); // prevent following the link
          dropdown.classList.toggle('show-dropdown');
        }
      });

      // Close menu if clicking outside on mobile
      document.addEventListener('click', (e) => {
        if (!nav.contains(e.target) && !toggleButton.contains(e.target)) {
          nav.classList.remove('show');
          toggleButton.classList.remove('rotate');
          dropdown.classList.remove('show-dropdown');
        }
      });
    }
  }
});