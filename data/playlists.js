const playlistMain = document.querySelector('.playlist__slider-main');
const prevPlaylist = document.getElementById('prev-playlist');
const nextPlaylist = document.getElementById('next-playlist');


const playlists = {
    playlistGround:[
        {
            image:'',
            name:'<i class="ri-add-line"></i>',
            singer:'Tạo playlist mới'
        },
        {
            image:'./assets/images/playlists/playlist1.jpg',
            name:'V-Pop: The A-List',
            singer:'Zing MP3'
        },
        {
            image:'./assets/images/playlists/playlist3.jpg',
            name:'V-Pop: The A-List',
            singer:'Zing MP3'
        },
        {
            image:'./assets/images/playlists/playlist4.jpg',
            name:'V-Pop: The A-List',
            singer:'Zing MP3'
        },
        {
            image:'./assets/images/playlists/playlist5.jpg',
            name:'V-Pop: The A-List',
            singer:'Zing MP3'
        },
        {
            image:'./assets/images/playlists/playlist6.jpg',
            name:'V-Pop: The A-List',
            singer:'Zing MP3'
        },
        {
            image:'./assets/images/playlists/playlist7.jpg',
            name:'V-Pop: The A-List',
            singer:'Zing MP3'
        },
        {
            image:'./assets/images/playlists/playlist8.jpg',
            name:'V-Pop: The A-List',
            singer:'Zing MP3'
        },
        {
            image:'./assets/images/playlists/playlist9.jpg',
            name:'V-Pop: The A-List',
            singer:'Zing MP3'
        },
        {
            image:'./assets/images/playlists/playlist10.jpg',
            name:'V-Pop: The A-List',
            singer:'Zing MP3'
        },
        {
            image:'./assets/images/playlists/playlist11.jpg',
            name:'V-Pop: The A-List',
            singer:'Zing MP3'
        },
        {
            image:'./assets/images/playlists/playlist12.jpg',
            name:'V-Pop: The A-List',
            singer:'Zing MP3'
        },
        {
            image:'./assets/images/playlists/playlist13.jpg',
            name:'V-Pop: The A-List',
            singer:'Zing MP3'
        },
        {
            image:'./assets/images/playlists/playlist14.jpg',
            name:'V-Pop: The A-List',
            singer:'Zing MP3'
        },
        {
            image:'./assets/images/playlists/playlist15.jpg',
            name:'V-Pop: The A-List',
            singer:'Zing MP3'
        },
        {
            image:'./assets/images/playlists/playlist16.jpg',
            name:'V-Pop: The A-List',
            singer:'Zing MP3'
        },
        {
            image:'./assets/images/playlists/playlist17.jpg',
            name:'V-Pop: The A-List',
            singer:'Zing MP3'
        },
        {
            image:'./assets/images/playlists/playlist18.jpg',
            name:'V-Pop: The A-List',
            singer:'Zing MP3'
        },
        {
            image:'./assets/images/playlists/playlist19.jpg',
            name:'V-Pop: The A-List',
            singer:'Zing MP3'
        },
        {
            image:'./assets/images/playlists/playlist20.jpg',
            name:'V-Pop: The A-List',
            singer:'Zing MP3'
        },   
    ],
}

function defaultEvent(){
    const boxElement = document.querySelectorAll('.playlist__slider-box');
    let boxLenght = boxElement.length/5;
    let index = 0;
    nextPlaylist.onclick = ()=>{
        prevPlaylist.classList.remove('active');
        index++;
        if(index >= boxLenght - 1){
            index = boxLenght - 1;
            nextPlaylist.classList.add('active')
        }
        playlistMain.style.left = index*-(1200) + 'px';
    }
    prevPlaylist.onclick = ()=>{
        nextPlaylist.classList.remove('active');
        index--;
        if(index <= 0){
            index = 0;
            prevPlaylist.classList.add('active')
        }
        playlistMain.style.left = index*-(1200) + 'px';
    }
}

function renderPlaylist(){
    const htmls = playlists.playlistGround.map( (playlist) => {
        return `
            <div class="playlist__slider-box">
                <div class="playlist__slider-container">
                    <img src="${playlist.image}" alt="" class="playlist__slider-img">
                    <div class="playlist__slider-actions row">
                        <div class="playlist__slider-actions--icon">
                            <i class="fas fa-heart"></i>
                        </div>
                        <div class="playlist__slider-actions--icon">
                            <i class="far fa-play-circle"></i>
                        </div>
                        <div class="playlist__slider-actions--icon">
                            <i class="fas fa-comment-dots"></i>
                        </div>
                    </div>
                </div>
                <div class="playlist__slider-content">
                    <h4 class="playlist__slider-content-title"><a class="playlist__box-title--link"
                    href="#">${playlist.name}</a></h4>
                    <span class="playlist__slider-content-subtitle">${playlist.singer}</span>
                </div>
            </div>
        `
    });
    playlistMain.innerHTML = htmls.join('');
}
renderPlaylist();
defaultEvent();