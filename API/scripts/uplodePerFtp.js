var FtpDeploy = require("ftp-deploy");
var ftpDeploy = new FtpDeploy();
require('dotenv').config()

var config = {
    user: process.env.FTP_USER,
    // Password optional, prompted if none given
    password: process.env.FTP_PW,
    host: process.env.FTP_HOST,
    port: 21,
    localRoot: __dirname + "/../",
    remoteRoot: "/",
    // include: ['*', '**/*'],      // this would upload everything except dot files
    include: ["API/Input/multichoice.php", "Input/multichoice.php", "/Input/multichoice.php", ".env", ".env.php", "*.php", "dist/*", "/Input/*", "/Input/*.php", "Output/*", "Output/*.php", "functions.php"],
    // e.g. exclude sourcemaps, and ALL files in node_modules (including dot files)
    exclude: ["dist/**/*.map", "node_modules/**", "node_modules/**/.*", "node_modules"],
    // delete ALL existing files at destination before uploading, if true
    deleteRemote: true,
    // Passive mode is forced (EPSV command is not sent)
    forcePasv: true
};


ftpDeploy.on("uploading", function(data) {
    data.totalFilesCount; // total file count being transferred
    data.transferredFileCount; // number of files transferred
    data.filename; // partial path with filename being uploaded
});

ftpDeploy.on("log", function(data) {
    console.log(data); // same data as uploading event
});
ftpDeploy.on("upload-error", function(data) {
    console.log(data.err); // data will also include filename, relativePath, and other goodies
});

// use with promises
ftpDeploy
    .deploy(config)
    .then(res => console.log("finished:", res))
    .catch(err => console.log(err));

// use with callback
ftpDeploy.deploy(config, function(err, res) {
    if (err) console.log(err);
    else console.log("finished:", res);
});

ftpDeploy.on("uploading", function(data) {
    data.totalFilesCount; // total file count being transferred
    data.transferredFileCount; // number of files transferred
    data.filename; // partial path with filename being uploaded
});

ftpDeploy.on("log", function(data) {
    console.log(data); // same data as uploading event
});
ftpDeploy.on("upload-error", function(data) {
    console.log(data.err); // data will also include filename, relativePath, and other goodies
});

ftpDeploy.on("uploaded", function(data) {
    console.log(data); // same data as uploading event
    console.log(config); // same data as uploading event

});
