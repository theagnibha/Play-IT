console.log("Welcome to Play IT");

//Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');

let songs = [
    {songName: "Maula Mere", filePath: "songs/1.mp3", coverPath:"covers/1.jpg"},
    {songName: "Chand Chupa Badal Me", filePath: "songs/2.mp3", coverPath:"covers/2.jpg"},
    {songName: "Kaise Mujhe Tum Milgayi", filePath: "songs/3.mp3", coverPath:"covers/3.jpg"},
    {songName: "Sau Dard Hai", filePath: "songs/4.mp3", coverPath:"covers/4.jpg"},
]


//audioElement.play();

//Handle Play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }
})

//Listen to Events
audioElement.addEventListener('timeupdate', ()=>{ 
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})
