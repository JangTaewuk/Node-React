var http = require('http') // 모듈 가져오기
var fs = require('fs') //file system , 파일 읽고쓰고하는 코어모듈

// 웹페이지가 없을때 404 Error page 만들기
function send404Response(response){
    response.writeHead(404,{"Content-Type":"text/plain"});
    response.write("404 Error : can't read page");
    response.end();
}

// 사용자 요구에 응답 처리하기
function onRequest(request,response){
    
    if(request.method == 'GET' && request.url == '/'){
        response.writeHead(200,{"Content-Type":"text/html"});
        fs.createReadStream("./index.html").pipe(response);
        // 파일 사이즈가 얼마진 모르니 read Stream , pipe 출력하기 
    }
    else{
        // 없는 파일을 찾는 경우
        send404Response(response);
    }
}

http.createServer(onRequest).listen(8888);
console.log("서버돌아간다.")


