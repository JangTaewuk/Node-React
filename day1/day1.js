// hello world - > node day1.js 
console.log("hello Jang")


//---------------------------------------------------------

// module - 모듈
// 채팅같은것도 모듈을 이용하면 금방 만들수 있다. 
// 플러그인 같은것이다. 

var food = require('./module_food')
// 모듈을 import할때 쓴다.

food.pizza();
// module_food에서 export한걸 사용할수 있다.

//---------------------------------------------------------

