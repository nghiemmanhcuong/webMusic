const headerNavbarOpen = document.getElementById('header-nav-open');
const headerNavbarclose = document.getElementById('header-nav-close');
export const headerNavbar = document.querySelector('.header__navbar');
const playListBtn = document.getElementById('playlist');
const albumBtn = document.getElementById('albums');
const mvBtn = document.getElementById('mv');
const artistBtn = document.getElementById('artist');
import {
    toppickHotsongs,
    playlist,
    album,
    mv,
    artist,
    thesongs
} from '/data/overview.js';

/*togger header Navbar*/
function toggerHeaderNavbar(){
    headerNavbarOpen.onclick = function(){
        headerNavbar.classList.add('active');
        headerNavbarclose.style.display = 'block';
    }
    headerNavbarclose.onclick = function(){
        headerNavbarclose.style.display = 'none';
        headerNavbar.classList.remove('active');
    }
}

/*removeActiveNavbar*/
function removeActiveNavbar(){
    const navbarItemActive = document.querySelector('.container__navbar-menu .active');
    navbarItemActive.classList.remove('active')
}
export default removeActiveNavbar;

/*open playlist*/
function openPlaylist(){
    playListBtn.onclick = ()=>{
        removeActiveNavbar();
        playListBtn.classList.add('active');
        toppickHotsongs.style.display = 'none';
        album.style.display = 'none';
        mv.style.display = 'none';
        artist.style.display = 'none';
        thesongs.style.display = 'none';
        playlist.style.display = 'block';
        playlist.classList.add('view');
    }
}

/*open album*/
function openAlbum(){
    albumBtn.onclick = ()=>{
        removeActiveNavbar();
        albumBtn.classList.add('active');
        toppickHotsongs.style.display = 'none';
        album.style.display = 'block';
        mv.style.display = 'none';
        artist.style.display = 'none';
        thesongs.style.display = 'none';
        playlist.style.display = 'none';
    }
}
/*open mv*/
function openMv(){
    mvBtn.onclick = ()=>{
        removeActiveNavbar();
        mvBtn.classList.add('active');
        toppickHotsongs.style.display = 'none';
        album.style.display = 'none';
        mv.style.display = 'block';
        artist.style.display = 'none';
        thesongs.style.display = 'none';
        playlist.style.display = 'none';
        mv.classList.add('view');
    }
}

/*open artist*/
function openArtist(){
    artistBtn.onclick = ()=>{
        removeActiveNavbar();
        artistBtn.classList.add('active');
        toppickHotsongs.style.display = 'none';
        album.style.display = 'none';
        mv.style.display = 'none';
        artist.style.display = 'block';
        thesongs.style.display = 'none';
        playlist.style.display = 'none';
        artist.classList.add('view');
    }
}

function starts(){
    openPlaylist();
    toggerHeaderNavbar();
    openAlbum();
    openMv();
    openArtist();
}
starts();
