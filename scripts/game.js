//Code for generating random number on Dice.

const rollButton1 = document.getElementById("dice1");
const rollButton2 = document.getElementById("dice2");
const player1Score = document.getElementById("label1");
const player2Score = document.getElementById("label2");

const player1Name = localStorage.getItem('player1-name');
const player2Name = localStorage.getItem('player2-name');
const winnerScore = localStorage.getItem('total-win-score');

const p1Dice = document.getElementById("p1DiceImage");
const p2Dice = document.getElementById("p2DiceImage");



let p1TotalCount = 0;
let p2TotalCount = 0;

const min = 1;
const max = 6;
let randomNum;


document.getElementById('player1Name').textContent = player1Name;
document.getElementById('player2Name').textContent = player2Name;

rollButton1.onclick = function(){
    randomNum = Math.floor(Math.random() * max) + min;
    player1Score.textContent = randomNum;
    p1TotalCount = p1TotalCount + randomNum;
    document.getElementById('p1Total').textContent = p1TotalCount;
    
    // if (p1TotalCount >= winnerScore) {
    //     console.log(player1Name + " is the Winner");
        
    // }
    // else if (p2TotalCount >= winnerScore) {
    //     console.log(player2Name + " is the Winner");
    // }
    // else if (p1TotalCount == p2TotalCount) {
    //     console.log("Its a Draw Match");
    // }
}

rollButton1.addEventListener("click",function() {
    switch(randomNum) {
        case 1:
            p1Dice.src = "assets/Dice-1.png";
            p1Dice.style.display = "block";
            break;
        case 2:
            p1Dice.src = "assets/Dice-2.png";
            p1Dice.style.display = "block";
            break;
        case 3:
            p1Dice.src = "assets/Dice-3.png";
            p1Dice.style.display = "block";
            break;
        case 4:
            p1Dice.src = "assets/Dice-4.png";
            p1Dice.style.display = "block";
            break;
        case 5:
            p1Dice.src = "assets/Dice-5.png";
            p1Dice.style.display = "block";
            break;
        case 6:
            p1Dice.src = "assets/Dice-6.png";
            p1Dice.style.display = "block";
            break;
        default:
            p1Dice.style.display = "none";
            
    }
});

rollButton2.onclick = function(){
    randomNum = Math.floor(Math.random() * max) + min;
    player2Score.textContent = randomNum;
    p2TotalCount = p2TotalCount + randomNum;
    document.getElementById('p2Total').textContent = p2TotalCount;

    // if (p2TotalCount >= winnerScore) {
    //     console.log(player2Name + " is the Winner");
        
    // }
    // else if (p1TotalCount >= winnerScore) {
    //     console.log(player1Name + " is the Winner");
    // }
    // else if (p1TotalCount == p2TotalCount) {
    //     console.log("Its a Draw Match");
    // }
}

rollButton2.addEventListener("click",function() {
    switch(randomNum) {
        case 1:
            p2Dice.src = "assets/Dice-1.png";
            p2Dice.style.display = "block";
            break;
        case 2:
            p2Dice.src = "assets/Dice-2.png";
            p2Dice.style.display = "block";
            break;
        case 3:
            p2Dice.src = "assets/Dice-3.png";
            p2Dice.style.display = "block";
            break;
        case 4:
            p2Dice.src = "assets/Dice-4.png";
            p2Dice.style.display = "block";
            break;
        case 5:
            p2Dice.src = "assets/Dice-5.png";
            p2Dice.style.display = "block";
            break;
        case 6:
            p2Dice.src = "assets/Dice-6.png";
            p2Dice.style.display = "block";
            break;
        default:
            p2Dice.style.display = "none";
            
    }

});
