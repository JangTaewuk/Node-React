리엑트 복습 Part2 

npm install --save redux react-redux
__________________________________________________________________________

<<리덕스를 쓰는 이유>>
->global state의 유지가 어렵다

<<Flux구조>>>
-> Client-side web applications 구축할때 사용하는 디자인패턴
-> MVC구조의 단점을 보완할 목적으로 개발 [ 단반향 데이터 흐름 ]
=> 리덕스는 Flux의 영향을 많이 받았다.

________________________________________________________________________

컴포넌트 => 객체
Store => 데이터 저장
Reducer => 순수한 로직함수 [ 액션처리 ]
Action => type, payload [[ 메세지, 즉 던지는것]]

!! 만드는 순서 !!
리듀서 -> 스토어 -> 액션 

____________________________________________________________________________

<<Redux 기본개념>>>

1. Action : 어플리케이션의 Store, 즉 저장소로 data를 보내는 방법이다
    < type, payload로 구성>

2. Reducers : Action의 type에 대한 함수이다. 

3. Store : Redicer의 결과를 저장하는 어플리케이션에 있는 단 하나의 객체

______________________________________________________________________________

※ 예제만들기 

1. reducers 폴더 만들고 reducer를 만든다. 

2. index.js [전역] 리듀서,store 설정을 해준다. 

3. redux를 적용한 컴포넌트를 만든다. 



______________________________________________________________________________________________________________________________
과제 문제점

1. 다음 이전 버튼 링크문제 .. 
2. 뒤로가기 안됨 .. 
3. 하루일정 한달일정 버튼 다르게 사용하기 .. 
