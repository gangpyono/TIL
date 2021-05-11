const gameField = document.querySelector('.game-field');
const carrot = document.querySelector('.carrot');
const bug = document.querySelector('.bug');




const controlBtn = document.querySelector('.control__btn');
const controlScore = document.querySelector('.control__score');
const controlCounter = document.querySelector('.control__counter');

const gameFieldWidth = gameField.getBoundingClientRect().width;
const gameFieldHeight = gameField.getBoundingClientRect().height;

let carrotNum = 20;
const bugNum = 10;
const carrotSize = 80; // 이미지 사이즈
let time = 80; //sec


let started = true;

function createField () {
    createItem("carrot", carrotNum);
    createItem("bug", bugNum);
}

function createPositionX () {
    const x = Math.floor(Math.random() *(gameFieldWidth-carrotSize) );
    return x;
}

function createPositionY () {
    const y = Math.floor(Math.random() *(gameFieldHeight-carrotSize));
    return y;
}

function createItem(item, item_num) {
    
    for( let i = 0 ; i<item_num; i++) {
        const toBeCreated = document.createElement('img');
        toBeCreated.setAttribute('src',`img/${item}.png`);
        toBeCreated.setAttribute('alt',`${item}`);
        toBeCreated.setAttribute('class',`${item}`);
        
        const x = createPositionX();
        const y = createPositionY();

        toBeCreated.style.left = `${x}px`;
        toBeCreated.style.top = `${y}px`;

            if(item === "carrot") {
                toBeCreated.addEventListener( 'click',() => {
                toBeCreated.remove();
                --carrotNum;
                score();
          })
        }else {
             toBeCreated.addEventListener('click',() => {
                 gameEnd();
                 carrotNum = 20;
             })
        }
    gameField.appendChild(toBeCreated);
  }
}





function startGame () {
    if(started) {
    let timer = setInterval(counter, 1000);
    createField();
    counter();
    score();
    // carrotNum();
    started = false;
    controlBtn.innerHTML = `<i class="fas fa-pause pauseBtn"></i>`;

    }    
}

function gameEnd () {
    
}



function counter () {
    let  minute = Math.floor(time / 60);
    let sec = time % 60;
    controlCounter.innerText = `${minute}:${sec}`;    
    time--;
}



function score () {
    controlScore.innerText = carrotNum;
}

controlBtn.addEventListener('click', () => {
    startGame();
})


