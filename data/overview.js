/*remove overview*/
export const toppickHotsongs = document.querySelector('.toppick-hotsongs');
export const playlist = document.querySelector('.app__playlist');
export const album = document.querySelector('.app__albums');
export const mv = document.querySelector('.app__mv');
export const artist = document.querySelector('.app__artist');
export const thesongs = document.querySelector('.app__thesongs');
const overview = document.getElementById('overview');
import removeActiveNavbar from '../main.js';

function addOverview(){
    toppickHotsongs.style.display = 'flex';
    playlist.style.display = 'block';
    album.style.display = 'block';
    mv.style.display = 'block';
    artist.style.display = 'block';
    thesongs.style.display = 'none';
    playlist.classList.remove('view');
    mv.classList.remove('view');
    artist.classList.remove('view');
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
}
export default removeOverview;
