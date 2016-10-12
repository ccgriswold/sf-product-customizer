const boxes = {
    ammo: {
        name: 'Ammo Box',
        image: "https://www.dropbox.com/s/tj601wqf4sq2n5d/Dad%20Son%20Fishing%20exterior.jpg?raw=1",
        price: 109.99,
        desc: 'Beautiful wooden box with rails rails on the front, top, and back.',
    },
    artillery: {
        name: 'Artillery Box',
        image: "https://www.dropbox.com/s/e0fg3wi7s99u3b9/Wedding%20Exterior.jpg?raw=1",
        price: 119.99,
        desc: 'Beautiful wooden box with hand crafted leather straps extending from the backside to the front side. '
    },
    traditional: {
        name: 'BuckShot Box',
        image: "https://www.dropbox.com/s/iunuckgktfcq9mw/Ryan%20Exterior.jpg?raw=1",
        price: 115.99,
        desc: 'Classic traditional style wooden box with a smooth natural finish. '
    },
    letter: {
        name: 'Letter Box',
        image: "https://www.dropbox.com/s/g28303byzvomgd7/Daddy%20Letter%20box%20exterior.jpg?raw=1",
        price: 95.99,
        desc: 'Low profile wooden box. Perfect for housing letters and other precious paper.'
    },
};

function reset(box) {
    box.custom = {
        content: null, // either 'text' or 'image'
        font: null,
        text: null,

        image: null,
    };

    box.customize = (field, value) => {
        console.log(`updating custom property '${field}'; now set to '${value}'`);
        box.custom[field] = value;
    }

    return box;
}
/**
 * Returns the specified box, or 'ammo' if the specified box doesn't exist.
 */
module.exports = function (name) {
    if (boxes.hasOwnProperty(name)) {
        return reset(boxes[name]);
    } else {
        return reset(boxes.ammo);
    }
};