# 1.State 이해하기

<img width="1334" alt="스크린샷 2021-05-28 오후 11 33 25" src="https://user-images.githubusercontent.com/58588011/119999814-1c7d1780-c00d-11eb-943e-222cc4c73579.png">
<img width="673" alt="스크린샷 2021-05-28 오후 11 34 18" src="https://user-images.githubusercontent.com/58588011/119999943-446c7b00-c00d-11eb-855d-742c8059a229.png">

- 기존의 state의 값을 변경하고싶을떄, handleIncrement, handleDcrement에서 다루듯 setState라는 리액트에서제공하는 내장함수를 이용해서 업데이트를 해줘야한다.
- 코멘트와같이 작성시 리액트에서 인지불가.
- setState함수 호출시 객체 전달.
- 새롭게 정의된 count키값을 기존의 state의 값을 토대로 업데이트해준다.
- setState함수가 해당 컴포넌트의 state값을 체크.
- state값중 'count'라는 동일한이름의 키가존재하면 선택하여 업데이트. 
