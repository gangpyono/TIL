# 1.JSX정리.

## JSX

- HTML을 품은 JS.
- html은 마크업언어, jsx는 자바스크립트.
- 자바스크립트에서 html태그 같은 마크업을 넣어 뷰(UI)작업을 편하게 할 수 있음.
- 이후 바벨(Babel)을 통해 HTML 과 자바스크립트로 변환됨.
- JSX문법을 사용해서 React요소를 만들고 DOM에 렌더링시켜서 뷰(UI)를 보여준다.

## 주의할점.

- jsx는 다수의 태그를 리턴할수없기떄문에, 다수의 태그가존재할시 한 태그로 묶어줘야함.
- 필요시 의미가있는 태그로 묶을수있지만, 없다면 굳이 div태그를 사용하지말고 빈태그 or React.Fragment로 묶어준다.
- 태그에 class대신 className으로 작성해줘야한다.
- 변수나 함수, 비즈니스로직을 사용하려면 {}을 사용해야함

