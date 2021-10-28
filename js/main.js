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