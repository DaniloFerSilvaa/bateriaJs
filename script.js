key = '';
document.body.addEventListener('keyup', (event)=>{
    key = event.code.toLowerCase();
    playSound(key)
})

document.querySelector('.composer button').addEventListener('click',()=>{
    let song = document.querySelector('#input').value

    if (song !== '') {
        let songArray = song.split('')//split transforma um texto em array
        playComposition(songArray)
    }
})

function playSound(sound) {
    let audioElement = document.querySelector(`#s_${sound}`)
    let el = document.querySelector(`div[data-key="${sound}"]`);

    if(audioElement){
        audioElement.currentTime = 0
        audioElement.play();
    }
    el.classList.add('active');
    setTimeout(()=>{
        el.classList.remove('active')
    }, 300);
}

function playComposition(songArray) {
let wait = 0;

    for (let songItem of songArray) {
        setTimeout(()=>{
            playSound(`key${songItem.toLowerCase()}`)
        }, wait)

        wait += 250;
        
    }
} 