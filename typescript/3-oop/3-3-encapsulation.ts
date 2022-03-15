{
  // encapsulation
  // 클래스를 만들떄, 외부에서의 접근을 허용하는것과 내부적으로만 허용하는것을 구분.
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  // public (default)
  // private  -> 직접 접근 불가.
  // protedcted -> 상속된 자식 class에서만 접근 가능.
  class CoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT: number = 7; // class level
    private coffeeBeans: number = 0; // instance level

    private constructor(coffeeBeans: number) {
      // 클래스를 호출하여 인스턴스를 만들떄 호출되는 함수.
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(cofeeBeans: number): CoffeeMaker {
      // static 키워드를 사용하면 생성자로접근해야한다.
      // 클래스의 내부 함수(여기선 makeMachine)로 인스턴스를 생성하는 구조인 클래스라면, 생성자를 통해 인스턴스를 생성하는것을 제한시킨다.
      // 따라서 constructor를 private로 설정한다.
      return new CoffeeMaker(cofeeBeans);
    }

    fillCoffeeBeans(beans: number) {
      // coffeeBeans를 안전하게 관리.
      if (beans < 0) {
        throw new Error("value for beans should be greater then 0");
      }
      this.coffeeBeans += beans;
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

  const maker = CoffeeMaker.makeMachine(50);
  maker.fillCoffeeBeans(32);

  ///////////////////////////////////////////////////////////

  // 수정 전
  // class User {
  //   firstName: string;
  //   lastName: string;
  //   fullName: string;
  //   constructor(firstName: string, lastName: string) {
  //     this.firstName = firstName;
  //     this.lastName = lastName;
  //     this.fullName = `${firstName} ${lastName}`;
  //   }
  // }

  // const user = new User("noh", "gnagpyo");
  // user.firstName = "el";
  // console.log(user.fullName); //  firstName에대한 변경이 반영되지않고, noh gangpyo 그대로 출력.

  // 수정 후
  class User {
    // private firstName: string;
    // private lastName: string;
    get fullName(): string {
      //1.  get함수로 호출하면서 이전문제 해결.
      return `${this.firstName} ${this.lastName}`;
    }
    //3. 추가 알아두면 좋은것. : get, set.
    private internalAge = 4;
    get age(): number {
      return this.internalAge;
    }

    set age(num: number) {
      // 유효성 검사.
      // if(num < 0) {

      // }

      this.internalAge = num;
    }

    //2.  필요시 private, public단축 표현 가능.
    constructor(private firstName: string, public lastName: string) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
  }

  const user = new User("noh", "gnagpyo");
  console.log(user.fullName);

  user.age = 6; // set 함수로 접근.
  console.log(user.age); // get 함수로 접근.

  // user.firstName = "el";
  console.log(user.fullName);
  // get 키워드로 설정된 함수지만, 접근할떄는 멤버변수처럼 접근해야함.
  // 언제쓰는가? -> 변수처럼 사용하되, 계산이 필요할떄.
  // getter, setter 함수로 좀더 다양한 접근이 가능하게된다.
}
