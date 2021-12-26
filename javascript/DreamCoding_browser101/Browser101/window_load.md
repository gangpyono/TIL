### 1. Window load

- DOMContentLoad : HTML만 완료되면 호출 (사용자가 좀더 빠르게 볼수있음)
- load : HTML +리소스(css,javascript,이미지..)가 완료되면 호출.
- defer : DOMContentLoad호출이전에 javascript파일을 먼저 업로드.
- beforeunload : 페이지 나가기직전에 호출
- unload : 페이지 나갈떄호출

→ 페이지내에 리소스가 많을경우 DOMContentLoad와 load 간의 시간차 발생.

 ```js
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src ='test.js' defer></script>
</head>
<body>
    
    <script>
        //only document(HTML)
        window.addEventListener('DOMContentLoaded',() => {
            console.log('DOMContentLoaded');
        });
        //after resources(css,images)
        window.addEventListener('load', () => {
            console.log('load');
        });
        //before unload
        window.addEventListener('beforeunload', () => {
            console.log('beforeunload');
        })
        //resources is being unloaded
        window.addEventListener('unload',() => {
            console.log('unload');
        })
    </script>
</body>
</html>
 ```
