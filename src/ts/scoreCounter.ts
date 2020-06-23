let score = localStorage.getItem('Score')!;

const scoreHTML = document.getElementById('score-counter')!;

if (isNaN(parseInt(score))) {
	score = '0';

	localStorage.setItem('Score', score);
}

scoreHTML.innerHTML = score;
