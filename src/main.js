const hamburger = document.querySelector('.header-hamburger'),
sideMenu = document.querySelector('.header-sidemenu');

hamburger.addEventListener('click', () => {
        setTimeout(() => {
            sideMenu.classList.toggle('show');
        }, 0);
        sideMenu.classList.toggle('d-f');
        
        hamburger.classList.toggle('cross');

});