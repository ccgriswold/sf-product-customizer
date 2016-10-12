/* jshint esnext: true, browser: true */

const dom = {
    image: document.querySelector('#step-1__image'),
    price: document.querySelector('#step-1__price'),
    desc: document.querySelector('#step-1__desc'),
};

// STEP 1: Select the type of box to be customized
module.exports = {
    render(box, options) {
        // Update image
        dom.image.src = box.image;
        dom.image.alt = box.name;
        // Update price
        dom.price.textContent = box.price;
        // Update description
        dom.desc.textContent = box.desc;
    },
};
