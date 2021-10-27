const app = document.querySelector('.app');
const appBackground = document.querySelector('.app__backgorund');
const openBackground = document.querySelector('.background__open-btn');
const closeBackground = document.querySelector('.background__close-btn');
const applyBackgroundBtns = document.querySelectorAll('.theme__action-btn');

const backgorunds = {
    cunrentIndex:0,
    backgorundList:[
        {
            option:'/assets/images/themeBgs/listTheme1/theme1.jpg',
            color:'#37075d'
        },
        {
            option:'/assets/images/themeBgs/listTheme1/theme2.jpg',
            color:'#282828'
        },
        {
            option:'/assets/images/themeBgs/listTheme2/theme1.jpg',
            color:'#061d50'
        },
        {
            option:'/assets/images/themeBgs/listTheme2/theme2.jpg',
            color:'#e7dfdd'
        },
        {
            option:'/assets/images/themeBgs/listTheme2/theme3.jpg',
            color:'#b2d8db'
        },
        {
            option:'/assets/images/themeBgs/listTheme2/theme4.jpg',
            color:'#f9dbdb'
        },
        {
            option:'/assets/images/themeBgs/listTheme2/theme5.jpg',
            color:'#bab8c3'
        },
        {
            option:'/assets/images/modalThemes/modalTheme3/theme1.jpg',
            color:'#fff'
        },
        {
            option:'/assets/images/modalThemes/modalTheme3/theme2.jpg',
            color:'#1e1e1e'

        },
        {
            option:'/assets/images/modalThemes/modalTheme3/theme3.jpg',
            color:'#170f23'
        },
        {
            option:'/assets/images/modalThemes/modalTheme3/theme4.jpg',
            color:'#101f3f'
        },
        {
            option:'/assets/images/modalThemes/modalTheme3/theme5.jpg',
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
                headerPlaylist.style.background = `${backgorunds.cunrentBackground.color}`;
                backgorunds.applyBackground();
            }
        })
    },
    applyBackground(){
        app.style.backgroundImage = `url("${this.cunrentBackground.option}")`
        app.style.backgroundColor = `${this.cunrentBackground.color}`
        app.style.backgroundRepeat = 'repeat';
        app.style.backgroundPosition = '0 0';
        app.style.backgroundSize = '1920px auto';
    },
    stars(){
        this.defaultProperties();
        this.applyBackground();   
        this.randleBackground();   
    }
}
backgorunds.stars();

window.onscroll = function(){
    if(scrollY > 1){
        header.style.background = `${backgorunds.cunrentBackground.color}`;
        headerPlaylist.style.background = `${backgorunds.cunrentBackground.color}`;
        header.style.backgroundRepeat = 'no-repeat';
        header.style.backgroundPosition = 'center';
        header.style.backgroundSize = 'cover';
        headerPlaylist.style.backgroundRepeat = 'no-repeat';
        headerPlaylist.style.backgroundPosition = 'center';
        headerPlaylist.style.backgroundSize = 'cover';
    }else{
        header.style.background = 'none'
    }
}

openBackground.onclick = function(){
    appBackground.style.display = 'block'
}
closeBackground.onclick = function(){
    appBackground.style.display = 'none'
}