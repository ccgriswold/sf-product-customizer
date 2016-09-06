/* jshint esnext: true, browser: true */

const toggle = require('./toggle');
const typeface = require('./typeface');

// step 3 select boxes
const frontSelection = document.getElementById('step-3__select');
const frontIconSelection = document.getElementById('step-3__select-icon');

// display area for selected icon
const frontIconDisplay = document.getElementById('step-3__icon-display');

// step 2 customization sections
const frontSelectIcon = document.getElementById('step-3__icon');
const frontTypeface = document.getElementById('step-3__typeface');
const frontCustomText = document.getElementById('step-3__custom-text');
const frontStockText = document.getElementById('step-3__stock-text');

const frontOptions = [ frontSelectIcon, frontTypeface, frontCustomText, frontStockText ];


const options = function () {
    return {
        none() { 
            toggle.options(frontOptions);
            
            if (typeface.isStepSet('step3')) {
                typeface.unset();
                typeface.unsetStep('step3');
            }
        },
        icon() {
            toggle.options(frontOptions, frontSelectIcon);
            
            if (typeface.isStepSet('step3')) {
                typeface.unset();
                typeface.unsetStep('step3');
            }
        },
        text() {
            toggle.options(frontOptions, frontCustomText);
            
            if (!typeface.isSet()) {
                toggle.optionOn(frontTypeface);
                typeface.set();
                typeface.setStep('step3');
            }

            console.log('Did Step 3 set typeface? ' + typeface.isStepSet('step3'));
        },
        stock() {
            toggle.options(frontOptions, frontStockText);

            if (!typeface.isSet()) {
                toggle.optionOn(frontTypeface);
                typeface.set();
                typeface.setStep('step3');
            }

            console.log('Did Step 3 set typeface? ' + typeface.isStepSet('step3'));
        },
        quote_1() { frontStockText.textContent = 'Quote 1 goes here'; }, 
        quote_2() { frontStockText.textContent = 'Quote 2 goes here'; },
        quote_3() { frontStockText.textContent = 'Quote 3 goes here'; },
        quote_4() { frontStockText.textContent = 'Quote 4 goes here'; },
        verse_1() { frontStockText.textContent = 'Verse 1 goes here'; },
        verse_2() { frontStockText.textContent = 'Verse 2 goes here'; },
        verse_3() { frontStockText.textContent = 'Verse 3 goes here'; },
        verse_4() { frontStockText.textContent = 'Verse 4 goes here'; }
    };
}();


function getFrontSelection() {
    let frontOption = frontSelection.options[frontSelection.selectedIndex].value;

    if (typeof options[frontOption] === 'undefined' || frontOption === '_') {
        options.none();
        frontOption.value = '_';
    }
    else if (frontOption.match(/quote_[0-9]+|verse_[0-9]+/)) {
        options.stock();
        options[frontOption]();
    }
    else {
        options[frontOption]();
    }

    console.log('Has the \'global\' typeface option been used? ' + typeface.isSet());
}


// STEP 3: Customize the front of the message box

module.exports = {
    frontSelection,
    frontIconSelection,
    frontIconDisplay,
    options,
    getFrontSelection
};
