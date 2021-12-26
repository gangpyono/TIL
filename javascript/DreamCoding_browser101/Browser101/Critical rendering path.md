# 1.Critical rendering path.
<img width="595" alt="rendering path" src="https://user-images.githubusercontent.com/58588011/118286855-dce30580-b50d-11eb-916f-f161867244e7.png">


## 1) Construction.
- Render Tree 까지의 단계.
- 어떻게 하면 Render Tree 까지 빠르게 구성할 수 있는가?

    → DOM요소, CSS규칙이 적으면 적을수록 빠르게구성 → 불필요한 태그, 속성 자제.

## 2) Operation.

1) Render Tree 구성후 layout을 구상한다.

2)  paint 과정에서  레이어별로구성후 화면에 배치준비.

    → 수정소요가있을때 해당 레이어만 수정하기위함.

3)  composition과정에서 실제로 브라우저에 배치함.

4)  CSS 의 will-change 속성.

    → 브라우저에게 추후에 변경될수도있음을 암시해주면서 새로운 레이어를 미리 구성하게 만듬.( 너무 자주쓰면 성능이 저하된다)

5)  성능개선시 operation에서의 고려사항(이벤트발생, 애니매이션효과에의해 화면의 업데이트가 발생할떄)

    - paint과정 최소화. (composition는 기존layer의 이동,변형이기떄문에 발생해도괜찮다)

    - layout과정이 수정될시 주변요소들의 배치도 변경되기떄문에 꼭필요한 속성인지 고려해볼것

6) composition → paint → layout 순으로 최소화시키자.
