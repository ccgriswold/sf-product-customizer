/* jshint esnext: true, browser: true */

// STEP 3: Customize the front of the message box
module.exports = function () {
        
    // private variables for step 3 validation
    let typefaceStep3 = false;

    return {
        frontSelection: document.getElementById('step-3__select'),
        
        options: function (){
            const frontTypeface = document.getElementById('step-3__typeface');
            const frontCustomText = document.getElementById('step-3__custom-text');

            return {
                none() { 
                    controller.toggleOptionOff(frontCustomText);
                    controller.toggleOptionOff(frontTypeface);
                    
                    if (step3.isTypefaceSet()) {
                        controller.unsetTypeface();
                        step3.unsetTypeface();
                    }
                },
                text() {
                    if (!controller.isTypefaceSet()) {
                        controller.toggleOptionOn(frontTypeface);
                        controller.setTypeface();
                        step3.setTypeface();
                    }

                    controller.toggleOptionOn(frontCustomText);
                    console.log('Did Step 3 set typeface? ' + step3.isTypefaceSet());
                }
            };
        }(),

        getFrontSelection() {
            let frontOption = this.frontSelection.options[this.frontSelection.selectedIndex].value;

            if (typeof this.options[frontOption] === 'undefined' || frontOption === '_') {
                this.options.none();
                frontOption.value = '_';
            }
            else {
                this.options[frontOption]();
            }

            console.log('Has the typeface option been used? ' + controller.isTypefaceSet());
        },

        setTypeface() {
            typefaceStep3 = true;
        },

        unsetTypeface() {
            typefaceStep3 = false;
        },

        isTypefaceSet() {
            return typefaceStep3;
        }
    };

};