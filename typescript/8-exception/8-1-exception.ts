// Java : Exception 클래스
// js : Error 클래스

// 에러에는 예상가능한 에러(Error State)와 그렇지 않은 에러(exception)로 나눌 수 있다.
// exception 에러에대해서 알아보자

// Error (Exception) Handling : try -> catch -> finally로 관리.
// try를 진행하다 미리 정의한 에러가 아닐경우 catch문으로 빠지게된다.
function readFile(fileName: string): string {
  if (fileName === "not exist!") {
    throw new Error(`file not exist!${fileName}`);
  }

  return "file contents";
}

// 보통 파일을 열고 닫는다.
function closeFile(fileName: string) {}

function run() {
  const fileName = "file contents";
  // 에러가 발생할 수 있는 부분에서  try사용
  // 필요하지않는 부분을 try문에 굳이 넣지말자.
  try {
    console.log(readFile(fileName));
  } catch (error) {
    console.log("catched!!");
  } finally {
    // 성공,실패 상관없이 항상 실행.
    closeFile(fileName);
    console.log("finally!!");
  }
}

run();
