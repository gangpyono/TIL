{
  // 많이쓴다.
  type ToDo = {
    title: string;
    description: string;
  };

  function display(todo: Readonly<ToDo>) {
    // 이미 구현이 되어있는 util 타입이다.
    // todo.title = "jaja";
  }
}
