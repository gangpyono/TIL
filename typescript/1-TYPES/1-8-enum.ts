{
  // enum : 관련있는 여러 상수값들을 하나로 묶어서 정의.
  // 타입스크립트에선 union types로 대체가능하다.
  // JavaScript
  const MAX_NUM = 6;
  const MAX_STUDENTS_PER_CLASS = 10;
  const MONDAY = 0;
  const TUESDAY = 1;
  const WEDNESDAY = 2;
  const DAYS_ENUM = Object.freeze({ MONDAY: 0, TUESDAY: 1, WEDNESDAY: 2 });
  const dayOfToday = DAYS_ENUM.MONDAY;

  // TypeScript
  enum Days {
    // 값을 정하지않으면 자동적으로 숫자 0부터 할당됨.
    // Monday = "mon", 이런식으로 문자열또한 할당 할 수 있음.
    Monday, // 0
    Tuesday, // 1
    Wednesday, // 2
    Thursday, // 3
    Friday, // 4
    Saturday, // 5
    Sunday, // 6
  }
  console.log(Days.Monday); // 0
  let day: Days = Days.Saturday; // 5
  day = Days.Tuesday; // 1
  // 타입스크립트에선 enum으로 타입이 지정된 변수(day)에 enum에서 지정되지 않은 값을 할당 받을 수 있다.
  day = 10; // 에러가 발생하지 않는다.
  console.log(day);
  // 따라서 타입을 보장받기위해 enum을 union types로 대체하여 사용하자.

  type DaysOfWeek = "Monday" | "Tuesday" | "Wednesday"; // union types
  let dayOfweek: DaysOfWeek = "Monday";
  dayOfweek = "Wednesday";
}
