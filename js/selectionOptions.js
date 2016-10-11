/* jshint esnext: true, browser: true */

const toggle = require('./toggle');
const typeface = require('./typeface');


function options(opt1, opt2, opt3, opt4, opt5) {
    function none() {
        toggle.options(lidOptions);

        if (typeface.isStepSet('step4')) {
            typeface.unset();
            typeface.unsetStep('step4');
        }
    }


    function image() {
        toggle.options(lidOptions, lidUploadImage);

        if (typeface.isStepSet('step4')) {
            typeface.unset();
            typeface.unsetStep('step4');
        }
    }


    function icon() {
        toggle.options(lidOptions, lidSelectIcon);

        if (typeface.isStepSet('step4')) {
            typeface.unset();
            typeface.unsetStep('step4');
        }
    }


    function text() {
        toggle.options(lidOptions, lidCustomText);

        if (!typeface.isSet()) {
            toggle.optionOn(lidTypeface);
            typeface.set();
            typeface.setStep('step4');
        }

        console.log('Did Step 4 set typeface? ' + typeface.isStepSet('step4'));
    }


    function stock() {
        toggle.options(lidOptions, lidStockText);

        if (!typeface.isSet()) {
            toggle.optionOn(lidTypeface);
            typeface.set();
            typeface.setStep('step4');
        }

        console.log('Did Step 4 set typeface? ' + typeface.isStepSet('step4'));
    }

    return {
        quote_1() { lidStockText.textContent = 'Our Tea is Sweet, Words are Long, Days are Warm, And Faith is Strong'; },
        quote_2() { lidStockText.textContent = 'Dads holds our hand for a little while and our hearts forever.'; },
        quote_3() { lidStockText.textContent = 'Mom: The glue that holds everything together even when she feels like she may fall apart.'; },
        quote_4() { lidStockText.textContent = 'Carolina Born, Carolina Raised, Carolina Proud All My Days.'; },
        verse_1() { lidStockText.textContent = '"The lazy do not roast any game, but the diligent feed on the riches of the hunt." -Proverbs 12-27'; },
        verse_2() { lidStockText.textContent = '"Train up a child in the way he should go, even when he is old he will not depart from it." -Proverbs 22:6'; },
        verse_3() { lidStockText.textContent = '"Yet in all these things we are more than conquerors through Him who loved us." -Romans 8:37'; },
        verse_4() { lidStockText.textContent = 'Southern Beels are raised on Sweet Tea and a whole lotta\' Jesus.'; }
    };
}


function getSelection() {
    let option = selection.options[selection.selectedIndex].value;

    if (typeof options[option] === 'undefined' || option === '_') {
        options.none();
        selection.value = '_';
    }
    else if (option.match(/quote_[0-9]+|verse_[0-9]+/)) {
        options.stock();
        options[option]();
    }
    else {
        options[option]();
    }

    console.log('Has the \'global\' typeface option been used? ' + typeface.isSet());
}




module.exports = {
    options,
    getSelection
};
