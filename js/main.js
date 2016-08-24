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


const controller = function customizationProcess() {

    return {
        next() { step = step === 5 ? step = 5 : step += 1; },
        previous() { step = step === 1 ? step = 1 : step -= 1; },
        getStep() { return step; },
        
        setTypeface() { typefaceSet = true; },
        isTypefaceSet() { return typefaceSet; }
    };
}(step = 1, typefaceSet = false);


// STEP 1: Select the type of box to be customized
const step1 = function selectBox() {

    const boxSelection = document.getElementById('step-1__select'),
          boxImg   = document.getElementById('step-1__image'),
          boxPrice = document.getElementById('box__price'),
          boxDesc  = document.getElementById('box__desc');


    const box = {
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
    };


    function boxDefault(boxType) {

        // TODO: should add default to select so that it references the same box type
        // boxSelection.options[boxSelection[boxType]].selected = 'selected';

        boxImg.src = box[boxType].image;
        boxImg.alt = box[boxType].name;
        boxPrice.textContent = box[boxType].price;
        boxDesc.textContent = box[boxType].desc;
    }


    // set default box type
    boxDefault('ammo');


    boxSelection.onchange = function () {

        let boxOption = boxSelection.options[boxSelection.selectedIndex].value;

        // if unrecognized box type, set default
        if (box[boxOption] === undefined) {
            boxDefault('ammo'); 
        } else {
            boxImg.src = box[boxOption].image;
            boxImg.alt = box[boxOption].name;
            boxPrice.textContent = box[boxOption].price;
            boxDesc.textContent = box[boxOption].desc;
        }
    };

    // boxDefault should be an accessible method
    return {
        boxDefault
    };
}();



// STEP 2: Customize the top of the message box
const step2 = function customizeTop() {

    const topSelection = document.getElementById('step-2__select');

    const options = {
        none: 'no customization for step 2',
        text: function () {
            // show textarea for custom text
        },
        icon: function () {
            // show icon upload button
        },
        quote_1: 'Quote 1 goes here',
        quote_2: 'Quote 2 goes here',
        quote_3: 'Quote 3 goes here',
        quote_4: 'Quote 4 goes here',
        verse_1: 'Verse 1 goes here',
        verse_2: 'Verse 2 goes here',
        verse_3: 'Verse 3 goes here',
        verse_4: 'Verse 4 goes here'
    };

    topSelection.onchange = function () {

        const topOption = topSelection.options[topSelection.selectedIndex].value;
        
        // code to execute when option is selected
    };

}();

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
