const {spawn} = require('child_process');

function init() {
    const top = spawn('top', ['-b']);

    top.stdout.on('data', function (data) {
        append(data.toString());
    });

    top.stderr.on('data', function (data) {
        append('ERR: ' + data.toString());
    });

    top.on('close', function (code) {
        console.log(`child process exited with code ${code}`);
    });
}

function append(data) {
    document.getElementById('app').innerHTML = data.replace(/\n/g,"<br>");
}

document.addEventListener("DOMContentLoaded", init);

