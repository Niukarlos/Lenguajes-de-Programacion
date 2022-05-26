"use strict";
exports.__esModule = true;
var http = require("http");
// console.log("Hello world");
// require('dotenv').config();
// console.log(process.env.hola);
// fs.writeFile('test.txt', 'Mensaje en el archivo hola',(err)=>{
//  if(err)throw err;
//  console.log("Archivo Creado");
// });
// fs.readFile('test.txt', 'utf8' ,(err,data)=>{
//     if(err)throw err;
//     console.log(data);   
//    });
var url = {
    host: 'onepiece.fandom.com',
    path: '/es/wiki/One_Piece_Wiki'
};
var request = http.request(url, function (res) {
    var data = '';
    res.on('data', function (chunk) {
        data += chunk;
    });
    res.on('end', function () {
        console.log(data);
    });
});
request.on('error', function (e) {
    console.log(e.message);
});
request.end();
