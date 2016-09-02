/* jshint esnext: true, browser: true */

// reference in shopify {{ 'filename.js' | asset_url | script_tag }}

/**
    *** NEEDS: ***
    - validate each step so that user cannot progress until selection has been made
    - maybe clear unused form elements before submission
    - add image upload functionality w/cropping <== use croppie
    - pass selected text as a formatted image and display final product to user for proofing purposes
    - gift options for step 5
    - stock icon options only - no user uploaded icons
    - stock quotes provided step 4
    - need to identify persons that have funded on Kickstarter to give discount when they custom box
    - live hooks into Shopify for Kickstarter
    - way to handle 50 state outline stock option
***/


    const step1 = require('./step1');
    const step2 = require('./step2');
    const step3 = require('./step3');
    const step4 = require('./step4');
    const step5 = require('./step5');

    // set default box type for step 1
    step1.displaySelectedBox('ammo');


    const controller = function () {
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
        };
    }();



    step2(controller);

    function validateStep(select) {
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
        else if (e.target === step5.giftSelection) {
            step5.getGiftSelection();
        }

        e.stopPropagation();  
    }, false);




    const progressBtns = document.getElementById('progress-buttons');

    // customization form listener for select fields
    progressBtns.addEventListener('click', function (e) {
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

