// Btn And Menu

const $NavbarMobile = document.querySelector('.navbar-mobile');
const $Btn = document.querySelector('.btn');
const $BackdropFilter = document.querySelector('.backdrop-filter');

let Menu = false;

$Btn.addEventListener('click', () => {
    if (Menu) {
        $NavbarMobile.style.left = '-15rem';
        $Btn.classList.remove('btn--open');
        $BackdropFilter.style.width = '0';
        Menu = false;
    } else {
        $NavbarMobile.style.left = '0';
        $Btn.classList.add('btn--open');
        $Btn.style.position = 'relative';
        $BackdropFilter.style.width = '100%';
        Menu = true;
    }
})

// Click Outside Close Menu

document.addEventListener('click', (e) => {
    if (!$NavbarMobile.contains(e.target) && e.target !== $Btn && e.target.id !== 'btn__line') {
        $NavbarMobile.style.left = '-15rem';
        $Btn.classList.remove('btn--open');
        $Btn.style.position = 'relative';
        $BackdropFilter.style.width = '0';
        Menu = false;
    }
});

// Add Active After Click To Link

const $MenuLinks = document.querySelectorAll('.mobile-menu__link');

$MenuLinks.forEach($MenuLink => {
    $MenuLink.addEventListener('click', () => {
        document.querySelector('.mobile-menu__link--active').classList.remove('mobile-menu__link--active');
        $MenuLink.classList.add('mobile-menu__link--active');
    });
});

// Change Theme

let darkmode = localStorage.getItem('darkmode');
const $Changetheme = document.querySelector('.btn-box__switch');

const enabelDarkmode = () => {
    document.body.classList.add('dark-mode');
    localStorage.setItem('darkmode', 'btn-box__switch');
}

const disableDarkmode = () => {
    document.body.classList.remove('dark-mode');
    localStorage.setItem('darkmode', null);
}

if (darkmode ===  'btn-box__switch') enabelDarkmode();

$Changetheme.addEventListener('click', () => {
    darkmode = localStorage.getItem('darkmode');
    darkmode !== 'btn-box__switch' ? enabelDarkmode() : disableDarkmode();
});