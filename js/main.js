/* jshint esnext: true, browser: true */

// reference in shopify {{ 'filename.js' | asset_url | script_tag }}

;(function () {

/**
 *  when customization process starts step 1 is shown all others are hidden
 *  when next is clicked step 2 will be shown and all others are hidden
 *  clicking next will increment a counter and previous will decrement
 *  counter must not be less than 1 or greater than 5
 *  must display step based on coutner
 */

    const form = document.getElementById('customization-form');
    const nextBtn = document.getElementById('next');
    const previousBtn = document.getElementById('previous');


    const controller = function customizationProcess() {

        let step = 1;
        let typefaceSet = false;

        return {
            next() { step = step === 5 ? step = 5 : step += 1; },
            previous() { step = step === 1 ? step = 1 : step -= 1; },
            getStep() { return step; },
            
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
            }
        };
    }();


    // STEP 1: Select the type of box to be customized
    const step1 =  {

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




// if custom text is selected need to show custom textarea and hide all others
// if stock text is selected need to show stock text p, populate it, and hide other options
// if any text option is selected for the first time we need to show option to select typeface

    
    // STEP 2: Customize the top of the message box
    const step2 =  function customizeTop() {

        // private variables for step2 validation

        return {

            topSelection: document.getElementById('step-2__select'),
            topTypeface: document.getElementById('step-2__typeface'),

            options: function() {

                const topCustomText = document.getElementById('step-2__custom-text');
                const topStockText = document.getElementById('step-2__stock-text');
                const topUploadIcon = document.getElementById('step-2__upload-icon');

                const topOptions = [topCustomText, topStockText, topUploadIcon];

                return {
                    _() { controller.toggleOptions(topOptions); },
                    none() { controller.toggleOptions(topOptions); },
                    text() { controller.toggleOptions(topOptions, topCustomText); },
                    icon() { controller.toggleOptions(topOptions, topUploadIcon); },
                    stock() { controller.toggleOptions(topOptions, topStockText); },
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
                
                // if unrecognized option, reset select
                if (typeof this.options[topOption] === 'undefined' || topOption === 'stock') {
                    this.options._();
                    this.topSelection.value = '_';
                }
                else if (topOption === 'text') {
                    this.options.text();
                    this.topTypeface.className = this.topTypeface.className.replace('hidden', '');
                    controller.setTypeface();
                    console.log('user has selected the custom text option');
                }
                else if (topOption.match(/quote_[0-9]+|verse_[0-9]+/)) {
                    this.options.stock();
                    this.options[topOption]();
                }
                else {
                    this.options[topOption]();
                }

                console.log('Has the typeface option been used? ' + controller.isTypefaceSet());
            }
        };
    }();


    // STEP 3: Customize the front of the message box
    const step3 = {

        frontSelection: document.getElementById('step-3__select'),
        frontTypeface: document.getElementById('step-3__typeface'),
        frontCustomText: document.getElementById('step-3__custom-text'),

        options: {
            none: 'no customization for step 3',
            text: function () {
                // show custom text textarea
            },
        },

    };




    // select field listener for customization form
    form.addEventListener('change', function (e) {

        if (e.target === step1.boxSelection) {
            step1.getSelectedBox();
        } else if (e.target === step2.topSelection) {
            step2.getTopSelection();
        }

        // e.stopPropagation();
        
    }, false);

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
