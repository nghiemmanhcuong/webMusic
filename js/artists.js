const artistMain = document.querySelector(".artist__main");
const prevArtist = document.getElementById('prev-artist');
const nextArtist = document.getElementById('next-artist');
let index = 0;

nextArtist.onclick = ()=>{
    prevArtist.classList.remove('active');
    index++
    if(index >= 2){
        nextArtist.classList.add('active');
        index = 2;
    }
    artistMain.style.left = index*(-1200) + 'px';    
}
prevArtist.onclick = ()=>{
    nextArtist.classList.remove('active');
    index--;
    if(index <= 0){
        index = 0
        prevArtist.classList.add('active');
    }
    artistMain.style.left = index*(-1200) + 'px';  
}

const artists = {
    artistsList:[
        {
            image:'./assets/images/artists/artist1.jpg',
            singer:'bin',
            follow:'265k Follow'
        },
        {
            image:'./assets/images/artists/artist2.jpg',
            singer:'Phương Ly ',
            follow:'77K  Follow'
        },
        {
            image:'./assets/images/artists/artist3.jpg',
            singer:'AMEE ',
            follow:'317K  Follow'
        },
        {
            image:'./assets/images/artists/artist4.jpg',
            singer:'MCK',
            follow:'52K  Follow'
        },
        {
            image:'./assets/images/artists/artist5.jpg',
            singer:'Sơn Tùng M-TP',
            follow:'2.1M  Follow'
        },
        {
            image:'./assets/images/artists/artist6.jpg',
            singer:'Mr. Siro ',
            follow:'735K  Follow'
        },
        {
            image:'./assets/images/artists/artist7.jpg',
            singer:'Han Sara ',
            follow:'158K  Follow'
        },
        {
            image:'./assets/images/artists/artist8.jpg',
            singer:'Bích Phương ',
            follow:'368K  Follow'
        },
        {
            image:'./assets/images/artists/artist9.jpg',
            singer:'Soobin ',
            follow:'435K  Follow'
        },
        {
            image:'./assets/images/artists/artist10.jpg',
            singer:'Chi Dân ',
            follow:'516K Follow'
        },  
        {
            image:'./assets/images/artists/artist11.jpg',
            singer:'taylor swift',
            follow:'2.3m Follow'
        },  
        {
            image:'./assets/images/artists/artist12.jpg',
            singer:'justin bieber',
            follow:'1.3B Follow'
        }, 
        {
            image:'./assets/images/artists/artist13.jpg',
            singer:'vũ cát tường',
            follow:'77k Follow'
        }, 
        {
            image:'./assets/images/artists/artist14.jpg',
            singer:'JACK',
            follow:'956k Follow'
        },
        {
            image:'./assets/images/artists/artist15.jpg',
            singer:'phương mỹ chi',
            follow:'56k Follow'
        },
    ],
    renderArtist(){
        const htmls = this.artistsList.map(function(artist){
            return `
                <div class="artist__box">
                    <div class="artist__box-avatar">
                        <img src="${artist.image}" alt="" class="artist__box-img">
                        <div class="artist__box-interact row">
                            <i class="far fa-play-circle artist__box-playicon"></i>
                        </div>
                    </div>
                    <div class="artist__box-content">
                        <div class="artist__box-name row">
                            <h4 class="artist__box-title"><a class="artist__box-title--link"
                                    href="#">${artist.singer}</a></h4>
                            <i class="fas fa-star"></i>
                        </div>
                        <p class="atist__box-subtitle">${artist.follow}</p>
                        <div class="artist__box-follow">
                            <i class="fas fa-check"></i>
                            followed
                        </div>
                    </div>
                </div>        
            `
        })
        artistMain.innerHTML = htmls.join('');
    },
}
artists.renderArtist();