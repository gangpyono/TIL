{
  // index를 기반으로 타입을 결정한다.

  const obj = {
    name: "gangpyo",
  };

  obj.name;
  obj["name"];

  type Animal = {
    name: string;
    age: number;
    gender: "male" | "female";
  };

  type Name = Animal["name"]; // Name이 string타입으로 정의된다.
  // const text: Name = 12   에러발생

  type Gender = Animal["gender"]; // "male" | "female"

  type Keys = keyof Animal; // "name" | "age" | "gender"
  const key: Keys = "gender";

  type Person = {
    name: string;
    gender: Animal["gender"];
  };

  const person: Person = {
    name: "gangpyo",
    gender: "male", // "female" | "male"
  };
}
