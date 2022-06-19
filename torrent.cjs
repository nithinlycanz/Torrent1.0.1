'use strict';
 
// using import


const cliProgress = require('cli-progress');
const fs = require("fs");
const colors = require('ansi-colors');

function plusSlides(torrent){
    const WebTorrent = require('webtorrent')

const client = new WebTorrent()
const magnetURI = torrent;

const bar = new cliProgress.SingleBar({
    format: 'CLI Progress |' + colors.cyan('{bar}') + '| {percentage}% || {value}/{total} Chunks || Speed: speed',
    barCompleteChar: '\u2588',
    barIncompleteChar: '\u2591',
    hideCursor: true
});

bar.start(100,0);

client.add(magnetURI, function (torrent) {

const files = torrent.files;
let length = files.length;
console.log("Number of files:- \t"+length);

  // Got torrent metadata!
//   console.log('Client is downloading:', torrent.infoHash)

let interval = setInterval(() => {
    // console.log("Progress : "+(torrent.progress * 100).toFixed()+ "%");
    bar.update((torrent.progress * 100));
    }, 1000);

  files.forEach(function (file) {

//.......................................................................................
        const source = file.createReadStream();
        const destination = fs.createWriteStream(file.name);
        source.on('end',()=>{
        console.log('file: \t\t', file.name,"downloaded successfuly");
        length -= 1;
        if(!length){ 
            bar.stop();
            console.log("completed");
            clearInterval(interval);
            process.exit();
        }
        }).pipe(destination);
//.......................................................................................

    // Display the file by appending it to the DOM. Supports video, audio, images, and
    // more. Specify a container element (CSS selector or reference to DOM node).
    // file.appendTo('body')
  });


});

}
// export { plusSlides };
 module.exports = {plusSlides};