/* jshint esnext: true, browser: true */

// STEP 2: Customize the top of the message box
module.exports = function (c) {

    // private variables for step 2 validation
    let typefaceStep2 = false;

    return {
        topSelection: document.getElementById('step-2__select'),

        options: function() {
            const topTypeface = document.getElementById('step-2__typeface');
            const topCustomText = document.getElementById('step-2__custom-text');
            const topStockText = document.getElementById('step-2__stock-text');
            const topUploadIcon = document.getElementById('step-2__upload-icon');

            const topOptions = [ topCustomText, topStockText, topUploadIcon ];

            return {
                none() { 
                    c.toggleOptions(topOptions);
                    c.toggleOptionOff(topTypeface);

                    if (step2.isTypefaceSet()) {
                        c.unsetTypeface();
                        step2.unsetTypeface();
                    }
                },
                text() {
                    c.toggleOptions(topOptions, topCustomText);
                    
                    if (!c.isTypefaceSet()) {
                        c.toggleOptionOn(topTypeface);
                        c.setTypeface();
                        step2.setTypeface();
                    }
                },
                icon() {
                    c.toggleOptions(topOptions, topUploadIcon);
                    c.toggleOptionOff(topTypeface);
                    
                    if (step2.isTypefaceSet()) {
                        c.unsetTypeface();
                        step2.unsetTypeface();
                    }
                },
                stock() {
                    c.toggleOptions(topOptions, topStockText);

                    if (!c.isTypefaceSet()) {
                        c.toggleOptionOn(topTypeface);
                        c.setTypeface();
                        step2.setTypeface();
                    }
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
        }(),

        getTopSelection() {
            let topOption = this.topSelection.options[this.topSelection.selectedIndex].value;
            
            if (typeof this.options[topOption] === 'undefined' || topOption === 'stock' || topOption === '_') {
                this.options.none();
                this.topSelection.value = '_';
            }
            else if (topOption.match(/quote_[0-9]+|verse_[0-9]+/)) {
                console.log('You\'ve selected stock text!!');
                this.options.stock();
                this.options[topOption]();
            }
            else {
                this.options[topOption]();
            }

            console.log('Has the typeface option been used? ' + cntr.isTypefaceSet());
        },

        setTypeface() {
            typefaceStep2 = true;
        },

        unsetTypeface() {
            typefaceStep2 = false;
        },

        isTypefaceSet() {
            return typefaceStep2;
        },
    };
};
