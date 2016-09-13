/* jshint esnext: true, browser: true */

/***
 *  options function takes 2 parameters
 *  1: an array of nodes to hide
 *  2: (second parameter is optional) a node to show
***/
function options(optionsArray, option) {
    optionsArray.map((e) => {
        if (e.className.indexOf('hidden') === -1) {
            e.className += 'hidden';
        }
    });

    if (typeof option !== 'undefined') {
        option.className = option.className.replace('hidden', '');
    }
}


function optionOn(option) {
    if (option.className.indexOf('hidden') > -1) {
        option.className = option.className.replace('hidden', '');
    }
}


function optionOff(option) {
    if (option.className.indexOf('hidden') === -1) {
        option.className += 'hidden';
    }
}



module.exports = {
    options,
    optionOn,
    optionOff,
};