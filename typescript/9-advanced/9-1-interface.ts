// type Alias 와 interface 뭘 써야할까? (기술 측면차이.)

type PositionType = {
  x: number;
  y: number;
};

interface PositionInterface {
  x: number;
  y: number;
}

// 둘다 구현 가능한 것.
// 1. object
const obj1: PositionType = {
  x: 1,
  y: 1,
};

const obj2: PositionInterface = {
  x: 1,
  y: 1,
  z: 1,
};

// 2. class
class Pos1 implements PositionType {
  x: number;
  y: number;
}

class Pos2 implements PositionInterface {
  x: number;
  y: number;
  z: number;
}

//3. Extends
interface ZPositionInterface extends PositionInterface {
  z: number;
}

type ZPositionType = PositionType & { z: number };
//type ZPositionType = {
//   x: number;
//   y: number;
//   z: number ;
// }

//4. only interfaces can be merged
interface PositionInterface {
  z: number;
}
// type PositionType {   에러
// z: number;
// }

// 5. only Type aliases can use computed properties
type Person = {
  name: string;
  age: number;
};

type Name = Person["name"]; // Name이 string 타입으로 정의됨.
type NumberType = number;
type Direction = "left" | "right";

// type Alias 와 interface 뭘 써야할까? (개념 측면차이.)
//1.interface : 규격사항. 무언가를 구현할 목적.
// interface CoffeeMaker {
//   coffeeBeans : number;
//   makeCoffee : (shots: number) => Coffee;
// }

// class CoffeeMachine inplements CoffeeMaker {
//   coffeeBeans : number;
//   makeCoffee(shots : number) {
//     return {};
//   }
// }

// 2.Types : 데이터를 담을목적.
// type Position = {
//   x: number;
//   y: number;
// };
// const pos: POsition = { x: 0, y: 0 };
// printPosition(pos);
