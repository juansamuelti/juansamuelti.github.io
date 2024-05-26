// script.js
document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('theme-toggle');
    const currentTheme = localStorage.getItem('theme') || 'light';
    document.body.classList.add(currentTheme + '-theme');

    toggleButton.addEventListener('click', () => {
        let newTheme;
        if (document.body.classList.contains('light-theme')) {
            document.body.classList.replace('light-theme', 'dark-theme');
            newTheme = 'dark';
        } else {
            document.body.classList.replace('dark-theme', 'light-theme');
            newTheme = 'light';
        }
        localStorage.setItem('theme', newTheme);
    });
});
