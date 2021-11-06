const body = document.querySelector('body');
const app = document.querySelector('.app');
const appBackground = document.querySelector('.app__backgorund');
const openBackground = document.querySelector('.background__open-btn');
const closeBackground = document.querySelector('.background__close-btn');
const applyBackgroundBtns = document.querySelectorAll('.theme__action-btn');
const header = document.querySelector('.header');
const headerPlaylist = document.querySelector('.header__playMisic');
import {headerNavbar} from '../main.js';

const backgorunds = {
    cunrentIndex:0,
    backgorundList:[
        {
            color:'#37075d'
        },
        {
            option:'./assets/images/themeBgs/listTheme1/theme2.jpg',
            color:'#282828'
        },
        {
            option:'./assets/images/themeBgs/listTheme2/theme1.jpg',
            color:'#061d50'
        },
        {
            option:'./assets/images/themeBgs/listTheme2/theme2.jpg',
            color:'#e7dfdd'
        },
        {
            option:'./assets/images/themeBgs/listTheme2/theme3.jpg',
            color:'#b2d8db'
        },
        {
            option:'../assets/images/themeBgs/listTheme2/theme4.jpg',
            color:'#f9dbdb'
        },
        {
            option:'./assets/images/themeBgs/listTheme2/theme5.jpg',
            color:'#bab8c3'
        },
        {
            option:'./assets/images/modalThemes/modalTheme3/theme1.jpg',
            color:'#3a3a3a'
        },
        {
            color:'#170f23'
        },
        {
            color:'#101f3f'
        },
        {
            color:'#1d375a'
        },
        {
            color:'#1d375a'
        },
    ],
    defaultProperties(){
        Object.defineProperty(this,'cunrentBackground',{
            get:function(){
                return this.backgorundList[this.cunrentIndex];
            }
        });
    },
    randleBackground(){
        applyBackgroundBtns.forEach(function(applyBackgroundBtn){
            applyBackgroundBtn.onclick = function(e){
                backgorunds.cunrentIndex = Number(e.target.dataset.index);
                if( backgorunds.cunrentIndex === 3 || 
                    backgorunds.cunrentIndex === 4 ||
                    backgorunds.cunrentIndex === 5 ||
                    backgorunds.cunrentIndex === 6){
                    body.classList.add('active');
                    }else{
                        body.classList.remove('active')
                    }
                header.style.background = `${backgorunds.cunrentBackground.color}`;
                headerPlaylist.style.background = `${backgorunds.cunrentBackground.color}`;
                backgorunds.applyBackground();
            }
        })
    },
    applyBackground(){
        app.style.backgroundImage = `url("${this.cunrentBackground.option}")`
        app.style.backgroundColor = `${this.cunrentBackground.color}`
        app.style.backgroundRepeat = 'repeat';
        app.style.backgroundPosition = '-20px 0';
        app.style.backgroundSize = '1920px auto';
        header.style.background = `${backgorunds.cunrentBackground.color}`;
        headerPlaylist.style.background = `${backgorunds.cunrentBackground.color}`;
        headerNavbar.style.background = `rgba(${backgorunds.cunrentBackground.color},0.5)`;
    },
    stars(){
        this.defaultProperties();
        this.applyBackground();   
        this.randleBackground();   
    }
}
backgorunds.stars();

// app.onscroll = function(e){
//     if(e.scrollY > 1){
//         // header.style.background = `${backgorunds.cunrentBackground.color}`;
//         headerPlaylist.style.background = `${backgorunds.cunrentBackground.color}`;
//         header.style.backgroundRepeat = 'no-repeat';
//         header.style.backgroundPosition = 'center';
//         header.style.backgroundSize = 'cover';
//         headerPlaylist.style.backgroundRepeat = 'no-repeat';
//         headerPlaylist.style.backgroundPosition = 'center';
//         headerPlaylist.style.backgroundSize = 'cover';
//     }else{
//         // header.style.background = 'none'
//     }
// }

openBackground.onclick = function(){
    appBackground.style.display = 'block'
}
closeBackground.onclick = function(){
    appBackground.style.display = 'none'
}