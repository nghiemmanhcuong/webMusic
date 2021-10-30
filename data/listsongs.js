const thesong = document.getElementById('thesong');
const thesongContainer = document.querySelector('.thesong__container');
import removeActiveNavbar from '../main.js';
import removeOverview from './overview.js';
import {
    cdName,
    cdAuthor,
    cdThumb,
    audio,
    cdAnimation
} from './songs.js';

thesong.onclick = ()=>{
    removeActiveNavbar();
    removeOverview();
    thesong.classList.add('active');
    setTimeout(function(){
        alert("chức năng chưa được tối ưu xin thông cảm \"thank kiu\"");
    },1000);
}

const listsongs = {
    listsongIndex:0,
    listsongsGround:[
        {
            name: "Cứ Chill Thôi",
            singer: "Suni Hạ Linh & Rhymastic",
            path: "./assets/songs/song1.mp3",
            image: "./assets/images/songs/song1.jpg",
            albums:"dễ thương",
            time:"04:41"
        },
        {
            name: "Crush",
            singer: "An An x Vani",
            path: "./assets/songs/song2.mp3",
            image: "./assets/images/songs/song2.jpg",
            albums:"nhạc trẻ",
            time:"04:06"
        },
        {
            name: "Em Có Nghe",
            singer: "Kha",
            path: "./assets/songs/song3.mp3",
            image: "./assets/images/songs/song3.jpg",
            albums:"Tình yêu",
            time:"04:33"
        },
        {
            name: "LẠC TRÔI ",
            singer: "SƠN TÙNG M-TP",
            path: "./assets/songs/song4.mp3",
            image: "./assets/images/songs/song4.jpg",
            albums:"Tình yêu",
            time:"04:33"
        },
        {
            name: "dreAMEE",
            singer: "Hoàng Dũng, Ricky Star",
            path: "./assets/songs/song5.mp3",
            image: "./assets/images/songs/song5.jpg",
            albums:"Tình yêu",
            time:"02:42"
        },
        {
            name: "Damn",
            singer: "Raftaar x kr$na",
            path: "./assets/songs/song6.mp3",
            image: "./assets/images/songs/song6.jpg",
            albums:"Tình yêu",
            time:"03:54"
        },
        {
            name: "Anh Đã Quen Với Cô Đơn",
            singer: "Soobin Hoàng Sơn",
            path: "./assets/songs/song7.mp3",
            image: "./assets/images/songs/song7.jpg",
            albums:"Tình yêu",
            time:"03:22"
        },
        {
            name: "Túy Âm",
            singer: "Xesi x Masew x Nhatnguyen",
            path: "./assets/songs/song8.mp3",
            image: "./assets/images/songs/song8.jpg",
            albums:"nhạc hoa",
            time:"03:54"
        },
        {
            name: "KÉM DUYÊN",
            singer: "RUM X NIT X MASEW",
            path: "./assets/songs/song9.mp3",
            image: "./assets/images/songs/song9.jpg",
            albums:"Tình yêu",
            time:"03:45"
        },
        {
            name: "một năm mới bình an",
            singer: "sơn tùng M-TP",
            path: "./assets/songs/song10.mp3",
            image: "./assets/images/songs/song10.jpg",
            albums:"tết",
            time:"04:12"
        },
        {
            name: "seve",
            singer: "Tez Cadey",
            path: "./assets/songs/song11.mp3",
            image: "./assets/images/songs/song11.jpg",
            albums:"vivo",
            time:"05:34"
        },
        {
            name: "ái nộ",
            singer: "Masew & Khoi Vu",
            path: "./assets/songs/song12.mp3",
            image: "./assets/images/songs/song12.jpg",
            albums:"nhạc trẻ",
            time:"03:21"
        },
        {
            name: "cưới thôi",
            singer: "Masew, Masiu, B Ray, TAP",
            path: "./assets/songs/song13.mp3",
            image: "./assets/images/songs/song13.jpg",
            albums:"nhạc trẻ",
            time:"03:03"
        },
        {
            name: "thê lương",
            singer: "Phúc Chinh",
            path: "./assets/songs/song14.mp3",
            image: "./assets/images/songs/song14.jpg",
            albums:"nhạc trẻ",
            time:"05:13"
        },
        {
            name: "dịu dàng em đến",
            singer: "RedT & DTAP",
            path: "./assets/songs/song15.mp3",
            image: "./assets/images/songs/song15.jpg",
            albums:"nhạc trẻ",
            time:"03:05"
        },
    ],
}

function renderSong(){
    const htmls = listsongs.listsongsGround.map((song,index)=>{
        return `
        <div class="thesong__playlist ${index === listsongs.listsongIndex?"active":''} row" data-index = "${index}">
            <div class="thesong__playlist-info row">
                <svg  style = "color:#aaa" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-music-note-beamed" viewBox="0 0 16 16">
                    <path d="M6 13c0 1.105-1.12 2-2.5 2S1 14.105 1 13c0-1.104 1.12-2 2.5-2s2.5.896 2.5 2zm9-2c0 1.105-1.12 2-2.5 2s-2.5-.895-2.5-2 1.12-2 2.5-2 2.5.895 2.5 2z"/>
                    <path fill-rule="evenodd" d="M14 11V2h1v9h-1zM6 3v10H5V3h1z"/>
                    <path d="M5 2.905a1 1 0 0 1 .9-.995l8-.8a1 1 0 0 1 1.1.995V3L5 4V2.905z"/>
                </svg>
                <div class="thesong__playlist-info--thumb">
                    <img class="thesong__playlist-info--img" src="${song.image}" alt="">
                </div>
                <div class="thesong__playlist-info--content">
                    <h4 class="thesong__playlist-info--title">${song.name}</h4>
                        <span class="thesong__playlist-info--subtitle">${song.singer}</span>
                </div>
            </div>
            <div class="thesong__playlist-time row">
                04:30
                <div class="thesong__playlist-icon row">
                    <i class="bi bi-mic-fill mic"></i>
                    <i class="bi bi-heart-fill heart"></i>
                    <i class="bi bi-three-dots dots"></i>
                </div>
            </div>                  
        </div>
        `
    });

    thesongContainer.innerHTML = htmls.join('');
}

function defaultEvent(){
    thesongContainer.onclick = (e)=>{
        const playlistElement = e.target.closest('.thesong__playlist');
        listsongs.listsongIndex = playlistElement.dataset.index;
        removePlaylistActive();
        playSong();
    }
}

function removePlaylistActive(){
    const playlistActive = document.querySelector('.thesong__playlist.active');
    const playlists = document.querySelectorAll('.thesong__playlist');
    playlistActive.classList.remove('active');
    playlists[listsongs.listsongIndex].classList.add('active');
}

function playSong(){
    cdName.textContent = `${listsongs.listsongsGround[listsongs.listsongIndex].name}`;
    cdAuthor.textContent = `${listsongs.listsongsGround[listsongs.listsongIndex].singer}`;
    cdThumb.style.backgroundImage =  `url("${listsongs.listsongsGround[listsongs.listsongIndex].image}")`;
    audio.src = `${listsongs.listsongsGround[listsongs.listsongIndex].path}`;
    cdAnimation.play();
    audio.play();
}

function stars(){
    renderSong();
    defaultEvent();
}
stars();