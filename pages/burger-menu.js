const menu = document.getElementById('burger-menu');
const menuClose = document.getElementById('burger-menu-close');
const menuOpen = document.getElementById('burger-menu-open');

if (menuOpen) {
    menuOpen.addEventListener('click', function() {
        if (menu) {
            menu.setAttribute('data-open', '');
            menuOpen.style="display:none;"
        }
    });
}

if (menuClose) {
    menuClose.addEventListener('click', function() {
        if (menu) {
            menu.removeAttribute('data-open');
            menuOpen.style="display:block;"
        }
    });
}
