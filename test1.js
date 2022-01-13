const fs = require('fs');
// const pdf = require('pdf-parse');

// let dataBuffer = fs.readFileSync('t.pdf');

// pdf(dataBuffer).then(function (data) {

//     // number of pages
//     // console.log(data.numpages);
//     // // number of rendered pages
//     // console.log(data.numrender);
//     // // PDF info
//     // console.log(data.info);
//     // // PDF metadata
//     // console.log(data.metadata); 
//     // // PDF.js version
//     // // check https://mozilla.github.io/pdf.js/getting_started/
//     // console.log(data.version);
//     // PDF text
//     console.log(data.text);

//     // create file
//     fs.writeFile('test2.txt', data.text, (err, d) => {
//         console.log('ssave')
//     })
//     checkFile()
// });


const checkFile = () => {
    fs.readFile('test2.txt', (err, data) => {
        fs.readFile('test1.txt', (err, data1) => {
            if (data.toString() == data1.toString()) {
                console.log('true')
            } else {
                console.log('false')
            }
        })
    })
}

checkFile()