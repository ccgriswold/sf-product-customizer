/* jshint esnext: true, browser: true */

const toggle = require('./toggle');
const typeface = require('./typeface');


const giftSelection = document.getElementById('step-5__select');

const coasterSelection = document.getElementById('coaster__select');
const coasterTypeface = document.getElementById('step-5__typeface');
const coasterCustomText = document.getElementById('step-5__custom-text');


const options = function () {
    return {
        none() { 
            toggle.options(topOptions);
            toggle.optionOff(topTypeface);

            if (typeface.isStepSet('step5')) {
                typeface.unset();
                typeface.unsetStep('step5');
            }
        },
        text() {
            toggle.options(topOptions, topCustomText);
            
            if (!typeface.isSet()) {
                toggle.optionOn(coasterTypeface);
                typeface.set();
                typeface.setStep('step5');
            }
        }
    };
}();


function getGiftSelection() {
    let giftOption = giftSelection.options[giftSelection.selectedIndex].value;

    if (typeof options[giftOption] === 'undefined' || giftOption === '_') {
        options.none();
        giftSelection.value = '_';
    }
    else {
        options[giftOption]();
    }

    console.log('Has the typeface option been used? ' + controller.isTypefaceSet());
}


// STEP 5: Customize gift to go inside the message box
module.exports = {
    giftSelection,
    options,
    getGiftSelection
};