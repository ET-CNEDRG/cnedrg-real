document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.getElementById('menu-toggle');
  const nav = document.getElementById('nav-links');

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