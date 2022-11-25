let musicFile;
let button;

function setup()
{
    createCanvas(200,200);
    soundFormats('mp3','ogg');
    musicFile = loadSound('music', loadMusic);
    button = createButton('play');
    button.mousePressed(togglePlaying);
    background(51);
    //musicFile.play();
}

function togglePlaying(){
    if(!musicFile.isPlaying()){
        musicFile.play();
        button.html('pause');
    } else{
        musicFile.stop();
        button.html('play');
    }
}

function loadMusic(){
    console.log('loaded');
}