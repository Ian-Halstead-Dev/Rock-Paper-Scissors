"use strict";
sessionStorage.removeItem('Selection');
const selectionButtons = Array.from(document.getElementsByClassName('img-container'));
sessionStorage.removeItem('Selection');
selectionButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
        e.preventDefault;
        sessionStorage.setItem('Selection', button.id);
        console.log(button);
    });
});
//# sourceMappingURL=getSelection.js.map