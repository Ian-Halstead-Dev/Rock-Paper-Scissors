localStorage.removeItem('Selection');

const selectionButtons = Array.from(document.getElementsByClassName('img-container'))! as HTMLButtonElement[];
localStorage.removeItem('Selection');
selectionButtons.forEach((button) => {
	button.addEventListener('click', (e) => {
		e.preventDefault;
		localStorage.setItem('Selection', button.id);
		console.log(button);
	});
});
