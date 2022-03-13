/**
 * Let's make a game 🕹
 */

type Command = "up" | "down" | "left" | "right";
type Position = {
  x: number;
  y: number;
};

const position: Position = { x: 0, y: 0 };

function move(Command: Command) {
  switch (Command) {
    case "up":
      position.y++;
      break;
    case "down":
      position.y--;
      break;
    case "left":
      position.x--;
      break;
    case "right":
      position.x++;
      break;
    default:
      throw Error("unknown command");
  }
}

console.log(position); // { x: 0, y: 0}
move("up");
console.log(position); // { x: 0, y: 1}
move("down");
console.log(position); // { x: 0, y: 0}
move("left");
console.log(position); // { x: -1, y: 0}
move("right");
console.log(position); // { x: 0, y: 0}
