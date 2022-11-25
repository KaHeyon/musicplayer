let musicFile;
var song;

function setup()
{
    soundFormats('mp3','ogg');
    musicFile=loadSoun('wham-last-christmas', loadMusic);
    //musicFile.play();
}

function loadMusic(){
    musicFile.play();
}