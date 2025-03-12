const menu = document.querySelector('.menu');
const NavMenu = document.querySelector('.nav-menu');

menu.addEventListener('click', () => {
    menu.classList.toggle('ativo');
    NavMenu.classList.toggle('ativo');
})

document.addEventListener('DOMContentLoaded', function () {
    const switchElement = document.getElementById('dark-mode-switch');
    const body = document.body;

    switchElement.addEventListener('click', function () {
        body.classList.toggle('light-mode');
    });
});


