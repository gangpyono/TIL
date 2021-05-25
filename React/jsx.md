# 1.JSX정리(HTML과 차이점).

- 자바스크립트코드 위에서 HTML처럼사용가능.
- html의 class속성부여시 jsx에서는 className로 부여.
- html은 마크업언어, jsx는 자바스크립트.
- 이후 바벨(Babel)을 통해 HTML 과 자바스크립트로 변환됨.

 



## 주의할점.
 - jsx는 다수의 태그를 리턴할수없기떄문에, 다수의 태그가존재할시 한 태그로 묶어줘야함.
 - 필요시 의미가있는 태그로 묶을수있지만, 없다면 굳이 div태그를 사용하지말고 빈태그 or React.Fragment로 묶어준다.
 
<img width="400" alt="스크린샷 2021-05-25 오후 10 03 32" src="https://user-images.githubusercontent.com/58588011/119502595-0cfb9580-bda5-11eb-8b05-2c14f841ec26.png">

<img width="400" alt="스크린샷 2021-05-25 오후 10 06 05" src="https://user-images.githubusercontent.com/58588011/119502937-6c59a580-bda5-11eb-9b07-a7dd3b6fdd1d.png">

 <img width="400" alt="스크린샷 2021-05-25 오후 9 55 13" src="https://user-images.githubusercontent.com/58588011/119501518-e426d080-bda3-11eb-8b7d-4ffc41afcc54.png">
-> 변수나 함수, 비즈니스로직을 사용하려면 {}을 사용해야함.
