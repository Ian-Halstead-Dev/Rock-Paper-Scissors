"use strict";
const playerSelection = localStorage.getItem('Selection');
const createError = () => {
    document.getElementById('error').style.display = 'block';
};
if (!playerSelection) {
    createError();
    throw new Error('Selection must be made');
}
var Selections;
(function (Selections) {
    Selections[Selections["rock"] = 0] = "rock";
    Selections[Selections["paper"] = 1] = "paper";
    Selections[Selections["scissors"] = 2] = "scissors";
})(Selections || (Selections = {}));
const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));
const aiSelection = Selections[getRandomInt(3)];
const winner = (winner) => {
    const winnerLabel = document.getElementById('win-label');
    const playerDecisionContainer = document.getElementById('player-img-container');
    const playerDecision = document.getElementById('player-img');
    playerDecisionContainer.id = playerSelection;
    playerDecision.setAttribute('src', `dist/images/icon-${playerSelection}.svg`);
    const aiDecisionContainer = document.getElementById('ai-img-container');
    const aiDecision = document.getElementById('ai-img');
    aiDecisionContainer.id = aiSelection;
    aiDecision.setAttribute('src', `dist/images/icon-${aiSelection}.svg`);
    if (winner === 'player') {
        playerDecisionContainer.classList.add('winner');
        winnerLabel.innerText = 'YOU WIN';
        localStorage.setItem('Score', (parseInt(localStorage.getItem('Score')) + 1).toString());
    }
    else if (winner === 'AI') {
        aiDecisionContainer.classList.add('winner');
        winnerLabel.innerText = 'YOU LOSE';
        localStorage.setItem('Score', (parseInt(localStorage.getItem('Score')) - 1).toString());
    }
    else {
        winnerLabel.innerText = 'DRAW';
    }
};
const findGameWinner = (() => {
    if (playerSelection === aiSelection) {
        return winner('draw');
    }
    switch (playerSelection) {
        case 'rock':
            if (aiSelection === 'scissors') {
                winner('player');
            }
            else {
                winner('AI');
            }
            break;
        case 'paper':
            if (aiSelection === 'rock') {
                winner('player');
            }
            else {
                winner('AI');
            }
            break;
        case 'scissors':
            if (aiSelection === 'paper') {
                winner('player');
            }
            else {
                winner('AI');
            }
    }
})();
//# sourceMappingURL=displayWinner.js.map