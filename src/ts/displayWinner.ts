const playerSelection = sessionStorage.getItem('Selection')!;

const createError = () => {
	document.getElementById('error')!.style.display = 'block';
};

if (!playerSelection) {
	createError();
	throw new Error('Selection must be made');
}

enum Selections {
	'rock',
	'paper',
	'scissors'
}

const getRandomInt = (max: number) => Math.floor(Math.random() * Math.floor(max));

const aiSelection = Selections[getRandomInt(3)];
// console.log('aiSelection :>> ', aiSelection);
// console.log('playerSelection :>> ', playerSelection);

const winner = (winner: string) => {
	const winnerLabel = document.getElementById('win-label')!;

	const playerDecisionContainer = document.getElementById('player-img-container')!;
	const playerDecision = document.getElementById('player-img')!;
	playerDecisionContainer.id = playerSelection;
	playerDecision.setAttribute('src', `dist/images/icon-${playerSelection}.svg`);

	const aiDecisionContainer = document.getElementById('ai-img-container')!;
	const aiDecision = document.getElementById('ai-img')!;
	aiDecisionContainer.id = aiSelection;
	aiDecision.setAttribute('src', `dist/images/icon-${aiSelection}.svg`);

	if (winner === 'player') {
		playerDecisionContainer.classList.add('winner');
		winnerLabel.innerText = 'YOU WIN';

		sessionStorage.setItem('Score', (parseInt(sessionStorage.getItem('Score')!) + 1).toString());
	}
	else if (winner === 'AI') {
		aiDecisionContainer.classList.add('winner');
		winnerLabel.innerText = 'YOU LOSE';

		sessionStorage.setItem('Score', (parseInt(sessionStorage.getItem('Score')!) - 1).toString());
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
