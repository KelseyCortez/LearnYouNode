const fs = require('fs');
const path = require('path');

function filterFolderNames(dirName, ext, callback) {
    fs.readdir(dirName, (err, list) => {
        if (err) {
            callback(err);
            return;
        }

        const filteredList = list.filter((file) => {
            if (path.extname(file) === '.' + ext) {
                return true;
            } else {
                return false;
            }
        })
        callback(null, filteredList);
    });
}

module.exports = filterFolderNames;