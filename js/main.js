/* jshint esnext: true, browser: true */

// reference in shopify {{ 'filename.js' | asset_url | script_tag }}

;(function () {

/**
 *  NEEDS:
 *  - validate each step so that user cannot progress until selection has been made
 *  - maybe clear unused form elements before submission
 *  - add image upload functionality w/cropping <== use croppie
 *  - pass selected text as a formatted image and display final product to user for proofing purposes
 *  - gift options for step 5
 *  - stock icon options only - no user uploaded icons
 *  - stock quotes provided step 4
 *  - need to identify persons that have funded on Kickstarter to give discount when they custom box
 *  - live hooks into Shopify for Kickstarter
 
 *  - way to handle 50 state outline stock option
 */


    // STEP 1: Select the type of box to be customized
    const step1 = {
        boxSelection: document.getElementById('step-1__select'),
        boxImg: document.getElementById('step-1__image'),
        boxPrice: document.getElementById('step-1__price'),
        boxDesc: document.getElementById('step-1__desc'),

        box: {
            ammo: {
                name: 'Ammo Box',
                image: "{{ 'ammo.jpg' | asset_url }}",
                price: 109.99,
                desc: 'Ammo Box description goes here'
            },
            artillery: {
                name: 'Artillery Box',
                image: "{{ 'artillery.jpg' | asset_url }}",
                price: 119.99,
                desc: 'Artillery Box description goes here'
            },
            traditional: {
                name: 'Traditional Box',
                image: "{{ 'traditional.jpg' | asset_url }}",
                price: 115.99,
                desc: 'Traditional Box description goes here'
            },
            letter: {
                name: 'Letter Box',
                image: "{{ 'letter.jpg' | asset_url }}",
                price: 95.99,
                desc: 'Letter Box description goes here'
            },
        },

        displaySelectedBox(boxType) {
            this.boxImg.src = this.box[boxType].image;
            this.boxImg.alt = this.box[boxType].name;
            this.boxPrice.textContent = this.box[boxType].price;
            this.boxDesc.textContent = this.box[boxType].desc;
        },

        getSelectedBox() {
            let boxOption = this.boxSelection.options[this.boxSelection.selectedIndex].value;

            // if unrecognized box type, set default
            if (typeof this.box[boxOption] === 'undefined') {
                this.displaySelectedBox('ammo');
                this.boxSelection.value = 'ammo';
            } else {
                this.displaySelectedBox(boxOption);
            }  
        }
    };

    // set default box type for step 1
    step1.displaySelectedBox('ammo');




    // STEP 2: Customize the top of the message box
    const step2 = function () {

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
                        controller.toggleOptions(topOptions);
                        controller.toggleOptionOff(topTypeface);

                        if (step2.isTypefaceSet()) {
                            controller.unsetTypeface();
                            step2.unsetTypeface();
                        }
                    },
                    text() {
                        controller.toggleOptions(topOptions, topCustomText);
                        
                        if (!controller.isTypefaceSet()) {
                            controller.toggleOptionOn(topTypeface);
                            controller.setTypeface();
                            step2.setTypeface();
                        }
                    },
                    icon() {
                        controller.toggleOptions(topOptions, topUploadIcon);
                        controller.toggleOptionOff(topTypeface);
                        
                        if (step2.isTypefaceSet()) {
                            controller.unsetTypeface();
                            step2.unsetTypeface();
                        }
                    },
                    stock() {
                        controller.toggleOptions(topOptions, topStockText);

                        if (!controller.isTypefaceSet()) {
                            controller.toggleOptionOn(topTypeface);
                            controller.setTypeface();
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
                    this.options.stock();
                    this.options[topOption]();
                }
                else {
                    this.options[topOption]();
                }

                console.log('Has the typeface option been used? ' + controller.isTypefaceSet());
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
    }();




    // STEP 3: Customize the front of the message box
    const step3 = function () {
        
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

    }();




    // STEP 4: Customize the lid of the message box
    const step4 = function () {
        
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

    }();




    // STEP 5: Customize gift to go inside the message box
    const step5 = function () {
        
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

    }();




    const controller = function (stp2, stp3, stp4, stp5) {
        let step = 1;
        let typefaceSet = false;

        const step1 = document.getElementById('step-1');
        const step2 = document.getElementById('step-2');
        const step3 = document.getElementById('step-3');
        const step4 = document.getElementById('step-4');
        const step5 = document.getElementById('step-5');

        const steps = [ step1, step2, step3, step4, step5 ];

        const indicator1 = document.getElementById('progress-indicator__step-1');
        const indicator2 = document.getElementById('progress-indicator__step-2');
        const indicator3 = document.getElementById('progress-indicator__step-3');
        const indicator4 = document.getElementById('progress-indicator__step-4');
        const indicator5 = document.getElementById('progress-indicator__step-5');

        const indicators = [ indicator1, indicator2, indicator3, indicator4, indicator5 ];

        return {
            nextBtn: document.getElementById('next'),
            previousBtn: document.getElementById('previous'),
            addToCartBtn: document.getElementById('add-cart'),

            error: document.getElementById('selection-error'),

            nextStep() { step = step === 5 ? step = 5 : step += 1; },
            previousStep() { step = step === 1 ? step = 1 : step -= 1; },
            getStep() { return step; },

            progressUI() {
                let state = this.getStep();
                
                if (state === 1) {
                    this.toggleOptions(steps, step1);
                    this.toggleIndicator(indicators, indicator1);
                    this.toggleOptionOff(this.previousBtn);
                }
                else if (state === 2) {
                    this.toggleOptions(steps, step2);
                    this.toggleIndicator(indicators, indicator2);
                    this.toggleOptionOn(this.previousBtn);
                }
                else if (state === 3) {
                    this.toggleOptions(steps, step3);
                    this.toggleIndicator(indicators, indicator3);                    
                }
                else if (state === 4) {
                    this.toggleOptions(steps, step4);
                    this.toggleIndicator(indicators, indicator4);
                    this.toggleOptionOff(this.addToCartBtn);
                    this.toggleOptionOn(this.nextBtn);
                }
                else if (state === 5) {
                    this.toggleOptions(steps, step5);
                    this.toggleIndicator(indicators, indicator5);
                    this.toggleOptionOff(this.nextBtn);
                    this.toggleOptionOn(this.addToCartBtn);
                }

            },
            
            setTypeface() { typefaceSet = true; },
            unsetTypeface() { typefaceSet = false; },
            isTypefaceSet() { return typefaceSet; },

            toggleOptions(optArr, opt) {
                optArr.map((e) => {
                    if (e.className.indexOf('hidden') === -1) {
                        e.className += 'hidden';
                    }
                });

                if (typeof opt !== 'undefined') {
                    opt.className = opt.className.replace('hidden', '');
                }
            },
            toggleOptionOn(opt) {
                if (opt.className.indexOf('hidden') > -1) {
                    opt.className = opt.className.replace('hidden', '');
                }
            },
            toggleOptionOff(opt) {
                if (opt.className.indexOf('hidden') === -1) {
                    opt.className += 'hidden';
                }
            },
            toggleIndicator(indArr, ind) {
                indArr.map((e) => {
                    if (e.className.indexOf(' progress-indicator__step--highlight') > -1) {
                        e.className = e.className.replace(' progress-indicator__step--highlight', '');
                    }
                });

                ind.className += ' progress-indicator__step--highlight';
            },

            validateStep(select) {
                if (select.value === '_') {
                    this.error.textContent = 'Error: Please make a selection.';
                    return false;
                }
                // else if (select.value === 'text' && textOption === '') {
                //     this.error.textContent = 'Error: Please enter your custom text.';
                //     return false;
                // }
                else {
                    return true;
                }
            }
        };
    }(step2, step3, step4, step5);




    const form = document.getElementById('customization-form');

    // customization form listener for select fields
    form.addEventListener('change', function (e) {
        if (e.target === step1.boxSelection) {
            step1.getSelectedBox();
        }
        else if (e.target === step2.topSelection) {
            step2.getTopSelection();
        }
        else if (e.target === step3.frontSelection) {
            step3.getFrontSelection();
        }
        else if (e.target === step4.lidSelection) {
            step4.getLidSelection();
        }
        // else if (e.target === step5.giftSelection) {
        //     step5.getGiftSelection();
        // }

        e.stopPropagation();  
    }, false);




    const formButtons = document.getElementById('form-buttons');

    // customization form listener for select fields
    formButtons.addEventListener('click', function (e) {
        if (e.target === controller.nextBtn) {
            controller.nextStep();
            controller.progressUI();
            console.log('You\'re on step: ' + controller.getStep());
        }
        else if (e.target === controller.previousBtn) {
            controller.previousStep();
            controller.progressUI();
            console.log('You\'re on step: ' + controller.getStep());
        }

        e.stopPropagation();
    }, false);


    // grab z radio buttons
    const radios = document.getElementsByName('typeface');

    // let value = radios.map((e) => e.checked || e); itertate with a for loop

/*
    // image loading functionality
    var imageLoader = document.getElementById('imageLoader');
    var canvas = document.getElementById('imageCanvas');
    var ctx = canvas.getContext('2d');

    imageLoader.addEventListener('change', handleImage, false);

    // ctx.beginPath();
    // ctx.ellipse(100, 100, 50, 75, 45 * Math.PI/180, 0, 2 * Math.PI);
    // ctx.stroke();

    function handleImage(e){
        var reader = new FileReader();
        
        reader.onload = function(event){
            var img = new Image();
            
            img.onload = function(){
                canvas.width = img.width;
                canvas.height = img.height;
                ctx.drawImage(img,0,0);
            };
            img.src = event.target.result;
        };
        reader.readAsDataURL(e.target.files[0]);     
    }
*/

}());
