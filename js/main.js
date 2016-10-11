/* jshint esnext: true, browser: true */

// reference in shopify {{ 'filename.js' | asset_url | script_tag }}

/**
    *** NEEDS: ***
    - validate each step so that user cannot progress until selection has been made
    - maybe clear unused form elements before submission
    - add image upload functionality w/cropping <== use croppie
    - pass selected text as a formatted image and display final product to user for proofing purposes
    - stock quotes provided step 4
    - need to identify persons that have funded on Kickstarter to give discount when they custom box
    - live hooks into Shopify for Kickstarter
***/

    // let oldURL = document.referrer;
    // console.log(oldURL);

window.addEventListener('load', function () {
    // import modules
    const step1 = require('./step1');
    const step2 = require('./step2');
    const step3 = require('./step3');
    const step4 = require('./step4');
    const step5 = require('./step5');

    const toggle = require('./toggle');
    const displayIcon = require('./displayIcon');


    // set defaults for specified select elements
    step1.displaySelectedBox('ammo');
    displayIcon('us_flag', step2.topIconDisplay);
    displayIcon('us_flag', step3.frontIconDisplay);

    // assign dom nodes for controller
    const section1 = document.getElementById('step-1');
    const section2 = document.getElementById('step-2');
    const section3 = document.getElementById('step-3');
    const section4 = document.getElementById('step-4');
    const section5 = document.getElementById('step-5');

    const sections = [ section1, section2, section3, section4, section5 ];

    const indicator1 = document.getElementById('progress-indicator__step-1');
    const indicator2 = document.getElementById('progress-indicator__step-2');
    const indicator3 = document.getElementById('progress-indicator__step-3');
    const indicator4 = document.getElementById('progress-indicator__step-4');
    const indicator5 = document.getElementById('progress-indicator__step-5');

    const indicators = [ indicator1, indicator2, indicator3, indicator4, indicator5 ];

    const nextBtn = document.getElementById('next');
    const previousBtn = document.getElementById('previous');
    const addToCartBtn = document.getElementById('add-cart');

    // controller keeps track of user progress and user interface presentation through the customization proccess
    const controller = function () {
        let step = 1;

        return {

            nextStep() { step = step === 5 ? step = 5 : step += 1; },

            previousStep() { step = step === 1 ? step = 1 : step -= 1; },

            getStep() { return step; },

            progressUI() {
                let state = this.getStep();
                
                if (state === 1) {
                    toggle.options(sections, section1);
                    this.indicator(indicators, indicator1);
                    toggle.optionOff(previousBtn);
                }
                else if (state === 2) {
                    toggle.options(sections, section2);
                    this.indicator(indicators, indicator2);
                    toggle.optionOn(previousBtn);
                }
                else if (state === 3) {
                    toggle.options(sections, section3);
                    this.indicator(indicators, indicator3);                    
                }
                else if (state === 4) {
                    toggle.options(sections, section4);
                    this.indicator(indicators, indicator4);
                    toggle.optionOff(addToCartBtn);
                    toggle.optionOn(nextBtn);
                }
                else if (state === 5) {
                    toggle.options(sections, section5);
                    this.indicator(indicators, indicator5);
                    toggle.optionOff(nextBtn);
                    toggle.optionOn(addToCartBtn);
                }
            },

            indicator(indicatorArray, indicator) {
                indicatorArray.map((e) => {
                    if (e.className.indexOf(' progress-indicator__step--highlight') > -1) {
                        e.className = e.className.replace(' progress-indicator__step--highlight', '');
                    }
                });

                indicator.className += ' progress-indicator__step--highlight';
            }
        };
    }();



    // event listener for step 1 select dropdown
    section1.addEventListener('change', function (e) {
        step1.getSelectedBox();
        e.stopPropagation();
    }, false);


    // event listener for step 2 select dropdown elements
    section2.addEventListener('change', function (e) {
        let icon = step2.topIconSelection.options[step2.topIconSelection.selectedIndex].value;

        if (e.target === step2.topSelection) {
            step2.getTopSelection();
        }
        else if (e.target === step2.topIconSelection) {
            displayIcon(icon, step2.topIconDisplay);
        }

        e.stopPropagation();
    }, false);


    // event listener for step 3 select dropdown elements
    section3.addEventListener('change', function (e) {
        let icon = step3.frontIconSelection.options[step3.frontIconSelection.selectedIndex].value;

        if (e.target === step3.frontSelection) {
            step3.getFrontSelection();
        }
        else if (e.target === step3.frontIconSelection) {
            displayIcon(icon, step3.frontIconDisplay);
        }

        e.stopPropagation();
    }, false);


    // event listener for step 4 select dropdown elements
    section4.addEventListener('change', function (e) {
        let icon = step4.lidIconSelection.options[step4.lidIconSelection.selectedIndex].value;

        if (e.target === step4.lidSelection) {
            step4.getLidSelection();
        }
        else if (e.target === step4.lidIconSelection) {
            displayIcon(icon, step4.lidIconDisplay);
        }

        e.stopPropagation();
    }, false);


    // event listener for step 5 select dropdown elements
    section5.addEventListener('change', function (e) {
        // code for step 5 select elements
    }, false);




    const progressBtns = document.getElementById('progress-buttons');

    // event listener for progress buttons (next, previous, add to cart)
    progressBtns.addEventListener('click', function (e) {
        if (e.target === nextBtn) {
            controller.nextStep();
            controller.progressUI();
            console.log('You\'re on step: ' + controller.getStep());
        }
        else if (e.target === previousBtn) {
            controller.previousStep();
            controller.progressUI();
            console.log('You\'re on step: ' + controller.getStep());
        }
        else if (e.target === addToCartBtn) {
            // code for add to cart button
        }

        e.stopPropagation();
    }, false);


    // TODO: validate typeface user selection
    const radios = document.getElementsByName('typeface');

    // let value = radios.map((e) => e.checked || e); itertate with a for loop


/*
    // testing image loading functionality
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

});