/* jshint esnext: true, browser: true */

// STEP 4: Customize the lid of the message box
module.exports = function () {
    
    // private variables for step 4 validation
    let typefaceStep4 = false;

    return {
        lidSelection: document.getElementById('step-4__select'),
        
        options: function (){
            const lidTypeface = document.getElementById('step-4__typeface');
            const lidCustomText = document.getElementById('step-4__custom-text');

            return {
                none() { 
                    controller.toggleOptionOff(lidCustomText);
                    controller.toggleOptionOff(lidTypeface);
                    
                    if (step4.isTypefaceSet()) {
                        controller.unsetTypeface();
                        step4.unsetTypeface();
                    }
                },
                text() {
                    if (!controller.isTypefaceSet()) {
                        controller.toggleOptionOn(lidTypeface);
                        controller.setTypeface();
                        step4.setTypeface();
                    }

                    controller.toggleOptionOn(lidCustomText);
                    console.log('Did Step 4 set typeface? ' + step4.isTypefaceSet());
                }
            };
        }(),

        getLidSelection() {
            let lidOption = this.lidSelection.options[this.lidSelection.selectedIndex].value;

            if (typeof this.options[lidOption] === 'undefined' || lidOption === '_') {
                this.options.none();
                lidOption.value = '_';
            }
            else {
                this.options[lidOption]();
            }

            console.log('Has the typeface option been used? ' + controller.isTypefaceSet());
        },

        setTypeface() {
            typefaceStep4 = true;
        },

        unsetTypeface() {
            typefaceStep4 = false;
        },

        isTypefaceSet() {
            return typefaceStep4;
        }
    };

};