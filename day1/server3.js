// http - > connet -> express

// connet는 http처럼 기본에 있는놈이 아니기 때문에 install
// npm install connect , npm -g install connect : pakage.json 없어서 전역으로 받음
var connect = require('connect');
var http = require('http');

var app = connect(); // initailize connect


function about(request,response){
    console.log("user request about page...");
}
function email(request,response){
    console.log("user request email page...");
}

app.use('/about',about);
app.use('/email',email);

http.createServer(app).listen(8888);
console.log("server with connect")
