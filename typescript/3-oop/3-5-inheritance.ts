{
  // 상속
  // 부모 클래스의 속성을 그대로 사용할 수 있는새로운 클래스 생성.
  // 타입스크립트에선 자식 class는 하나의 부모 클래스만을 상속받는다.
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  interface CoffeeMaker {
    makeCoffee(shot: number): CoffeeCup;
  }

  class CoffeeMachine implements CoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT: number = 7; // class level
    private coffeeBeans: number = 0; // instance level

    constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(cofeeBeans: number): CoffeeMachine {
      return new CoffeeMachine(cofeeBeans);
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

    private extract(shots: number): CoffeeCup {
      console.log(`Pulling ${shots} shots...`);
      return {
        shots,
        hasMilk: false,
      };
    }

    makeCoffee(shots: number): CoffeeCup {
      this.grindBeans(shots);
      this.preheat();
      return this.extract(shots);
    }
  }

  // 상속을 위해선, constructor가 public 이거나 protected 여야한다.
  class CafeLatteMachine extends CoffeeMachine {
    // 상속받은 자식 클래스에서 constructor를 정의하려면, 부모 클래스에서 정의된 constructor를 super키워드를통해
    //반드시 호출 해줘야한다.
    constructor(beans: number, public readonly serialNumber: string) {
      super(beans);
    }

    private steamMilk(): void {
      console.log("Steaming some milk...");
    }

    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots); //super 키워드를통해 부모 클래스에 접근할 수 있음.
      this.steamMilk();
      return {
        ...coffee,
        hasMilk: true,
      };
    }
  }

  const machine = new CoffeeMachine(23);
  const latteMachine = new CafeLatteMachine(23, "SSSS");
  const coffee = latteMachine.makeCoffee(1);
  console.log(coffee);
  console.log(latteMachine.serialNumber);
}
