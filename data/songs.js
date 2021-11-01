const listSongs = document.querySelector('.songs');
export const cdName = document.querySelector('.cd__name-title');
export const cdAuthor = document.querySelector('.cd__name-author');
export const cdThumb = document.querySelector('.cd__thumb');
export const audio = document.getElementById('audio');
const playBtn = document.querySelector('.btn-toggle-play');
const iconPlay = document.getElementById('icon-play');
const btnPrev = document.querySelector('.btn-prev');
const btnNext = document.querySelector('.btn-next');
const progress = document.getElementById('progress');
const btnRandom = document.querySelector('.btn-random');
const btnRepeat = document.querySelector('.btn-repeat');
const btnVolumeUP = document.querySelector('.fa-volume-up');
const btnVolumeMute = document.querySelector('.fa-volume-mute');
const cdIcon = document.querySelector('.cd__icon');


export const cdAnimation = cdThumb.animate([{
  transform : 'rotate(360deg)',
}],{
  duration:10000,
  iterations:Infinity
})
cdAnimation.pause();

const app = {
  curentIndex:0,
  isplaying:false,
  isRandom:false,
  isRepeat:false,
  songs:[
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
    {
      name: "Nếu Em Không Hạnh Phúc ",
      singer: "Long Hải",
      path: "./assets/songs/song16.mp3",
      image: "./assets/images/songs/song16.jpg",
      albums:"nhạc dj",
      time:"04:15"
    },
  ],
  defaultProperties(){
    Object.defineProperty(this,'cunrentSong',{
      get:function(){
        return this.songs[this.curentIndex]
      }
    });
  }
}

function start(){
  app.defaultProperties();
  loadCurentSong();
  handleEvent();
  readerSong();
}
start()

function readerSong(){
    const htmls = app.songs.map(function(song,index){
        return `
        <ul class="list__song ${index === app.curentIndex ? 'active':''} row" data-index = "${index}">
            <div class = "music-bar">
              <span style = "--i:4;"></span>
              <span style = "--i:3;"></span>
              <span style = "--i:2;"></span>
              <span style = "--i:1;"></span>
            </div>
            <li class="song__img">
                <img src="${song.image}" alt="">
            </li>
            <li class="song__item">${song.name}</li>
            <li class="song__item">${song.albums}</li>
            <li class="song__item">${song.singer}</li>
            <li class="song__item">${song.time}</li>
        </ul>
        `
    })
    listSongs.innerHTML = htmls.join('');
}

function loadCurentSong(){
    cdName.textContent = app.cunrentSong.name;
    cdAuthor.textContent = app.cunrentSong.singer;
    cdThumb.style.backgroundImage = `url('${app.cunrentSong.image}')`
    audio.src = app.cunrentSong.path;
}

function playRandomSong(){
  let newIndex;
    do{
      newIndex = Math.floor(Math.random() * app.songs.length)
    }while(newIndex === app.curentIndex)
    app.curentIndex = newIndex;
    loadCurentSong();
}

function activeSong(){
  const songActive = document.querySelector('.songs .active');
  const song = document.querySelectorAll('.list__song')
  songActive.classList.remove('active');
  song[app.curentIndex].classList.add('active')
}

function scrollToSongActive(){
  document.querySelector('.songs .active').scrollIntoView({
    behavior:'smooth',
    block:'nearest'
  })
}

function handleEvent(){
  // play song
  playBtn.onclick = function(){
    if(app.isplaying){
      audio.pause();
      cdAnimation.pause();
    }else{
      audio.play();
      cdAnimation.play();
    }  
  }
  audio.onplay = function(){
    iconPlay.classList.remove('fa-play');
    iconPlay.classList.add('fa-pause');
    app.isplaying = true;
  }
  audio.onpause = function(){
    iconPlay.classList.add('fa-play');
    iconPlay.classList.remove('fa-pause');
    app.isplaying = false;
  }

  audio.onended = function(){
    if(app.isRepeat){
      audio.play()
    }else{
      btnNext.click();
    }
  }

  // next and prev song
  btnNext.onclick = function(){
    if(app.isRandom){
      playRandomSong();
    }else{
      app.curentIndex++;
      if(app.curentIndex >= app.songs.length){
      app.curentIndex = 0;
    }
    loadCurentSong();
    }
    activeSong();
    scrollToSongActive();
    audio.play();
  }

  btnPrev.onclick = function(){
    if(app.isRandom){
      playRandomSong();
    }else{
      app.curentIndex--;
      if(app.curentIndex < 0){
      app.curentIndex = app.songs.length -1
    }
    loadCurentSong();
    }
    activeSong();
    scrollToSongActive();
    audio.play();
  }

  // song update
  audio.ontimeupdate = function(){
    if(audio.duration){
      const currentProgress = audio.currentTime / audio.duration * 100;
      progress.value = currentProgress;
    }
  }

  // tua song
  progress.onchange = function(e){
    const seekTime = audio.duration / 100 * e.target.value;
    audio.currentTime = seekTime;
  }
  
  // tua bằng bàn phím
  document.onkeydown = function(e){
    switch(e.keyCode){
      case 39:
          audio.currentTime++;
          if(audio.currentTime = audio.duration){
            audio.currentTime = audio.duration
          }
          audio.play();
      case 37:
        audio.currentTime++;
        if(audio.currentTime = 0){
          audio.currentTime = 0;
        }
        audio.play();     
    }
  }

  // song random
  btnRandom.onclick = function(){
    app.isRandom = !app.isRandom;
    btnRandom.classList.toggle('active',app.isRandom);
  }

  // song repeat
  btnRepeat.onclick = function(){
    app.isRepeat = !app.isRepeat;
    btnRepeat.classList.toggle('active',app.isRepeat);
  }

  btnVolumeUP.onclick = function(){
    cdIcon.classList.add('playing');
    audio.volume = 0;
  }

  btnVolumeMute.onclick = function(){
    cdIcon.classList.remove('playing');
    audio.volume = 1;
  }


  // click listSongs
  listSongs.onclick = function(e){
    const songElement = e.target.closest('.list__song:not(.active)');
    if(songElement){
      app.curentIndex = songElement.dataset.index;
      loadCurentSong();
      activeSong();
      cdAnimation.play();
      audio.play();
    }
  }
}
