# 1.윈도우 사이즈

- window.screen.Width/Height : 디스플레이 사이즈(모니터 사이즈)
- window.outerWidth/Height : 브라우저 사이즈(url,탭창 포함)
- window.innerWidth/Height : 스크롤바 포함 전체 웹 애플리케이션(url 아래부터)
- document.documentElement.clientWidth/Height : inner에서 스크롤바 제외너비

→ 개발툴 환경의 console에서 window등의 객체를 출력해보면서 익숙해질것.

```js
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Document</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="author" content="gangpyo">
    <meta name="description" content="Window_size-project ">



    <style>
        .tag {
  font-size: 100px;
  display : inline-block;
  background: purple;
}
    </style>

</head>
<body>
    <div class="tag">windowSize</div>


    <script>
        function updateTag () {
            tag.innerHTML = `
            Window.screen: ${window.screen.width}, ${window.screen.height} </br>
            Window.outer : ${window.outerWidth}, ${window.outerHeight}</br>
            window.inner : ${window.innerWidth}, ${window.innerHeight}</br>
            documentElement.client : ${document.documentElement.clientWidth}, ${document.documentElement.clientHeight}
            `;
        }
        const tag = document.querySelector('.tag');
        window.addEventListener('resize',() => {
            updateTag();

        });

    </script>
</body>
</html>
```
