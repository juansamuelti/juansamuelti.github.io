// scripts.js

document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.createElement('button');
    toggleButton.textContent = 'Toggle Dark Mode';
    toggleButton.classList.add('toggle-button');
    document.body.appendChild(toggleButton);
  
    // Check local storage for mode preference
    const currentMode = localStorage.getItem('color-mode');
    if (currentMode === 'dark') {
      document.body.classList.add('dark-mode');
    }
  
    toggleButton.addEventListener('click', function () {
      document.body.classList.toggle('dark-mode');
      let mode = 'light';
      if (document.body.classList.contains('dark-mode')) {
        mode = 'dark';
      }
      localStorage.setItem('color-mode', mode);
    });
  });
  