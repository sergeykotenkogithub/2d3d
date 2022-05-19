// Прокрутка при клике

// const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
const menuLinks = document.querySelectorAll('.menu-scroll[data-goto]');
if (menuLinks.length > 0) {
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener('click', onMenuLinkClick);
    })
    function onMenuLinkClick(e) {
        const menuLink = e.target.closest('.menu-scroll');
        // const menuLink = e.target;
        const menuLinkDataset = menuLink.dataset.goto;
        if(menuLinkDataset && document.querySelector(menuLinkDataset)) {
            const gotoBlock = document.querySelector(menuLinkDataset);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;

            if(iconMenu.classList.contains('_active')) {
                document.body.classList.remove('_lock');
                iconMenu.classList.remove('_active');
                menuBody.classList.remove('_active');
            }

            window.scrollTo({
                top: gotoBlockValue,
                behavior: 'smooth'
            })
            e.preventDefault();
        }
    }
}