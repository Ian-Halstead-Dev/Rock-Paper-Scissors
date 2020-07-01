let score = sessionStorage.getItem('Score')!;

const scoreHTML = document.getElementById('score-counter')!;

if (isNaN(parseInt(score))) {
	score = '0';

	sessionStorage.setItem('Score', score);
}

scoreHTML.innerHTML = score;
