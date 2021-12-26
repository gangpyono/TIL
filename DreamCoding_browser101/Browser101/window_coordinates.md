# 1. Coordinates

<img width="700" alt="좌표" src="https://user-images.githubusercontent.com/58588011/116896580-5c9be500-ac6f-11eb-933e-152f82940f18.png">



- Element : 각종 태그들
- Element.getBoundingclientRect() : 해당 요소의 위치정보를 알수있다.

<img width="700" alt="스크린샷 2021-05-04 오전 12 28 59" src="https://user-images.githubusercontent.com/58588011/116897005-c3210300-ac6f-11eb-85d0-65daf432d017.png">


- CSS와 혼동주의 (오른쪽 밑에서부터 계산)

<img width="700" alt="css좌표" src="https://user-images.githubusercontent.com/58588011/116897213-f6639200-ac6f-11eb-9eb7-4a2f9568b42e.png">





- event.clientX → 보이는 화면에서의 x
- event.clientY → 보이는 화면에서의 y

→ 스크롤 미포함

- event.pageX → 페이지 내에서의 x 
- event.pageY → 페이지 내에서의 y

→ 스크롤포함


# 2. 좌표실습( client vs page)
```js
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="author" content="gangpyo">
    <meta name="description" content="Window_coordinatesProject ">
    <title>Window_coordinatesProject</title>
    <style>
        body {
            /* overflow: hidden;    */  
            background-color : black;
        }
        .body-container {
            display : flex;
            flex-direction: row-reverse;
            justify-content: space-between;
        }
        .button-container {
            position : relative;
        }
        button {
            position : sticky;
            top : 10px;
            cursor : pointer;
            font-size : 30px;
            width  :300px;
            height : 40px;
            margin : 0px 20px;
        }
        .box {
            width : 200px;
            height : 200px;
            display : flex;
            flex-direction: column;
            background : red;
            margin : 20px;
        }
        .box1 {
            background : blue;
        }
    </style>
</head>
<body>
<div class="body-container">
    <div class="button-container">
        <button class = "scrollBy100px">scroll by 100px(y)</button>
        <button class = "scrollTo100px">scroll to 100px(y)</button>
        <button class = "scrollInto" >scroll into box1</button>
    </div>
    
    <div class="box-container">
        <div class="box"></div>    
        <div class="box"></div>    
        <div class="box"></div>    
        <div class="box"></div>    
        <div class="box"></div>    
        <div class="box"></div>    
        <div class="box"></div>    
        <div class="box"></div>    
        <div class="box"></div>    
        <div class="box box1"></div>    
        <div class="box"></div>    
        <div class="box"></div>    
        <div class="box"></div>      
    </div>
</div>
    <script>
        const scrollBy100px = document.querySelector('.scrollBy100px');
        const scrollTo100px = document.querySelector('.scrollTo100px');
        const scrollInto = document.querySelector('.scrollInto');
        const box1 = document.querySelector('.box1');
        scrollBy100px.addEventListener('click', (event) => {
            window.scrollBy({
                top : 100,
                left : 0,
                behavior : "smooth"
            });
        })
        scrollTo100px.addEventListener('click', (event) => {
            window.scrollTo({
                top : 100,
                left : 0,
                behavior : "smooth"
            });
        })
        scrollInto.addEventListener('click', (event) => {
            box1.scrollIntoView();
        })
        box1.addEventListener('click', (event) => {
            console.log(box1.getBoundingClientRect());
            console.log(`
            clientX : ${event.clientX}
            clientY : ${event.clientY}
            pageX : ${event.pageX}
            pageY : ${event.pageY}
            `);
        })
    </script>
</body>
</html>
```

- 사용자가 스크롤을 못쓰게하고싶다? -> body태그에서 overflow : hidden
- 스크롤관련 API알아둘것
