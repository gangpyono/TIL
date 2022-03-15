{
  // interface
  //  interface를 활용하여 타입을 제한함으로써, interface내부에서 정의된 함수만을 고려하고 사용할 수 있다.
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  interface CoffeeMaker {
    makeCoffee(shot: number): CoffeeCup;
  }

  interface CommercialCoffeeMaker {
    makeCoffee(shot: number): CoffeeCup;
    fillCoffeeBeans(beans: number): void;
    clean(): void;
  }

  // " interface의 규격을 따른다 "
  // CoffeeMaker,CommercialCoffeeMaker을 구현하는 CoffeeMachine 클래스.
  class CoffeeMachine implements CoffeeMaker, CommercialCoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT: number = 7; // class level
    private coffeeBeans: number = 0; // instance level

    private constructor(coffeeBeans: number) {
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

  class AmateurUser {
    constructor(private machine: CoffeeMaker) {}
    makeCoffee() {
      const coffee = this.machine.makeCoffee(2);
      console.log(coffee);
    }
  }

  class ProBarista {
    constructor(private machine: CommercialCoffeeMaker) {}
    makeCoffee() {
      const coffee = this.machine.makeCoffee(2);
      console.log(coffee);
      this.machine.fillCoffeeBeans(45);
      this.machine.clean();
    }
  }

  const maker: CoffeeMachine = CoffeeMachine.makeMachine(50);
  const amateur = new AmateurUser(maker);
  const probarista = new ProBarista(maker);
  console.log(probarista.makeCoffee());
}
