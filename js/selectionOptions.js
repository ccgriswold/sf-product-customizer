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
        
        quote_1() { lidStockText.textContent = 'Quote 1 goes here'; }, 
        quote_2() { lidStockText.textContent = 'Quote 2 goes here'; },
        quote_3() { lidStockText.textContent = 'Quote 3 goes here'; },
        quote_4() { lidStockText.textContent = 'Quote 4 goes here'; },
        verse_1() { lidStockText.textContent = 'Verse 1 goes here'; },
        verse_2() { lidStockText.textContent = 'Verse 2 goes here'; },
        verse_3() { lidStockText.textContent = 'Verse 3 goes here'; },
        verse_4() { lidStockText.textContent = 'Verse 4 goes here'; }
    return {
        
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
