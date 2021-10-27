const prevBtn = document.getElementById('prev-slide');
const nextBtn = document.getElementById('next-slide');
const sliderMain = document.querySelector('.featured__main');
const sliders = document.querySelectorAll('.slider__item');
const headerNavbarOpen = document.getElementById('header-nav-open');
const headerNavbarclose = document.getElementById('header-nav-close');
const headerNavbar = document.querySelector('.header__navbar');
let index = 0;

nextBtn.onclick = function(){
    index++;
    if(index === sliders.length){
        index = 0;
    }
    sliderMain.style.right = index*100+'%'
}
prevBtn.onclick = function(){
    index--;
    if(index < 0){
        index = sliders.length - 1;
    }
    sliderMain.style.right = index*100+'%'
}

setInterval(function(){
    nextBtn.click();
},10000)

headerNavbarOpen.onclick = function(){
    headerNavbar.classList.add('active');
    headerNavbarclose.style.display = 'block';
}
headerNavbarclose.onclick = function(){
    headerNavbarclose.style.display = 'none';
    headerNavbar.classList.remove('active');
}