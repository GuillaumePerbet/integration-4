// var playerList = document.getElementsByClassName("audioplayer");
// var playerObjects =[];

// for (let i = 0; i < playerList.length; i++) {

//     let newPlayer = new Object();
//     newPlayer.id = i;
//     newPlayer.name = "audioPlayer"+(i+1);
//     newPlayer.obj = playerList[i];
//     newPlayer.audio = playerList[i].querySelector("audio");
//     playerObjects.push(newPlayer);
// }

// playerObjects.forEach(element => {

//     console.log(element);
// });
// console.log(playerObjects)
// playerObjects[0].audio.play();

var audio = document.getElementById('audio');
console.log(audio);
var button = document.getElementById('play-button');
button.addEventListener('click',function(){
    audio.play();
});