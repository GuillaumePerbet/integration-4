var playerList = document.getElementsByClassName("audioplayer");
var playerObjects =[];

window.onload = initPlayers();

function initPlayers(){
    for (let i = 0; i < playerList.length; i++) {

        let newPlayer = new Object();
        newPlayer.song = playerList[i].querySelector("audio");
        newPlayer.songSlider = playerList[i].querySelector(".song-slider");
        newPlayer.currentTime = playerList[i].querySelector('.current-time');
        newPlayer.volumeSlider = playerList[i].querySelector('.volume-slider');
        newPlayer.volumeBar = playerList[i].querySelector('.volume-time');
        newPlayer.timerBar = playerList[i].querySelector('.slider-time');
        newPlayer.volumeSlider.value = newPlayer.song.volume;
        playerObjects.push(newPlayer);
    }
}

setInterval(updateSongSlider, 100);

function updateSongSlider () {
    for (let i = 0; i < playerObjects.length; i++) {
        var c =Math.round(playerObjects[i].song.currentTime);
        playerObjects[i].songSlider.value = c;
        playerObjects[i].currentTime.textContent = convertTime(c);
        showDuration(i);
    }
}

function convertTime (secs){
    var min = Math.floor(secs/60);
    var sec = secs % 60;
    min = (min < 10) ? "0"+ min : min;
    sec = (sec < 10) ? "0"+ sec : sec;
    return (min + ":" + sec);
}

function showDuration (i){
    var d = Math.floor(playerObjects[i].song.duration);
    playerObjects[i].songSlider.setAttribute("max", d);
    playerObjects[i].timerBar.style.width = String(Math.floor((75/d)*playerObjects[i].song.currentTime))+"px";
}

function playOrPauseSong(img,i){
    showDuration(i);
    if(playerObjects[i].song.paused){
        playerObjects[i].song.play();
        img.src = "media/audioplayer/pause.svg";
    }
    else{
        playerObjects[i].song.pause();
        img.src = "media/audioplayer/play.svg";
    }
}

function seekSong(i){
    playerObjects[i].song.currentTime = playerObjects[i].songSlider.value;
    playerObjects[i].currentTime.textContent = convertTime(playerObjects[i].song.currentTime);
}
function adjustVolume(i){
    playerObjects[i].song.volume= playerObjects[i].volumeSlider.value;
    playerObjects[i].volumeBar.style.width = String(Math.floor(50*playerObjects[i].song.volume))+"px";
}

function muteOrUnmute(img,i){
    if(playerObjects[i].song.muted){
        img.src = "media/audioplayer/VolumeOn.svg";
        adjustVolume(i)
    }
    else{
        img.src = "media/audioplayer/VolumeOff.svg";
        playerObjects[i].volumeBar.style.width = "0px";
    }
    playerObjects[i].song.muted = !playerObjects[i].song.muted;
}
