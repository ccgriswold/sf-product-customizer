/* jshint esnext: true, browser: true */

// STEP 5: Customize gift to go inside the message box
module.exports = function () {
    
    // private variables for step 5 validation
    let typefaceStep5 = false;

    return {
        giftSelection: document.getElementById('step-5__select'),
        
        options: function (){
            const giftTypeface = document.getElementById('step-5__typeface');
            const giftCustomText = document.getElementById('step-5__custom-text');

            return {
                none() { 
                    controller.toggleOptionOff(giftCustomText);
                    controller.toggleOptionOff(giftTypeface);
                    
                    if (step5.isTypefaceSet()) {
                        controller.unsetTypeface();
                        step5.unsetTypeface();
                    }
                },
                text() {
                    if (!controller.isTypefaceSet()) {
                        controller.toggleOptionOn(giftTypeface);
                        controller.setTypeface();
                        step5.setTypeface();
                    }

                    controller.toggleOptionOn(giftCustomText);
                    console.log('Did Step 5 set typeface? ' + step5.isTypefaceSet());
                }
            };
        }(),

        getGiftSelection() {
            let giftOption = this.giftSelection.options[this.giftSelection.selectedIndex].value;

            if (typeof this.options[giftOption] === 'undefined' || giftOption === '_') {
                this.options.none();
                giftOption.value = '_';
            }
            else {
                this.options[giftOption]();
            }

            console.log('Has the typeface option been used? ' + controller.isTypefaceSet());
        },

        setTypeface() {
            typefaceStep5 = true;
        },

        unsetTypeface() {
            typefaceStep5 = false;
        },

        isTypefaceSet() {
            return typefaceStep5;
        }
    };

};