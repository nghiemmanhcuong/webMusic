const listSongs = document.querySelector('.songs');
const cdName = document.querySelector('.cd__name-title');
const cdAuthor = document.querySelector('.cd__name-author');
const cdThumb = document.querySelector('.cd__thumb');
const audio = document.getElementById('audio');
const playBtn = document.querySelector('.btn-toggle-play');
const iconPlay = document.getElementById('icon-play');
const btnPrev = document.querySelector('.btn-prev');
const btnNext = document.querySelector('.btn-next');
const progress = document.getElementById('progress');
const btnRandom = document.querySelector('.btn-random');
const btnRepeat = document.querySelector('.btn-repeat');



const cdAnimation = cdThumb.animate([{
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
      path: "./songs/song1.mp3",
      image: "./img/song1.jpg",
      albums:"Tình yêu",
      time:"03:54"
    },
    {
      name: "Crush",
      singer: "An An x Vani",
      path: "./songs/song2.mp3",
      image: "./img/song2.jpg",
      albums:"Tình yêu",
      time:"03:54"
    },
    {
      name: "Em Có Nghe",
      singer: "Kha",
      path: "./songs/song11.mp3",
      image: "./img/song11.jpg",
      albums:"Tình yêu",
      time:"03:54"
    },
    {
      name: "LẠC TRÔI ",
      singer: "SƠN TÙNG M-TP",
      path: "./songs/song12.mp3",
      image: "./img/song12.jpg",
      albums:"Tình yêu",
      time:"03:54"
    },
    {
      name: "dreAMEE",
      singer: "Hoàng Dũng, Ricky Star",
      path: "./songs/song5.mp3",
      image: "./img/song5.jpg",
      albums:"Tình yêu",
      time:"03:54"
    },
    {
      name: "Damn",
      singer: "Raftaar x kr$na",
      path: "./songs/song6.mp3",
      image: "./img/song6.jpg",
      albums:"Tình yêu",
      time:"03:54"
    },
    {
      name: "Anh Đã Quen Với Cô Đơn",
      singer: "Soobin Hoàng Sơn",
      path: "./songs/song7.mp3",
      image: "./img/song7.jpg",
      albums:"Tình yêu",
      time:"03:54"
    },
    {
      name: "Túy Âm",
      singer: "Xesi x Masew x Nhatnguyen",
      path: "./songs/song8.mp3",
      image: "./img/song8.jpg",
      albums:"Tình yêu",
      time:"03:54"
    },
    {
      name: "KÉM DUYÊN",
      singer: "RUM X NIT X MASEW",
      path: "./songs/song9.mp3",
      image: "./img/song9.jpg",
      albums:"Tình yêu",
      time:"03:54"
    },
    {
      name: "HongKong1",
      singer: "Nguyễn Trọng Tài x San Ji x Double X",
      path: "./songs/song13.mp3",
      image: "./img/song13.jpg",
      albums:"Tình yêu",
      time:"03:54"
    },
  ],
  defaultProperties(){
    Object.defineProperty(this,'cunrentSong',{
      get:function(){
        return this.songs[this.curentIndex]
      }
    })
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
            <li class="song__img">
                <img src="${song.image}" alt="">
            </li>
            <li class="song__item"><a class="song__link" href="#">${song.name}</a></li>
            <li class="song__item"><a class="song__link" href="#">${song.albums}</a></li>
            <li class="song__item"><a class="song__link" href="#">${song.singer}</a></li>
            <li class="song__item"><a class="song__link" href="#">${song.time}</a></li>
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

  // click listSongs
  listSongs.onclick = function(e){
    const songElement = e.target.closest('.list__song:not(.active)');
    if(songElement){
      app.curentIndex = songElement.dataset.index;
      loadCurentSong();
      activeSong();
      audio.play();
    }
  }
}
