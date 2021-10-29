const prevBtn = document.getElementById('prev-slide');
const nextBtn = document.getElementById('next-slide');
const sliderMain = document.querySelector('.hotsongs__main');
const sliders = document.querySelectorAll('.hotsongs__item');
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