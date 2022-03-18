// 제네릭 제약.
// 제네릭 타입의 범위를 구체화할 수 있음.
{
  interface Employee {
    pay(): void;
  }

  class FullTimeEmployee implements Employee {
    pay() {
      console.log("full time!!");
    }
    workFullTime() {}
  }

  class PartTimeEmployee implements Employee {
    pay() {
      console.log("part time!!");
    }

    workPartTime() {}
  }

  // 클래스에의해 생성된 인스턴스를 인자로 전달해줄때 interface로 인자와 리턴 타입을 정의하게되면,
  // 리턴된 값은, 이후 interface에서 정의된 속성만 접근가능해진다.
  // function payBad(employee: Employee): Employee {
  //   employee.pay();
  //   return employee;
  // }
  // -> 제네릭사용.

  //Employee에서 확장된 타입만 가능. ( = Employee타입 내 정의된 속성을 포함한 타입  => 제네릭 타입의 구체화.  )
  function pay<T extends Employee>(employee: T): T {
    employee.pay(); // 따라서 Employee내부에 정의된 속성을 접근 할 수 있게됨.
    return employee;
  }

  const noh = new FullTimeEmployee();
  const bob = new PartTimeEmployee();

  noh.workFullTime();
  bob.workPartTime();

  const nohArferPay = pay(noh);
  const bobAfterPay = pay(bob); // pay(13) ->  확장된 타입을 적용함으로써 다른 타입을 전달할시 에러발생.

  // 기존의 workFullTime() 을 잃어버리게된다.
  // nohArferPay.
  // -> 제네릭으로 보완가능.

  const obj = {
    name: "gang",
    age: 20,
  };

  const obj2 = {
    animal: "cat",
  };
  // K타입을 T의 키로 타입을 구체화.
  function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
  }

  console.log(getValue(obj, "name")); // gang
  // console.log(getValue(obj, "score")); // 에러발생.
  console.log(getValue(obj2, "animal"));
}
