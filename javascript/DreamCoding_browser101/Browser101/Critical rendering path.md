# 1.Critical rendering path.
<img width="766" alt="스크린샷 2021-12-30 오후 2 02 17" src="https://user-images.githubusercontent.com/58588011/147723047-e2bde2a3-f7a3-4496-8fbc-513272ebc36c.png">


<br></br>

## 1) Construction.
### Render Tree 까지의 단계.
-  브라우저가 서버에게 받은 HTML파일을 파싱하며 RenderTree까지 구성.

<br></br>
## 2) Operation.
- Render Tree 이후 실제 브라우저에 보여지기까지의 단계.
1. layout
    - 요소들이 페이지에서 배치되는 위치와 방법, 각요소의 너비와 높이 그리고 서로 관련된 위치를 결정한다.
2. paint
    - 배치할 항목들을 레이어 별로 구성.
        - 이후 수정 소요가 있을 때 해당 레이어만 수정하기 위함.(성능개선을 위해)
    - CSS의 will-change 속성적용.
        - 브라우저에게 추후에 변경될수도있음을 암시해주면서 새로운 레이어를 미리 구성하게 만듬.
        - ex) opacity속성으로 변할 수 있음을 설정해주면서 레이어를 따로 구성하여 불필요한 업데이트를 방지할 수 있음.
        - 레이어를 많이 늘릴 수록 성능면에선 안좋지기떄문에 남용 하지말것.
    - 개발자도구를통해 레이어구성을 확인할 수 있다.
3. composition
    - 실제로 브라우저에 레이어들을 배치한다.

<br></br>
<br></br>

# 성능개선
##  Construction에서 성능개선법.
-   DOM요소, CSS규칙이 적으면 적을수록 빠르게구성   
    - 불필요한 태그, div wrapping 자제.
<br></br>

## Operation에서 성능개선법.
-  화면이 구성된이후로 사용자의 클릭이나 애니매이션효과에의해 paint과정이 자주 발생하게되지 않게하는게 중요하다.

    - ex : css의 translate속성에의해 화면상의 무언가를 이동시킬떄, 기존의 레이어를 이동시키는 개념임으로 composition과정만 발생하고 새로 레이어를 만드는 paint과정은 발생하지 않기떄문에, 성능적인면에서 우수.

    - 만약 변경함으로써 주변요소들의 배치에도 영향을 준다면 paint전단계인 layout단계에서의 수정사항이 발생하기떄문에 성능면에서 치명적이다.

    - 어떤 css속성이 layout, paint, composition을 발생시키는지 확인하려면? [링크](https://csstriggers.com/)

    - 성능이 개선됬는지 확인하려면 ? 개발자도구의 performance탭에서 확인
        - record를통해 시작.
        - 사용자에게 최적화된환경은 1초에 60프레임유지로, 1프레임이 보여질떄 16.67ms가 보여져야한다.( == 다음 변화가 일어나기까지 16.67ms)

## 성능개선 결론 
- 자바스크립트나 css를통해 DOM을 조작할때 
 composition → paint → layout 순으로 발생을 최소화하는 방향으로 다룰 수 있어야 한다.





