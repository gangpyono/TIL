{
  //추상화 클래스
  // 자식 클래스마다 다르게 구현되어야할 부분을 protected abstract키워드를 통해 자식클래스의 개별적인 기능으로 구현할 수 있다.
  // 의무적으로 super함수를 호출해야하는 발생할 수 있는 에러가능성에서 벗어날 수 있다. (안전한 코드작성 보장.)

  type CoffeeCup = {
    shots: number;
    hasMilk?: boolean;
    hasSugar?: boolean;
  };

  interface CoffeeMaker {
    makeCoffee(shot: number): CoffeeCup;
  }

  // abstract 키워드 사용.
  // -> CoffeeMachine 자체로는 instance를 만들 수 없다.
  // -> instance를 만드는 목적이아닌, 필요한 기능들만을 구현해놓는 목적
  abstract class CoffeeMachine implements CoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT: number = 7; // class level
    private coffeeBeans: number = 0; // instance level

    constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    fillCoffeeBeans(beans: number) {
      // coffeeBeans를 안전하게 관리.
      if (beans < 0) {
        throw new Error("value for beans should be greater then 0");
      }
      this.coffeeBeans += beans;
    }

    clean() {
      console.log("cleaning the machine...");
    }

    private grindBeans(shots: number) {
      console.log(`grinding beans for ${shots}`);
      if (this.coffeeBeans < CoffeeMachine.BEANS_GRAMM_PER_SHOT * shots) {
        throw new Error("Not enough coffee beans!");
      }
      this.coffeeBeans -= CoffeeMachine.BEANS_GRAMM_PER_SHOT * shots;
    }

    private preheat(): void {
      console.log("heating up...");
    }

    // extract함수는 자식클래스마다 다르게 구현해야함.
    // 자식 클래스로부터 접근을 허용해야하기떄문에 protected.
    // 구현사항은 자식으로부터 정의되기떄문에 선언문만 선언.
    protected abstract extract(shots: number): CoffeeCup;

    makeCoffee(shots: number): CoffeeCup {
      this.grindBeans(shots);
      this.preheat();
      return this.extract(shots);
    }
  }

  class CafeLatteMachine extends CoffeeMachine {
    constructor(beans: number, public readonly serialNumber: string) {
      super(beans);
    }

    private steamMilk(): void {
      console.log("Steaming some milk...");
    }

    protected extract(shots: number): CoffeeCup {
      this.steamMilk();
      return {
        shots,
        hasMilk: true,
      };
    }
  }

  class SweetCoffeeMaker extends CoffeeMachine {
    //부모 클래스에서 abstract로 선언된 선언문을 선언하지않았을시 오류발생.
    protected extract(shots: number): CoffeeCup {
      return {
        shots,
        hasMilk: true,
      };
    }
  }

  const machines: CoffeeMaker[] = [
    // new CoffeeMachine(16), 더이상 생성자로써의 역할을 하지 못한다.
    new CafeLatteMachine(16, "1"),
    new SweetCoffeeMaker(16),
    // new CoffeeMachine(16),
    new CafeLatteMachine(16, "1"),
    new SweetCoffeeMaker(16),
  ];

  machines.forEach((machine) => {
    console.log("-----------------------");
    machine.makeCoffee(1);
  });
}
