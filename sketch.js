let musicFile;
var song;
var button;

function setup()
{
    createCanvas(200,200);
    //soundFormats('mp3','ogg');
    song = loadSound('wham-last-christmas.mp3', loaded);
    button = createButton('play');
    button.mousePressed(togglePlaying);
    background(51);
    //musicFile.play();
}

function togglePlaying(){
    if(!song.isPlaying()){
        song.play();
        song.setVolume(0.3);
        button.html('pause');
    } else{
        song.stop();
        button.html('play');
    }
}

function loaded(){
    console.log('loaded');
}