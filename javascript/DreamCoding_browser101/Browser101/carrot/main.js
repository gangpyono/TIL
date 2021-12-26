const bgm = new Audio('sound/bg.mp3');
const carrotSound = new Audio('sound/carrot_pull.mp3');
const bugSound = new Audio('sound/bug_pull.mp3');
const winSound = new Audio('sound/game_win.mp3');

const gameField = document.querySelector('.game-field');
const carrot = document.querySelector('.carrot');
const bug = document.querySelector('.bug');

const controlBtn = document.querySelector('.control__btn');
const controlScore = document.querySelector('.control__score');
const controlTimer = document.querySelector('.control__timer');

const PopUp = document.querySelector('.Pop-up');
const PopUpBtn = document.querySelector('.Pop-up__btn');
const PopUpMessage = document.querySelector('.Pop-up__message');

const gameFieldWidth = gameField.getBoundingClientRect().width;
const gameFieldHeight = gameField.getBoundingClientRect().height;

let carrotNum = 20;
const bugNum = 10;
const carrotSize = 80; // 이미지 사이즈

let time = 20; //sec
let timerId = '';

let started = true;



function createField () {
    createItem("carrot", carrotNum);
    createItem("bug", bugNum);
    gameField.addEventListener('click',ClickEvnet);
}

function ClickEvnet (event) {
    const target = event.target;
    if(target.className === "carrot") {
            carrotSound.play();
            target.remove();
            --carrotNum;
            score(); 
    }

    if(target.className === "bug") {
            bugSound.play();
            PopUpMessage.textContent = " YOT LOST!";
            gameover();   
    }

    if(carrotNum === 0) {
            PopUpMessage.innerText = "YOU WON!";
            winSound.play();
            gameover();
    }
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

        gameField.appendChild(toBeCreated);
  }
}

function createPositionX () {
    const x = Math.floor(Math.random() *(gameFieldWidth-carrotSize) );
    return x;
}

function createPositionY () {
    const y = Math.floor(Math.random() *(gameFieldHeight-carrotSize));
    return y;
}

function timer () {
    if(time === 0 ) {
        PopUpMessage.textContent = " YOU LOST!";
        gameover();
    }

    let minute = Math.floor(time / 60);
    let sec = time % 60;

    controlTimer.innerText = `${minute}:${sec}`;    
    time--;
}

function score () {
    controlScore.innerText = carrotNum;
}


function startGame () {
    bgm.play();
    controlBtn.innerHTML = `<i class="fas fa-pause"></i>`;
    HidePopup();
    time = 20;
    started = false;
    createField();
    timer();
    timerId = setInterval(timer, 1000);
    score();
}

function gameover () {
    bgm.pause();
    clearInterval(timerId);
    popUp();
    gameField.removeEventListener('click',ClickEvnet);
    started = true;
}

function popUp () {
    PopUp.style.visibility = 'visible';
    controlBtn.style.visibility = "hidden"; 
}

function HidePopup () {
    PopUp.style.visibility = "hidden";
    controlBtn.style.visibility = "visible"; 
}



controlBtn.addEventListener('click', () => {
  if(started) {
    startGame();
  } else {
    PopUpMessage.textContent = "Replay?";
    gameover();
  }
})  

PopUpBtn.addEventListener('click', () => {
    gameField.innerHTML = '';
    carrotNum = 20;
    startGame();
})


