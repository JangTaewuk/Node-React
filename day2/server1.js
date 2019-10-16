const http = require('http');

http.createServer((req,res)=>{
    res.write('<h1>hello world</h1>');
    res.end();
}).listen(5000, ()=> {
    console.log("server port 5000 ready !!")
})