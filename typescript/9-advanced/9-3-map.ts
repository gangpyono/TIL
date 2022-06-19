// map
{
  // 수정사항이 발생할떄마다, 일일이 수정작업을 거쳐야한다.
  // -> map타입으로 간단히 해결.

  // 기존방식.
  type Video = {
    title: string;
    author: string;
  };

  // type VideoOptional = {
  //   title?: string;
  //   author?: string;
  //   description?: string;
  // };

  // type VideoReadOnly = {
  //   readonly title?: string;
  //   readonly author?: string;
  //   readonly description?: string;
  // };

  // map이용 방식.
  [1, 2].map((item) => item * item); // 1,4 다른 배열로 새로 만든다.

  // 기존의 타입에서 다른타입으로 변경시킬 수 있다.
  type Optional<T> = {
    [P in keyof T]?: T[P]; // for...in 과 동일.
  };
  // 옵셔널을 추가해줌으로써, 아래와같이 옵셔널 처리를 해준것과 동일해진다.
  // type VideoOptional = {
  //   title?: string;
  //   author?: string;

  // };
  type ReadOnly<T> = {
    readonly [P in keyof T]: T[P];
  };

  type VideoOptional = Optional<Video>;

  type Animal = {
    name: string;
    age: number;
  };

  const animal: Optional<Animal> = {
    name: "dog",
  };

  animal.name = "ellie";
  const video: ReadOnly<Video> = {
    title: "hi",
    author: "gangpyo",
  };
  // video.author =  // 에러발생.

  type Nullable<T> = { [P in keyof T]: T[P] | null }; // key의 type을 쓰던지, null type를 쓰던지.
  const obj2: Nullable<Video> = {
    title: "hi",
    author: null,
  };

  //
  // type Proxy<T> = {
  //   get(): T;
  //   set(value: T): void;
  // };

  // type Proxify<T> = {
  //   [P in keyof T]: Proxy<T[P]>;
  // };
}
