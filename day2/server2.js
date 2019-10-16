const http = require('http');
const fs = require('fs')

http.createServer((req,res)=>{
    fs.readFile('./server2.html',(error,data)=>{
        if(error){
            throw error;
        }
        res.end(data);
    });
}).listen(5000, ()=> {
    console.log("server2 port 5000 ready !!")
})