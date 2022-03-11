{
  // * intersection Types : &
  // 다양한 타입을 하나로 묶어서 선언가능.
  type Student = {
    name: string;
    score: number;
  };

  type Worker = {
    empolyeeId: number;
    work: () => void;
  };

  function interWork(person: Student & Worker) {
    console.log(person.name, person.score, person.empolyeeId, person.work());
  }

  interWork({
    // 포함하는 타입의 모든 키값을 사용해야한다.
    // 하나라도 없을경우 에러발생.
    name: "gangpyo",
    score: 100,
    empolyeeId: 123,
    work: () => {},
  });
}
