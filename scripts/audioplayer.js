// Count Audio Players
let playerList = document.getElementsByClassName("audioplayer");
// List Player Objects
let playerObjects =[];

// Initialize Player Objects and components after window is loaded
window.onload = function(){
    initPlayers();
}
function initPlayers(){
    // Create player object for each listed audio player
    for (let i = 0; i < playerList.length; i++) {
        let newPlayer = new Object();
        // audio component
        newPlayer.song = playerList[i].querySelector("audio");
        // timer component
        newPlayer.currentTime = playerList[i].querySelector('.current-time');
        // time slider component
        newPlayer.songSlider = playerList[i].querySelector(".song-slider");
        let songvalue = 'seekSong('+i+')'
        newPlayer.songSlider.setAttribute('oninput', songvalue);
        newPlayer.timerBar = playerList[i].querySelector('.slider-time');
        // volume slider component
        newPlayer.volumeSlider = playerList[i].querySelector('.volume-slider');
        let volvalue = 'adjustVolume('+i+')'
        newPlayer.volumeSlider.setAttribute('oninput', volvalue);
        newPlayer.volumeBar = playerList[i].querySelector('.volume-time');
        // Play-Pause button
        newPlayer.playBtn = playerList[i].querySelector('.play-btn');
        let playvalue = 'playOrPauseSong(this,'+i+')'
        newPlayer.playBtn.setAttribute('onclick', playvalue);
        // Mute-Unmute button
        newPlayer.muteBtn = playerList[i].querySelector('.mute-btn');
        let mutevalue = 'muteOrUnmute(this,'+i+')'
        newPlayer.muteBtn.setAttribute('onclick', mutevalue);
        // update volume value
        newPlayer.volumeSlider.value = newPlayer.song.volume;
        // Push new Player Object to the Array
        playerObjects.push(newPlayer);
    }
}
// Update time slider every 0.1 second
setInterval(updateSongSlider, 100);
function updateSongSlider () {
    for (let i = 0; i < playerObjects.length; i++) {
        var c =Math.round(playerObjects[i].song.currentTime);
        playerObjects[i].songSlider.value = c;
        playerObjects[i].currentTime.textContent = convertTime(c);
        showDuration(i);
    }
}
// Convert time for timer display
function convertTime (secs){
    let min = Math.floor(secs/60);
    let sec = secs % 60;
    min = (min < 10) ? "0"+ min : min;
    sec = (sec < 10) ? "0"+ sec : sec;
    return (min + ":" + sec);
}
// Update duration and current time bar
function showDuration (i){
    let d = Math.floor(playerObjects[i].song.duration);
    playerObjects[i].songSlider.setAttribute("max", d);
    playerObjects[i].timerBar.style.width = String(Math.floor((75/d)*playerObjects[i].song.currentTime))+"px";
}
// Play and Pause
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
// Adjust play cursor position with slider
function seekSong(i){
    playerObjects[i].song.currentTime = playerObjects[i].songSlider.value;
    playerObjects[i].currentTime.textContent = convertTime(playerObjects[i].song.currentTime);
}
// Adjust volume with slider
function adjustVolume(i){
    playerObjects[i].song.volume= playerObjects[i].volumeSlider.value;
    playerObjects[i].volumeBar.style.width = String(Math.floor(50*playerObjects[i].song.volume))+"px";
}
// Mute and UnMute
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
