import * as fs from 'fs'
import * as http from 'http'
import path from 'path'

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

const url={
    host: 'onepiece.fandom.com',
    path: '/es/wiki/One_Piece_Wiki',

}
const request = http.request(url,(res)=>{
    var data = ''
    res.on('data',(chunk)=>{
        data += chunk
    })
    res.on('end',()=>{
        console.log(data);
        
    })
})
request.on('error',(e)=>{
    console.log(e.message);
    
})
request.end()