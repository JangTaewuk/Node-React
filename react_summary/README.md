We built React to solve one problem: building large applications with data that changes over time.

<< 리엑트 복습 >> 
-> 리엑트는 컴포넌트가 중심이다 !! 
___________________________________________________________________________________________

※ 리엑트의 개념 
 일반적인 MVC에서는 양방향 바인딩을 통해 모델의 값이 변하면, 뷰에서도 이를 변화시켜줍니다.

 여기서, 변화(Mutation)라는것은 상당히 복잡한 작업입니다. 특정 이벤트가 발생하면 모델에 변화가 일어나고 이 변화에 의해 어떤 DOM를 가져와서 어떤 방식으로 뷰를 업데이트 해줄지 로직을 정해줘야하기 때문이다. 

 페이스북에서는 " 변화(Mutation)를 하지말고 데이터가 변화면 그냥 뷰를 날려버리고 새로 만들어버리면 어떻까 ? " 라고 생각해서 리엑트가 만들어졌다. 

 하지만 실제로 변화할때마다 새로 뷰를 만들면 성능적으로 엄청난 문제가 있었기에 Virtual DOM을 사용합니다. 
 
 즉, 실제 브라우저의 DOM에 새로운걸 넣는것이 아니라, 자바스크립트로 이뤄진 가상DOM에 한번 렌더링하고 기존의 DOM과 비교 한 다음 정말 변화가 필요한 곳에만 업데이트를 해주는 것입니다.
___________________________________________________________________________________________

1. component 

※ 함수형 컴포넌트 
-> 출력용[단순 뷰어]이다 [ x -> y] , 상태를 유지하지않는다.
=> return

※ 클래스형 컴포넌트
-> 상태를 유지하는 객체 [ 자바코딩과 유사 ],
 즉 인스턴스 변수 등 하위 여러 컴포넌트를 가진다.
=> render
___________________________________________________________________________________________
※Ex1 - 컴포넌트 실습1
-> sample1.js : 함수형 컴포넌트
Read only인 props를 통해 부모컴포넌트인 App.js에서 받은 props를 단순 출력한다.

-> sample2.js : 클래스형 컴포넌트
상태를 유지하는 State를 이용하여 버튼에 따른 숫자증가구현, setState를 통해 render가 작동한다.

※Ex2 - 컴포넌트 실습2

