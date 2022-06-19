const exec = require('child_process').exec;
exec('npm install', (e, stdout, stderr)=> {
    console.log('Downloading dependencies', stdout);
    if (e instanceof Error) {
        console.log(e);
        throw e;
    }
    console.log('Downloaded', stderr);
});