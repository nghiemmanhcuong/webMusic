const mvSliderBox = document.querySelectorAll('.mv__slider-box');
const mvSliderContainer = document.querySelector('.mv__slider-container');
const mvSliderItem = document.querySelectorAll('.mv__slider-item');
const mvPrev = document.getElementById('prev-mv');
const mvNext = document.getElementById('next-mv');
console.log(mvSliderItem)
let index = 0;

const mvs = {
    listMV:[
        {
            image:'./assets/images/MVs/mv1.jpg',
            name:'một bước yêu vạn dặm đau',
            author:'MR.siro'
        },
        {
            image:'./assets/images/MVs/mv2.jpg',
            name:'một bước yêu vạn dặm đau',
            author:'MR.siro'
        },
        {
            image:'./assets/images/MVs/mv3.jpg',
            name:'một bước yêu vạn dặm đau',
            author:'MR.siro'
        },
        {
            image:'./assets/images/MVs/mv4.jpg',
            name:'một bước yêu vạn dặm đau',
            author:'MR.siro'
        },
        {
            image:'./assets/images/MVs/mv5.jpg',
            name:'một bước yêu vạn dặm đau',
            author:'MR.siro'
        },
        {
            image:'./assets/images/MVs/mv6.jpg',
            name:'một bước yêu vạn dặm đau',
            author:'MR.siro'
        },
        {
            image:'./assets/images/MVs/mv7.jpg',
            name:'một bước yêu vạn dặm đau',
            author:'MR.siro'
        },
        {
            image:'./assets/images/MVs/mv8.jpg',
            name:'một bước yêu vạn dặm đau',
            author:'MR.siro'
        },
        {
            image:'./assets/images/MVs/mv9.jpg',
            name:'một bước yêu vạn dặm đau',
            author:'MR.siro'
        },
        {
            image:'./assets/images/MVs/mv10.jpg',
            name:'một bước yêu vạn dặm đau',
            author:'MR.siro'
        },
        {
            image:'./assets/images/MVs/mv11.jpg',
            name:'một bước yêu vạn dặm đau',
            author:'MR.siro'
        },
        {
            image:'./assets/images/MVs/mv12.jpg',
            name:'một bước yêu vạn dặm đau',
            author:'MR.siro'
        },
        {
            image:'./assets/images/MVs/mv13.jpg',
            name:'một bước yêu vạn dặm đau',
            author:'MR.siro'
        },
        {
            image:'./assets/images/MVs/mv14.jpg',
            name:'một bước yêu vạn dặm đau',
            author:'MR.siro'
        },
        {
            image:'./assets/images/MVs/mv15.jpg',
            name:'một bước yêu vạn dặm đau',
            author:'MR.siro'
        },
    ],
    renderMv(){
        const htmls =  this.listMV.map(function(mv){
            return `
            <div class="mv__slider-box">
                <div class="mv__slider-box-video">
                    <img class="mv__slider-box-img" src="${mv.image}" alt="">
                </div>
                <div class="mv__slider-box-content row">
                    <img src="${mv.image}" alt="" class="mv__slider-box-avatar">
                    <div class="mv__slider-box-information">
                        <h4 class="mv__slider-box-title">${mv.name}</h4>
                        <span class="mv__slider-box-subtitle">${mv.author}</span>
                    </div>
                </div>
            </div>
            `        
        })
    },
    defaultEvent(){
       mvNext.onclick = ()=>{
            mvPrev.classList.remove('active')
           index++;
           if(index === mvSliderItem.length){
               index = mvSliderItem.length - 1;
               
           }
           if(index === mvSliderItem.length-1){
               mvNext.classList.add('active');
           }
           mvSliderContainer.style.right = index*100+'%';
       }

       mvPrev.onclick = ()=>{ 
        mvNext.classList.remove('active')
        index--;
        if(index < 0){
            index = 0;       
        }
        if(index === 0){
            mvPrev.classList.add('active');
        }
        mvSliderContainer.style.right = index*100+'%';
        }
    } 
}
mvs.renderMv();
mvs.defaultEvent();