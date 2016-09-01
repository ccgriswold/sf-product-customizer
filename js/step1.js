/* jshint esnext: true, browser: true */

// STEP 1: Select the type of box to be customized
module.exports = {

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