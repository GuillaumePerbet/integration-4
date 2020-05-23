var songSlider = document.getElementById('songSlider');
var currentTime = document.getElementById('currentTime');
var volumeSlider = document.getElementById('volumeSlider');
var volumeBar = document.getElementById('volumeTime');
var timerBar = document.getElementById('sliderTime');
var song = document.getElementById('song');
var songSiderClick = false;

window.onload = loadSong;

function loadSong () {
    volumeSlider.value = song.volume;
}
setInterval(updateSongSlider, 100);

function updateSongSlider () {
    var c =Math.round(song.currentTime);
    songSlider.value = c;
    currentTime.textContent = convertTime(c);
    showDuration();
}
function convertTime (secs){
    var min = Math.floor(secs/60);
    var sec = secs % 60;
    min = (min < 10) ? "0"+ min : min;
    sec = (sec < 10) ? "0"+ sec : sec;
    return (min + ":" + sec);
}

function showDuration (){
    var d = Math.floor(song.duration);
    songSlider.setAttribute("max", d);
    timerBar.style.width = String(Math.floor((75/d)*song.currentTime))+"px";
}

function playOrPauseSong(img){
    showDuration();
    if(song.paused){
        song.play();
        img.src = "media/audioplayer/pause.svg";
    }
    else{
        song.pause();
        img.src = "media/audioplayer/play.svg";
    }
}

function seekSong(){
    song.currentTime = songSlider.value;
    currentTime.textContent = convertTime(song.currentTime);
}
function adjustVolume(){
    song.volume= volumeSlider.value;
    volumeBar.style.width = String(Math.floor(50*song.volume))+"px";
}

function muteOrUnmute(img){
    if(song.muted){
        img.src = "media/audioplayer/VolumeOn.svg";
        adjustVolume()
    }
    else{
        img.src = "media/audioplayer/VolumeOff.svg";
        volumeBar.style.width = "0px";
    }
    song.muted = !song.muted;
}