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
            image: "{{ 'ammo.jpg' |  https://www.dropbox.com/s/tj601wqf4sq2n5d/Dad%20Son%20Fishing%20exterior.jpg?raw=1 }}",
            price: 109.99,
            desc: 'Beautiful wooden box with rails rails on the front, top, and back.'
        },
        artillery: {
            name: 'Artillery Box',
            image: "{{ 'artillery.jpg' | https://www.dropbox.com/s/n2miqlaj1ftyp5v/Southern%20Favor%20Exterior.jpg?raw=1 }}",
            price: 119.99,
            desc: 'Beautiful wooden box with hand crafted leather straps extending from the backside to the front side. '
        },
        traditional: {
            name: 'BuckShot Box',
            image: "{{ 'traditional.jpg' | https://www.dropbox.com/s/iunuckgktfcq9mw/Ryan%20Exterior.jpg?raw=1 }}",
            price: 115.99,
            desc: 'Classic traditional style wooden box with a smooth natural finish. '
        },
        letter: {
            name: 'Letter Box',
            image: "{{ 'letter.jpg' | https://www.dropbox.com/s/g28303byzvomgd7/Daddy%20Letter%20box%20exterior.jpg?raw=1 }}",
            price: 95.99,
            desc: 'Low profile wooden box. Perfect for housing letters and other precious paper'
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
