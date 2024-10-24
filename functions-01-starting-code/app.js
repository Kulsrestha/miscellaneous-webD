const startGameBtn = document.getElementById('start-game-btn');

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_USER_CHOICE = ROCK;
var gameIsRunning = false;
const RESULT_DRAW = 'DRAW';
const RESULT_PLAYER_WINS = 'PLAYER_WINS';
const RESULT_COMPUTER_WINS = 'COMPUTER_WINS';

const getPlayerChoice = function(){
    const selection = prompt(`${ROCK} , ${PAPER} or ${SCISSORS}?`,'').toUpperCase();
    if(selection != ROCK && selection != PAPER && selection != SCISSORS){
        alert(`Invalid choice!! We chose ${DEFAULT_USER_CHOICE} for you`);
        return DEFAULT_USER_CHOICE;
    }
    return  selection;
}

const getComputerChoice = function(){
    const randomValue = Math.random();

    if(randomValue>=0 && randomValue <= 0.33){
        return ROCK;
    }
    if(randomValue>0.33 && randomValue <= 0.66){
        return PAPER;
    }
    else{
        return SCISSORS;
    }
    
}

const getWinner = (cChoice,pChoice) => {
    if(cChoice === pChoice){
        return RESULT_DRAW;
    }
    else if(cChoice === ROCK && pChoice === PAPER || cChoice === SCISSORS && pChoice === ROCK || cChoice === PAPER && pChoice === SCISSORS){
        return RESULT_PLAYER_WINS;
    }
    else{
        return RESULT_COMPUTER_WINS;
    }
}

function startGame(){
    if(gameIsRunning){
        return ;
    }
    gameIsRunning = true;
    console.log("Game starting...");
    const playerChoice = getPlayerChoice();
    const computerChoice = getComputerChoice();
    const winner = getWinner(computerChoice,playerChoice);
    // console.log(winner);
    let message = `You picked ${playerChoice} , computer picked ${computerChoice} , therefore `;
    if(winner === RESULT_DRAW){
        message = message + " you had a draw";
    }
    else if(winner === RESULT_PLAYER_WINS){
        message = message + "  you won";
    }
    else{
        message = message + " computer won";
    }
    alert(message);
}



startGameBtn.addEventListener('click',startGame); 
