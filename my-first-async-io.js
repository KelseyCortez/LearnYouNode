const fs = require('fs');

const filePath = process.argv[2];

fs.readFile(filePath, function (err, data){
    if (err) {
        return console.log(err);

    }
    const lines = data.toString().split('\n').length - 1;

    console.log(lines);
});




