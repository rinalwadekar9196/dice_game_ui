const form = document.getElementById('form-container');
const player1Name = document.getElementById('player1Name');
const player2Name = document.getElementById('player2Name');
const winnerScore = document.getElementById('winScore');

form.addEventListener('submit', function(e){
    e.preventDefault();
    const player1NameValue = player1Name.value;
    const player2NameValue = player2Name.value;
    const totalWinScore = winnerScore.value;
    
    localStorage.setItem('player1-name', player1NameValue);
    localStorage.setItem('player2-name', player2NameValue);
    localStorage.setItem('total-win-score', totalWinScore);

    window.location.href="game.html";
});