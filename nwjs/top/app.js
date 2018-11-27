const {spawn} = require('child_process');

function init() {
    const ls = spawn('top');

    ls.stdout.on('data', function (data) {
        append(data.toString());
    });

    ls.stderr.on('data', function (data) {
        append(data.toString());
    });

    ls.on('close', function (code) {
        console.log(`child process exited with code ${code}`);
    });
}

function append(data) {
    document.getElementById('app').innerHTML = data.replace(/\n/g,"<br>");
}

document.addEventListener("DOMContentLoaded", init);

