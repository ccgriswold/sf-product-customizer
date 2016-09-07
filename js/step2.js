/* jshint esnext: true, browser: true */

// write a module to abstract toggling, validation for the steps

const toggle = require('./toggle');
const typeface = require('./typeface');

// step 2 select boxes
const topSelection = document.getElementById('step-2__select');
const topIconSelection = document.getElementById('step-2__select-icon');

// display area for selected icon
const topIconDisplay = document.getElementById('step-2__icon-display');

// step 2 customization sections
const topSelectIcon = document.getElementById('step-2__icon');
const topTypeface = document.getElementById('step-2__typeface');
const topCustomText = document.getElementById('step-2__custom-text');
const topStockText = document.getElementById('step-2__stock-text');

const topOptions = [ topSelectIcon, topTypeface, topCustomText, topStockText ];


const options = function () {
    return {
        none() { 
            toggle.options(topOptions);

            if (typeface.isStepSet('step2')) {
                typeface.unset();
                typeface.unsetStep('step2');
            }
        },
        icon() {
            toggle.options(topOptions, topSelectIcon);
            
            if (typeface.isStepSet('step2')) {
                typeface.unset();
                typeface.unsetStep('step2');
            }
        },
        text() {
            toggle.options(topOptions, topCustomText);
            
            if (!typeface.isSet()) {
                toggle.optionOn(topTypeface);
                typeface.set();
                typeface.setStep('step2');
            }

            console.log('Did Step 2 set typeface? ' + typeface.isStepSet('step2'));
        },
        stock() {
            toggle.options(topOptions, topStockText);

            if (!typeface.isSet()) {
                toggle.optionOn(topTypeface);
                typeface.set();
                typeface.setStep('step2');
            }

            console.log('Did Step 2 set typeface? ' + typeface.isStepSet('step2'));
        },
        quote_1() { topStockText.textContent = 'Quote 1 goes here'; }, 
        quote_2() { topStockText.textContent = 'Quote 2 goes here'; },
        quote_3() { topStockText.textContent = 'Quote 3 goes here'; },
        quote_4() { topStockText.textContent = 'Quote 4 goes here'; },
        verse_1() { topStockText.textContent = 'Verse 1 goes here'; },
        verse_2() { topStockText.textContent = 'Verse 2 goes here'; },
        verse_3() { topStockText.textContent = 'Verse 3 goes here'; },
        verse_4() { topStockText.textContent = 'Verse 4 goes here'; }
    };
}();


function getTopSelection() {
    let topOption = topSelection.options[topSelection.selectedIndex].value;
    
    if (typeof options[topOption] === 'undefined' || topOption === 'stock' || topOption === '_') {
        options.none();
        topSelection.value = '_';
    }
    else if (topOption.match(/quote_[0-9]+|verse_[0-9]+/)) {
        options.stock();
        options[topOption]();
    }
    else {
        options[topOption]();
    }

    console.log('Has the \'global\' typeface option been used? ' + typeface.isSet());
}




// STEP 2: Customize the top of the message box
module.exports = {
    topSelection,
    topIconSelection,
    topIconDisplay,
    options,
    getTopSelection
};
