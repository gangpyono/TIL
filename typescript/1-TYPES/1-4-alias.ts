{
  // 타입스크립트를 선호하는 이유중 하나.
  // type Aliases : type을 개발자가 정의할 수 있음.

  type Text = string;
  const name: Text = "ellie";
  const address: Text = "korea";

  type num = number;

  type Student = {
    name: string;
    age: number;
  };
  const studnet: Student = {
    // name & age key, string,number  value 외 사용불가.)
    name: "123",
    age: 12,
  };

  // String Literal Types
  type Name = "name";
  let gangpyoName: Name;
  gangpyoName = "name";
  // gangpyoName = "aaa";  // error

  type JSON = "json";
  const json: JSON = "json";

  //  이걸 왜써!?
}
