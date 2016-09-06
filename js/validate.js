/* jshint esnext: true, browser: true */

const error = document.getElementById('selection-error');

function validateStep(select) {
    if (select.value === '_') {
        this.error.textContent = 'Error: Please make a selection.';
        return false;
    }
    // else if (select.value === 'text' && textOption === '') {
    //     this.error.textContent = 'Error: Please enter your custom text.';
    //     return false;
    // }
    else {
        return true;
    }
}