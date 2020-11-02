//Buttons
const buttons = document.querySelectorAll('.pick');
const scoreEl = document.getElementById('score');
const main = document.getElementById('main');
const selection = document.getElementById('selection');
const reset = document.getElementById('reset');
const user_select = document.getElementById('user_select');
const computer_select = document.getElementById('computer_select');
const winner = document.getElementById('winner');

//Modal Buttons
const openBtn = document.getElementById('open');
const closeBtn = document.getElementById('close');
const modal = document.getElementById('modal');

//Choices
const choices=['paper', 'rock', 'scissors'];

//Initial Scocres
let score = 0;
let userChoice = undefined; 

//User Choice
buttons.forEach((button) => {
    button.addEventListener('click',() =>{
        userChoice = button.getAttribute('data-choice');       
        checkWinner();
    });
});

//Reset the Game
reset.addEventListener('click', () =>{
    //show the main | hide the selection
    main.style.display = 'flex';
    selection.style.display = 'none';
});

//Open Modal
openBtn.addEventListener('click', () =>{
    modal.style.display = 'flex'
});

//CLose Modal
closeBtn.addEventListener('click', () =>{
    modal.style.display = 'none'
});

//checkWinner Function
function checkWinner(){
    const computerChoice = pickRandomChoice();

    //update the view
    updateSelection(user_select, userChoice);
    updateSelection(computer_select, computerChoice);
    
    if(userChoice === computerChoice)
    {
        //draw | tie
        winner.innerText = 'draw'
    }
    else if((userChoice ==='paper' && computerChoice ==='rock') || (userChoice === 'rock' && computerChoice === 'scissors') || (userChoice === 'scissors' && computerChoice === 'paper'))
    {
        //user won
        updateScore();
        winner.innerText = 'You won'
    }
    else
    {
        //user lost
        winner.innerText = 'You lost'
    }

    //show the selection | hide the main
    main.style.display = 'none';
    selection.style.display = 'flex';
}

//Score Update
function updateScore(value){
    score+= 1;

    scoreEl.innerText = score;
}

//Opponent|Computer Choice
function pickRandomChoice(){
    return choices[Math.floor(Math.random()*choices.length)];
}

//Selection Update
function updateSelection(selectionEl, choice){
    //class reset
    selectionEl.classList.remove('btn-paper');
    selectionEl.classList.remove('btn-rock');
    selectionEl.classList.remove('btn-scissors');

    //update the image
    const img = selectionEl.querySelector('img');
    selectionEl.classList.add(`btn-${choice}`);
    img.src = `./Images/icon-${choice}.svg`;
    img.alt = choice;
}

