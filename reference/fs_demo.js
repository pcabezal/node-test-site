const fs = require('fs');
const path = require('path');

// create folder
// fs.mkdir(path.join(__dirname, 'test'), {}, err => {
//     if(err) throw err;
//     console.log('folder created...');
// });

//create file and write to it
// fs.writeFile(path.join(__dirname, 'test', 'hello.txt'), 'yo world yoyoyo', 
//     err => {
//         if(err) throw err;
//         console.log('file written to');

//     // file append
//     fs.appendFile(path.join(__dirname, 'test', 'hello.txt'), ' other runtime environments are for buttholes', 
//     err => {
//         if(err) throw err;
//         console.log('file written to');
//     });
// });

// read file
// fs.readFile(path.join(__dirname, 'test', 'hello.txt'), 'utf8', (err, data) => {
//     if(err) throw err;
//     console.log(data);
// });

// rename file
fs.rename(
    path.join(__dirname, 'test', 'hello.txt'),
    path.join(__dirname, 'test', 'helloButthole.txt'),
    err => {
        if(err) throw err;
        console.log('file renamed yo');
    }
);
