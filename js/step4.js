/* jshint esnext: true, browser: true */

const toggle = require('./toggle');
const typeface = require('./typeface');

// step 3 select boxes
const lidSelection = document.getElementById('step-4__select');
const lidIconSelection = document.getElementById('step-4__select-icon');

// display area for selected icon
const lidIconDisplay = document.getElementById('step-4__icon-display');

const lidUploadImage = document.getElementById('step-4__upload-image');
const lidSelectIcon = document.getElementById('step-4__icon');
const lidTypeface = document.getElementById('step-4__typeface');
const lidCustomText = document.getElementById('step-4__custom-text');
const lidStockText = document.getElementById('step-4__stock-text');

const lidOptions = [ lidUploadImage, lidSelectIcon, lidTypeface, lidCustomText, lidStockText ];


const options = function () {
    return {
        none() { 
            toggle.options(lidOptions);
            
            if (typeface.isStepSet('step4')) {
                typeface.unset();
                typeface.unsetStep('step4');
            }
        },
        image() {
            toggle.options(lidOptions, lidUploadImage);
            
            if (typeface.isStepSet('step4')) {
                typeface.unset();
                typeface.unsetStep('step4');
            }
        },
        icon() {
            toggle.options(lidOptions, lidSelectIcon);
            
            if (typeface.isStepSet('step4')) {
                typeface.unset();
                typeface.unsetStep('step4');
            }
        },
        text() {
            toggle.options(lidOptions, lidCustomText);
            
            if (!typeface.isSet()) {
                toggle.optionOn(lidTypeface);
                typeface.set();
                typeface.setStep('step4');
            }

            console.log('Did Step 4 set typeface? ' + typeface.isStepSet('step4'));
        },
        stock() {
            toggle.options(lidOptions, lidStockText);

            if (!typeface.isSet()) {
                toggle.optionOn(lidTypeface);
                typeface.set();
                typeface.setStep('step4');
            }

            console.log('Did Step 4 set typeface? ' + typeface.isStepSet('step4'));
        },
        quote_1() { lidStockText.textContent = 'Quote 1 goes here'; }, 
        quote_2() { lidStockText.textContent = 'Quote 2 goes here'; },
        quote_3() { lidStockText.textContent = 'Quote 3 goes here'; },
        quote_4() { lidStockText.textContent = 'Quote 4 goes here'; },
        verse_1() { lidStockText.textContent = 'Verse 1 goes here'; },
        verse_2() { lidStockText.textContent = 'Verse 2 goes here'; },
        verse_3() { lidStockText.textContent = 'Verse 3 goes here'; },
        verse_4() { lidStockText.textContent = 'Verse 4 goes here'; }
    };
}();

function getLidSelection() {
    let lidOption = lidSelection.options[lidSelection.selectedIndex].value;

    if (typeof options[lidOption] === 'undefined' || lidOption === '_') {
        options.none();
        lidSelection.value = '_';
    }
    else if (lidOption.match(/quote_[0-9]+|verse_[0-9]+/)) {
        options.stock();
        options[lidOption]();
    }
    else {
        options[lidOption]();
    }

    console.log('Has the \'global\' typeface option been used? ' + typeface.isSet());
}


// STEP 4: Customize the inside lid of the message box

module.exports = {
    lidSelection,
    lidIconSelection,
    lidIconDisplay,
    options,
    getLidSelection
};

