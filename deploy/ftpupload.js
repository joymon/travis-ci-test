var fs = require('fs');
var FtpClient = require('ftp-deploy');

console.log("Inside ftpUpload.js");
if (process === null) {
    console.log("process is null");
}
else {
    console.log("process.env =" + process.env.ftp_user);
    var files = getFiles('src');

    uploadToFTP(files);
}
function getFiles(dir, files_) {
    files_ = files_ || [];
    var files = fs.readdirSync(dir);
    for (var i in files) {
        var name = dir + '/' + files[i];
        if (fs.statSync(name).isDirectory()) {
            getFiles(name, files_);
        } else {
            files_.push({ full_path: name, rel_path: files[i] });
        }
    }
    return files_;
}

function uploadToFTP(files) {
    var ftp = new FtpClient();

    ftp.deploy(getConfiguration(), function (err, fileName) {
        if (err) {
            console.log("error " + err);
        }
        else {
            console.log("Completed -" + fileName);
        }
    });
}
function getConfiguration() {

    return {
        host: process.env.ftp_host,
        port: 21,
        username: process.env.ftp_user,
        password: process.env.ftp_password,
        localRoot: process.env.ftp_localPath,
        remoteRoot: process.env.ftp_remotePath
    };
}