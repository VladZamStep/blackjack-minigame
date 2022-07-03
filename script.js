// let firstCard = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
// let secondCard = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
// let firstCard = getRandomNumber();
// let secondCard = getRandomNumber();
// let cards = [firstCard, secondCard];
// let sum = firstCard + secondCard;

let player = { name: 'Vlad', chips: 145 };
let cards = [];
let sum = 0;
let isAlive = false;
let message = '';

let messageEl = document.getElementById('message-el');
let btn1El = document.querySelector('#btn1');
let sumEl = document.querySelector('#sum-el'); //# - используется для id, . - используется для class
let cardsEl = document.querySelector('.cards');
let playerEl = document.getElementById('player-el');

playerEl.textContent = `Hi, ${player.name} $${player.chips}`;

function getRandomNumber() {
    let randomNumber = Math.floor(Math.random() * 13) + 1;
    if (randomNumber === 1) {
        return 11;
    }
    else if (randomNumber > 10) {
        return 10;
    }
    else { return randomNumber };
}

function startGame() {
    cards = [];
    isAlive = true;
    let firstCard = getRandomNumber();
    let secondCard = getRandomNumber();
    cards.push(firstCard, secondCard);
    sum = firstCard + secondCard;
    renderGame();
}

function funcNewCard() {
    if (isAlive === true) {
        let newCard = getRandomNumber();
        sum += newCard;
        cards.push(newCard);
        console.log(cards);
        renderGame();
    }
}

function renderGame() {
    sumEl.textContent = `Sum: ${sum}`;
    cardsEl.textContent = `Cards: `
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += `${cards[i]} `;
    }
    if (sum <= 20) {
        message = 'Do you want to draw a new card?';
        btn1El.innerText = 'START GAME';
    }
    else if (sum === 21) {
        message = "You've got a BlackJack!";
        isAlive = false;
        btn1El.innerText = 'RESTART?';
    }
    else {
        message = 'You are out of the game...';
        isAlive = false;
        btn1El.innerText = 'RESTART?';
    }
    messageEl.textContent = message;
}
