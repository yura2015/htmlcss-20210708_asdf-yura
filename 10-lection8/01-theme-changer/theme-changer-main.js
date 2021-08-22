const changer_main = document.getElementById('theme-changer-main');
const html_main = document.documentElement;

changer_main.addEventListener('change', function() {
    html_main.toggleAttribute('data-theme-dark');
});
