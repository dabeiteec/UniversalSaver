
function windowFilmChecked(){
    const windowFilm = document.querySelector('#button_film')
    const closeFilm= document.querySelector('.close')
    const wf = document.querySelector('#window_film')
    closeFilm.addEventListener('click', () => wf.classList.add('hidden'));
    windowFilm.addEventListener('click', (event) => event.stopPropagation());
    windowFilm.addEventListener('click', () => wf.classList.remove('hidden'));
}
function windowSeriesCheked(){
    const windowSeries = document.querySelector('#button_series')
    const close = document.querySelector('.close')
    const ws = document.querySelector('#window_series')
    // console.log(close);
    // close.addEventListener('click', () => ws.classList.add('hidden'));
    document.addEventListener('click', () => ws.classList.add('hidden'));
    windowSeries.addEventListener('click', (event) => event.stopPropagation());
    windowSeries.addEventListener('click', () => ws.classList.remove('hidden'));
}
function windowAnimeCheked(){
    const windowAnime = document.querySelector('#button_anime')
    const close = document.querySelector('.close')
    const wa = document.querySelector('#window_anime')
    // close.addEventListener('click', () => wa.classList.add('hidden'));
    document.addEventListener('click', () => wa.classList.add('hidden'));
    windowAnime.addEventListener('click', (event) => event.stopPropagation());
    windowAnime.addEventListener('click', () => wa.classList.remove('hidden'));
}
function windowCartoonCheked(){
    const windowCartoon = document.querySelector('#button_cartoon')
    const close = document.querySelector('.close')
    const wc = document.querySelector('#window_cartoon')
    // close.addEventListener('click', () => wa.classList.add('hidden'));
    document.addEventListener('click', () => wc.classList.add('hidden'));
    windowCartoon.addEventListener('click', (event) => event.stopPropagation());
    windowCartoon.addEventListener('click', () => wc.classList.remove('hidden'));
}
function windowGameCheked(){
    const windowGame = document.querySelector('#button_game')
    const close = document.querySelector('.close')
    const wg = document.querySelector('#window_game')
    // close.addEventListener('click', () => wg.classList.add('hidden'));
    document.addEventListener('click',()=> wg.classList.add('hidden'));
    windowGame.addEventListener('click', (event) => event.stopPropagation());
    windowGame.addEventListener('click', () => wg.classList.remove('hidden'));
}
function pinkColorImg(){
    const blueImg = document.querySelector('#button_blue_img')
    const pinkImg = document.querySelector('#button_pink_img')
    const coiceImgPink=document.querySelector('#blue')
    blueImg.addEventListener('click', () => coiceImgPink.classList.remove('hidden'));
    pinkImg.addEventListener('click', (event) => event.stopPropagation());
    pinkImg.addEventListener('click', () => coiceImgPink.classList.add('hidden'));
}
function blueColorImg(){
    const blueImg = document.querySelector('#button_blue_img')
    const pinkImg = document.querySelector('#button_pink_img') 
    const coiceImgBlue=document.querySelector('#pink') 
    pinkImg.addEventListener('click', () => coiceImgBlue.classList.remove('hidden'));    
    blueImg.addEventListener('click', (event) => event.stopPropagation());
    blueImg.addEventListener('click', () => coiceImgBlue.classList.add('hidden'));
    
    coiceImgBlue.classList.add('hidden');
}
function border_button_color(){
    const borderBlueImg = document.querySelector('#button_blue_img')
    const borderPinkImg = document.querySelector('#button_pink_img')

    borderPinkImg.addEventListener('click', () => borderBlueImg.classList.remove('border_button_color'));
    borderBlueImg.addEventListener('click', () => borderPinkImg.classList.remove('border_button_color'));
    borderBlueImg.addEventListener('click', (event) => event.stopPropagation());
    borderPinkImg.addEventListener('click', () => borderPinkImg.classList.add('border_button_color'));
    borderBlueImg.addEventListener('click', () => borderBlueImg.classList.add('border_button_color'));
    borderBlueImg.classList.add('border_button_color');
}
// function blueColorImg(){
//     const blueImg = document.querySelector('#button_blue_img')
//     const pinkImg = document.querySelector('#button_pink_img') 
//     const blueFilm=document.querySelector('#pink_film') 

//     pinkImg.addEventListener('click', () => blueFilm.classList.remove('hidden'));    
//     blueImg.addEventListener('click', (event) => event.stopPropagation());
//     blueImg.addEventListener('click', () => blueFilm.classList.add('hidden'));
    
//     blueFilm.classList.add('hidden');
// }
// function pinkColorImg(){
//     const blueImg = document.querySelector('#button_blue_img')
//     const pinkImg = document.querySelector('#button_pink_img')
//     const pinkFilm=document.querySelector('#blue_film')
//     const pinkSinema=document.querySelector('#blue_film')
//     const pinkAnime=document.querySelector('#blue_film')
//     const pinkCartoon=document.querySelector('#blue_film')
//     const pinkFilm=document.querySelector('#blue_film')

//     blueImg.addEventListener('click', () => pinkFilm.classList.remove('hidden'));
//     pinkImg.addEventListener('click', (event) => event.stopPropagation());
//     pinkImg.addEventListener('click', () => pinkFilm.classList.add('hidden'));
// }
