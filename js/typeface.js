/* jshint esnext: true, browser: true */

/***
 *  This module provides a set of methods that allow the application to
 *  check if a typeface option has been presented to the user. The interface
 *  sets, unsets and retrieves the value of typefaceSet at the 'controller level'
 *  and for the individual steps
 **/

let typefaceSet = false;

let typefaceStep2 = false;
let typefaceStep3 = false;
let typefaceStep4 = false;
let typefaceStep5 = false;


function set() { typefaceSet = true; }

function unset() { typefaceSet = false; }

function isSet() { return typefaceSet; }


function setStep(step) {
    const setSteps = {
        step2() { typefaceStep2 = true; },
        step3() { typefaceStep2 = true; },
        step4() { typefaceStep2 = true; },
        step5() { typefaceStep2 = true; },
    };

    setSteps[step]();
}

function unsetStep(step) {
    const setSteps = {
        step2() { typefaceStep2 = false; },
        step3() { typefaceStep2 = false; },
        step4() { typefaceStep2 = false; },
        step5() { typefaceStep2 = false; },
    };

    setSteps[step]();
}

function isStepSet(step) {
    const setSteps = {
        step2() { return typefaceStep2; },
        step3() { return typefaceStep2; },
        step4() { return typefaceStep2; },
        step5() { return typefaceStep2; },
    };

    return setSteps[step]();
}


module.exports = {
    set,
    unset,
    isSet,
    setStep,
    unsetStep,
    isStepSet
};
