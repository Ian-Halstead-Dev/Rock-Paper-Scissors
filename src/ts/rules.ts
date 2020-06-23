const rulesBtnHTML = document.getElementById('rules')!;
const rulesPage = document.getElementById('rules-image')!;
const closeRules = document.getElementById('close')!;

const toggleRules = () => {
	rulesPage.classList.toggle('active');
};

rulesBtnHTML.addEventListener('click', () => {
	toggleRules();
});

closeRules.addEventListener('click', () => {
	toggleRules();
});
