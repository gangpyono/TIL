{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  class CoffeeMaker {
    // 클래스자체에서 정의된 값. -> 변하지않는다.
    // 인스턴스를 생성할떄마다 만들어진다 -> 메모리 발생.
    // static 키워드를통해 class level로 제한 할 수 있다.
    static BEANS_GRAMM_PER_SHOT: number = 7; // class level // CoffeeMaker.BEANS_GRAMM_PER_SHOT으로 접근.
    coffeeBeans: number = 0; // instance level

    constructor(coffeeBeans: number) {
      // 클래스를 호출하여 인스턴스를 만들떄 호출되는 함수.
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(cofeeBeans: number): CoffeeMaker {
      // static 키워드를 사용하지않으면, 클래스에서가 아닌, 만들어진 인스턴스에서 접근해야한다.
      return new CoffeeMaker(cofeeBeans);
    }

    makeCoffee(shots: number): CoffeeCup {
      if (this.coffeeBeans < CoffeeMaker.BEANS_GRAMM_PER_SHOT * shots) {
        throw new Error("Not enough coffee beans!");
      }

      this.coffeeBeans -= CoffeeMaker.BEANS_GRAMM_PER_SHOT * shots;

      return {
        shots,
        hasMilk: false,
      };
    }
  }

  const CoffeeMachine1 = new CoffeeMaker(50);
  const CoffeeMachine2 = new CoffeeMaker(30);
  console.log(CoffeeMachine1);
  console.log(CoffeeMachine2);
  const CoffeeMachine3 = CoffeeMaker.makeMachine(100);
  console.log(CoffeeMachine3);
}
