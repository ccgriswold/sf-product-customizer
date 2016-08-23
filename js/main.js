/* jslint esnext: true, browser: true */

// reference in shopify {{ 'filename.js' | asset_url | script_tag }}

(function () {


// when customization process starts step 1 is shown all others are hidden
// when next is clicked step 2 will be shown and all others are hidden
// clicking next will increment a counter and previous will decrement
// counter must not be less than 1 or greater than 5
// must display step based on coutner


const custProcCon = function () {

    return {
        next: function () { step = step === 5 ? step = 5 : step += 1; },
        previous: function () { step = step === 1 ? step = 1 : step -= 1; },
        getStep: () => step,
    };
}(step = 1);


/*
 *  STEP 1: Select the type of box to be customized
*/
const step1 = function () {

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



    // set default box type selection
    const boxDefault = function (boxType) {
        boxImg.src = box[boxType].image;
        boxImg.alt = box[boxType].name;
        boxPrice.textContent = box[boxType].price;
        boxDesc.textContent = box[boxType].desc;
    }('ammo');



    boxSelection.onchange = function () {

        let boxOption = boxSelection.options[boxSelection.selectedIndex].value;

        if (box[boxOption] === undefined) {
            boxDefault('ammo'); // set default if unrecognized box type
        } else {
            boxImg.src = box[boxOption].image;
            boxImg.alt = box[boxOption].name;
            boxPrice.textContent = box[boxOption].price;
            boxDesc.textContent = box[boxOption].desc;
        }
    };

    // boxDefault should be a public accessible method
    return {
        default: boxDefault(boxType)
    };
}();



const step2 = function () {

};

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
