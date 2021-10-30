const thesong = document.getElementById('thesong');
import removeActiveNavbar from '../main.js';

thesong.onclick = ()=>{
    removeActiveNavbar();
    thesong.classList.add('active');
}

const listsongs = {
    listsongsGround:[
        {

        }
    ]
}