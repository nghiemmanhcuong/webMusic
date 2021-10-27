const hotsonglist = document.querySelector('.featured__main');
import {
    cdName,
    cdAuthor,
    cdThumb,
    audio,
    cdAnimation
} from './songs.js';

const hotSong = {
    hotSongIndex:0,
    hotsongs:[
        {
            name:'yêu là cưới',
            author:'X2X',
            image:'./assets/images/Hot Songs/hotsong1.jpg',
            path:'./assets/hotsongs/hotsong1.mp3'
        },
        {
            name:'em hứa thế nào',
            author:'như việt',
            image:'./assets/images/Hot Songs/hotsong2.jpg',
            path:'./assets/hotsongs/hotsong2.mp3'
        },
        {
            name:'khuê mộc lang',
            author:'Hương Ly && Jombie ',
            image:'./assets/images/Hot Songs/hotsong3.jpg',
            path:'./assets/hotsongs/hotsong4.mp3'
        },
        {
            name:'cô đơn dành cho ai',
            author:'Lee Ken x Nal',
            image:'./assets/images/Hot Songs/hotsong4.jpg',
            path:'./assets/hotsongs/hotsong4.mp3'
        },
        {
            name:'thương thầm',
            author:'NB3 hoài bảo',
            image:'./assets/images/Hot Songs/hotsong5.jpg',
            path:'./assets/hotsongs/hotsong5.mp3'
        },
        {
            name:'bỏ em vào ba lo',
            author:'tân trần',
            image:'./assets/images/Hot Songs/hotsong6.jpg',
            path:'./assets/hotsongs/hotsong6.mp3'
        },
        {
            name:'vách ngọc ngà',
            author:'hương ly',
            image:'./assets/images/Hot Songs/hotsong7.jpg',
            path:'./assets/hotsongs/hotsong7.mp3'
        },
        {
            name:'đom đóm',
            author:'JACK',
            image:'./assets/images/Hot Songs/hotsong8.jpg',
            path:'./assets/hotsongs/hotsong8.mp3'
        },
        {
            name:'chắc gì anh yêu cô ấy',
            author:'hương ly',
            image:'./assets/images/Hot Songs/hotsong9.jpg',
            path:'./assets/hotsongs/hotsong9.mp3'
        },
        {
            name:'chỉ muốn bên em lúc này',
            author:'huy vạc',
            image:'./assets/images/Hot Songs/hotsong10.jpg',
            path:'./assets/hotsongs/hotsong10.mp3'
        },
        {
            name:'càng lớn càng cô đơn',
            author:'JAYK II',
            image:'./assets/images/Hot Songs/hotsong11.jpg',
            path:'./assets/hotsongs/hotsong11.mp3'
        },
        {
            name:'ngàn yêu thương',
            author:'huy vạc',
            image:'./assets/images/Hot Songs/hotsong12.jpg',
            path:'./assets/hotsongs/hotsong12.mp3'
        },
    ],
    defaultProperties(){
        Object.defineProperty(this,'cunrentHotsong',{
            get:function(){
                return hotSong.hotsongs[hotSong.hotSongIndex]
            }
        })
    }
}

hotsonglist.onclick = function(e){
    const hotSongElemnt = e.target.closest('.slide__img');
    if(hotSongElemnt){
        hotSong.hotSongIndex = hotSongElemnt.dataset.index;
    }
    cdName.textContent = hotSong.cunrentHotsong.name;
    cdAuthor.textContent = hotSong.cunrentHotsong.author;
    cdThumb.style.backgroundImage = `url('${hotSong.cunrentHotsong.image}')`
    audio.src = hotSong.cunrentHotsong.path;
    cdAnimation.play();
    audio.play();
}
function startHotSong(){
    hotSong.defaultProperties();
}
startHotSong();

