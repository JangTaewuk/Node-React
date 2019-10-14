var http = require('http')
// 모듈 가져올땐 require



http.createServer(onRequest).listen(8888);
// 서버를 만들고 포트번호를 설정

console.log("make server !! port 8888")

function onRequest(request,response){
    console.log("사용자가 request 합니다." + request.url);
    response.writeHead(200,{"Context-Type": "text/plain"});
    response.write("this is server by 2019-10-14");
    response.end();
}
// 서버에서 응답하는 메소드만들기