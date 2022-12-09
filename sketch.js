let musicFile;
let musicFile2;
let button;
let button2;
var t = 0;
var amp;
var rB;

function setup()
{
    createCanvas(640,480);
    soundFormats('mp3','ogg');
    musicFile = loadSound('music', loadMusic);
    button = createButton('play');
    button.mousePressed(togglePlaying);

    musicFile2 = loadSound('music2', loadMusic2);
    button2 = createButton('play2');
    button2.mousePressed(togglePlaying2);
    //background(51);

    amp = new p5.Amplitude();
    //mpButton = createButton('jump');
    //jumpButton.mousePressed(jumpSong);
    //musicFile.play();
    //song.addCue(2,changeBackground,color(0,0,255));
    //song.addCue(4,changeBackground,color(0,255,255));
    //song.addCue(6,changeBackground,color(255,255,255));
}

function changeBackground(col){
    background(col);
}

function togglePlaying(){ //music1 버튼
    if(!musicFile.isPlaying()){
        rB=musicFile.reverseBuffer(); //역재생
        musicFile.jump(150);
        musicFile.play();
        button.html('pause');
    } else{
        musicFile.stop();
        button.html('play');
    }
}

function togglePlaying2(){ //music2 버튼
    if(!musicFile2.isPlaying()){
        rB=musicFile2.reverseBuffer(); //역재생
        musicFile2.jump(150);
        musicFile2.play();
        button2.html('pause');
    } else{
        musicFile2.stop();
        button2.html('play2');
    }
}

function loadMusic(){
    console.log('loaded');
}

function loadMusic2(){
    console.log('loaded');
}

//function jumpSong(){
//    var len = song.durtation();
//    var t = 0;
//    console.log(t)
//    song.jump(t);
//}

function draw(){
    //fill(255,0,0);
    //background(255,255,255);
    //console.log(musicFile.duration());
   //background{musicFile.currentTime()*10,musicFile.currentTime()*10,musicFile.currentTime()*10}
    console.log(amp.getLevel());
    noStroke();
    //fill(255,0,0);
    //ellipse(width/2, height/2, 640, amp.getLevel()*1000);
    fill(0,0,0);
    //ellipse(musicFile.currentTime()*20, 480-amp.getLevel()*1000,20,20);
    rect(10,10,amp.getLevel()*1000,amp.getLevel()*500);
}  

//function mousePressed(){
//    t = t + 10;
//    musicFile.jump(t);
//}