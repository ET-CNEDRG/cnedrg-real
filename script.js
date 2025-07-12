const content = document.getElementById('content');


const heading = document.createElement('h2');
heading.textContent = 'Welcome to CNEDRG';

const intro = document.createElement('p');
intro.textContent = 'paragraph 1';

const mission = document.createElement('p');
mission.textContent = 'paragraph 2';

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
  
});
                              
content.appendChild(heading);
content.appendChild(intro);
content.appendChild(mission);