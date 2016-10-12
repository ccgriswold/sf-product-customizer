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

const topOptions = [topSelectIcon, topCustomText, topStockText];


const options = {
    none(box) {
        toggle.options(topOptions);

        box.customize('font', null);
        box.customiez('text', null);
    },

    icon(box) { toggle.options(topOptions, topSelectIcon); },
    text(box) { toggle.options(topOptions, topCustomText); },
    stock(box) { toggle.options(topOptions, topStockText); },

    quote_1(box) { 
        const quote = 'Our Tea is Sweet, Words are Long, Days are Warm, And Faith is Strong';
        toggle.options(topOptions, topStockText); 
        topStockText.textContent = quote; 

        box.customize('font', 'corsiva'); // built-in quotes default to corsiva
        box.customize('text', quote);
    },
    quote_2(box) { 
        const quote = 'Dads holds our hand for a little while and our hearts forever.';
        toggle.options(topOptions, topStockText); 
        topStockText.textContent = quote; 

        box.customize('font', 'corsiva');
        box.customize('text', quote);
    },
    quote_3(box) { 
        const quote = 'Mom: The glue that holds everything together even when she feels like she may fall apart.';
        toggle.options(topOptions, topStockText); 
        topStockText.textContent = quote; 

        box.customize('font', 'corsiva');
        box.customize('text', quote);
    },
    quote_4(box) { 
        const quote = 'Carolina Born, Carolina Raised, Carolina Proud All My Days.';
        toggle.options(topOptions, topStockText); 
        topStockText.textContent = quote;

        box.customize('font', 'corsiva');
        box.customize('text', quote);
    },
    verse_1(box) { 
        const quote = '"The lazy do not roast any game, but the diligent feed on the riches of the hunt." -Proverbs 12-27';
        toggle.options(topOptions, topStockText); 
        topStockText.textContent = quote; 

        box.customize('font', 'corsiva');
        box.customize('text', quote);
    },
    verse_2(box) { 
        const quote = '"Train up a child in the way he should go, even when he is old he will not depart from it." -Proverbs 22:6';
        toggle.options(topOptions, topStockText); 
        topStockText.textContent = quote; 

        box.customize('font', 'corsiva');
        box.customize('text', quote);
    },
    verse_3(box) { 
        const quote = '"Yet in all these things we are more than conquerors through Him who loved us." -Romans 8:37';
        toggle.options(topOptions, topStockText); 
        topStockText.textContent = quote; 

        box.customize('font', 'corsiva');
        box.customize('text', quote);
    },
    verse_4(box) { 
        const quote = 'Southern Beels are raised on Sweet Tea and a whole lotta\' Jesus.';
        toggle.options(topOptions, topStockText); 
        topStockText.textContent = quote; 

        box.customize('font', 'corsiva');
        box.customize('text', quote);
    },
};

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

module.exports = {
    render(box, { mode }) {
        if (options.hasOwnProperty(mode)) {
            options[mode](box);
        } else {
            console.error('Unknown mode!');
        }
    }
}