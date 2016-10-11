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
