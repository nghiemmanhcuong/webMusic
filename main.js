const headerNavbarOpen = document.getElementById('header-nav-open');
const headerNavbarclose = document.getElementById('header-nav-close');
export const headerNavbar = document.querySelector('.header__navbar');

headerNavbarOpen.onclick = function(){
    headerNavbar.classList.add('active');
    headerNavbarclose.style.display = 'block';
}
headerNavbarclose.onclick = function(){
    headerNavbarclose.style.display = 'none';
    headerNavbar.classList.remove('active');
}

/*add overview*/

/*removeActiveNavbar*/

function removeActiveNavbar(){
    const navbarItemActive = document.querySelector('.container__navbar-menu .active');
    navbarItemActive.classList.remove('active')
}
export default removeActiveNavbar;

/* OVERVIEW OPEN */

(function overviewOpen(){
    const overview = document.getElementById('overview');
    overview.onclick = ()=>{
        removeActiveNavbar();
        overview.classList.add('active');
    }
})();
