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
        quote_1() { lidStockText.textContent = 'Our Tea is Sweet, Words are Long, Days are Warm, And Faith is Strong'; },
        quote_2() { lidStockText.textContent = 'Dads holds our hand for a little while and our hearts forever.'; },
        quote_3() { lidStockText.textContent = 'Mom: The glue that holds everything together even when she feels like she may fall apart.'; },
        quote_4() { lidStockText.textContent = 'Carolina Born, Carolina Raised, Carolina Proud All My Days.'; },
        verse_1() { lidStockText.textContent = '"The lazy do not roast any game, but the diligent feed on the riches of the hunt." -Proverbs 12-27'; },
        verse_2() { lidStockText.textContent = '"Train up a child in the way he should go, even when he is old he will not depart from it." -Proverbs 22:6'; },
        verse_3() { lidStockText.textContent = '"Yet in all these things we are more than conquerors through Him who loved us." -Romans 8:37'; },
        verse_4() { lidStockText.textContent = 'Southern Beels are raised on Sweet Tea and a whole lotta\' Jesus.'; }
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
