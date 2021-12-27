# Props
- 컴포넌트 밖에서 주어지는 데이터.( <-> state는 컴포넌트 내부에서 데이터 정의)
- 컴포넌트의 재사용률을 높이기위해사용.(UI상황에떄라 동일데이터를 다르게 사용할 수있기때문)
- props라는 오브젝트안에 묶여서 저장됨.
    <img width="653" height="500" alt="스크린샷 2021-07-07 오후 11 34 37" src="https://user-images.githubusercontent.com/58588011/124778363-e58b1180-df7b-11eb-97f8-3e8db10259d9.png">



- 부모컴포넌트에서 LikeButton컴포넌트를 사용할떄 title,onClick과같은 속성에 값을 전달해주면 LikeButton컴포넌트에 props 오브젝트로 묶여서 전달되고, 이를 LikeButton컴포넌트에서 사용 할 수있다.
- props의 이름은 사용될 컴포넌트가 아닌, 자체의 관점에서 지을것.
   <img width="647" alt="스크린샷 2021-07-07 오후 11 30 31" src="https://user-images.githubusercontent.com/58588011/124777643-54b43600-df7b-11eb-97a4-5cad9201a3b8.png">

   
