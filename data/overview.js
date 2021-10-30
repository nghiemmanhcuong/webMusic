/*remove overview*/
const toppickHotsongs = document.querySelector('.toppick-hotsongs');
const playlist = document.querySelector('.app__playlist');
const album = document.querySelector('.app__albums');
const mv = document.querySelector('.app__mv');
const artist = document.querySelector('.app__artist');
const thesongs = document.querySelector('.app__thesongs');
const overview = document.getElementById('overview');
import removeActiveNavbar from '../main.js';

function addOverview(){
    toppickHotsongs.style.display = 'flex';
    playlist.style.display = 'block';
    album.style.display = 'block';
    mv.style.display = 'block';
    artist.style.display = 'block';
    thesongs.style.display = 'none';
}
overview.onclick = function(){
    addOverview();
    removeActiveNavbar();
    overview.classList.add('active');
}

function removeOverview(){
    toppickHotsongs.style.display = 'none';
    playlist.style.display = 'none';
    album.style.display = 'none';
    mv.style.display = 'none';
    artist.style.display = 'none';
    thesongs.style.display = 'block';
}
export default removeOverview;


