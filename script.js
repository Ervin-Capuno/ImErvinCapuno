const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navbarLinks = document.getElementsByClassName('horizontal-nav')[0];
const container = document.getElementsByClassName('container')[0];
let navbarVisible = false;

toggleButton.addEventListener('click', () => {
    if (navbarVisible) {
        navbarLinks.classList.remove('active');
    } else {
        navbarLinks.classList.add('active');
    }
    navbarVisible = !navbarVisible;
});

//if resizing the window it will close the navigation bar
window.addEventListener('resize', () => {
    if (window.innerWidth >= 845) {
        navbarLinks.classList.remove('active');
        navbarVisible = false;
    }
});