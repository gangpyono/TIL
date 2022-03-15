{
  //  sugar + milk 를 만들고싶다면 상속 구조를 어떻게 가저가야할까?
  // 타입스크립트에선, 두가지이상을 상속 할 수 없다.(CafeLatteMachine와 SweetCoffeeMaker를 둘다 한번에 상속 받는 클래스는 만들 수 없다.)

  // 상속의 문제점.
  // 족보가 꼬인다 -> 상속의 관계가 깊어질수록 복잡해진다.
  // 부모 클래스의 수정사항이 발생하면, 해당하는 자식 클래스의 요소또한 수정발생.

  // composition으로 해결
  // "필요한 것들을 조립해 나간다."
  // 중복된 부분을 클래스로 따로만들고, 필요한 클래스에서 constructor인자로 가져와 사용한다.
  // 코드의 재사용성 증가.

  // 단점
  // composition으로 사용중인 클래스의 수정사항이 발생했을때, 사용되는 클래스에서도 변경이 이루어져야한다.

  // 결론 : 클래스와 클래스를 관계짓는것자체가 좋지않다.
  // 이걸피하려면? 클래스가아닌, interface를통해 constructor인자로 전달해준다.
  type CoffeeCup = {
    shots: number;
    hasMilk?: boolean;
    hasSugar?: boolean;
  };

  interface CoffeeMaker {
    makeCoffee(shot: number): CoffeeCup;
  }

  // CoffeeMachine는 CoffeeMaker을 구현한 class
  class CoffeeMachine implements CoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT: number = 7; // class level
    private coffeeBeans: number = 0; // instance level

    constructor(coffeeBeans: number, private milk: MilkFrother, private sugar: SugarProvider) {
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

    private extract(shots: number): CoffeeCup {
      console.log(`Pulling ${shots} shots...`);
      return {
        shots,
        hasMilk: false,
      };
    }
    //
    makeCoffee(shots: number): CoffeeCup {
      this.grindBeans(shots);
      this.preheat();
      const coffee = this.extract(shots);
      const sugarAdded = this.sugar.addSugar(coffee);
      return this.milk.makeMilk(sugarAdded);
    }
  }
  // interface로 구성
  interface MilkFrother {
    makeMilk(cup: CoffeeCup): CoffeeCup;
  }
  // interface로 구성
  interface SugarProvider {
    addSugar(cup: CoffeeCup): CoffeeCup;
  }

  class CheapMilkSteamer implements MilkFrother {
    private steamMilk(): void {
      // 우유를 가져오는 로직이 복잡하다 가정.
      console.log("Steaming some milk...");
    }
    makeMilk(cup: CoffeeCup): CoffeeCup {
      this.steamMilk();
      return {
        ...cup,
        hasMilk: true,
      };
    }
  }

  class FancyMilkSteamer implements MilkFrother {
    private steamMilk(): void {
      // 우유를 가져오는 로직이 복잡하다 가정.
      console.log("Fancy Steaming some milk...");
    }
    makeMilk(cup: CoffeeCup): CoffeeCup {
      this.steamMilk();
      return {
        ...cup,
        hasMilk: true,
      };
    }
  }

  class ColdMilkSteamer implements MilkFrother {
    private steamMilk(): void {
      // 우유를 가져오는 로직이 복잡하다 가정.
      console.log("Fancy Steaming some milk...");
    }
    makeMilk(cup: CoffeeCup): CoffeeCup {
      this.steamMilk();
      return {
        ...cup,
        hasMilk: true,
      };
    }
  }

  class NoMilk implements MilkFrother {
    makeMilk(cup: CoffeeCup): CoffeeCup {
      return cup;
    }
  }

  // 설탕 제조기
  class CandySugarMixer implements SugarProvider {
    private getSugar() {
      // 설탕을 가져오는 로직이 복잡하다 가정.
      console.log("Getting some sugar from jar");
      return true;
    }

    addSugar(cup: CoffeeCup): CoffeeCup {
      const sugar = this.getSugar();
      return {
        ...cup,
        hasSugar: sugar,
      };
    }
  }

  class SugarMixer implements SugarProvider {
    private getSugar() {
      // 설탕을 가져오는 로직이 복잡하다 가정.
      console.log("Getting some sugar from jar");
      return true;
    }

    addSugar(cup: CoffeeCup): CoffeeCup {
      const sugar = this.getSugar();
      return {
        ...cup,
        hasSugar: sugar,
      };
    }
  }

  class NoSugar implements SugarProvider {
    addSugar(cup: CoffeeCup): CoffeeCup {
      return cup;
    }
  }

  //Milk
  const cheapMilkMaker = new CheapMilkSteamer();
  const fancyMilkMaker = new FancyMilkSteamer();
  const coldMilkMaker = new ColdMilkSteamer();
  const noMilk = new NoMilk();

  // Sugar
  const candySugar = new CandySugarMixer();
  const sugar = new SugarMixer();
  const noSugar = new NoSugar();

  //
  const sweetCandyMachine = new CoffeeMachine(12, noMilk, candySugar);
  const sweetMachine = new CoffeeMachine(12, noMilk, sugar);

  const latteMachine = new CoffeeMachine(12, cheapMilkMaker, noSugar);
  const coldLatteMachine = new CoffeeMachine(12, coldMilkMaker, noSugar);
  const sweetLatteMachine = new CoffeeMachine(12, cheapMilkMaker, candySugar);
}
