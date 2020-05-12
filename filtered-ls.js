const fs = require('fs');
const path = require('path');

const filePath = process.argv[2];
const ext = process.argv[3];

fs.readdir(filePath, (err, list) => {
    list.forEach((file) => {
        if (path.extname(file) === '.' + ext) {
            console.log(file);

        }
    }
)});
