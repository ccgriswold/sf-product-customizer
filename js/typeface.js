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
    if (step === 'step2') {
        typefaceStep2 = true;
    }
    else if (step === 'step3') {
        typefaceStep3 = true;
    }
    else if (step === 'step4') {
        typefaceStep4 = true;
    }
    else if (step === 'step5') {
        typefaceStep5 = true;
    }
}

function unsetStep(step) {
    if (step === 'step2') {
        typefaceStep2 = false;
    }
    else if (step === 'step3') {
        typefaceStep3 = false;
    }
    else if (step === 'step4') {
        typefaceStep4 = false;
    }
    else if (step === 'step5') {
        typefaceStep5 = false;
    }
}

function isStepSet(step) {
    if (step === 'step2') {
        return typefaceStep2;
    }
    else if (step === 'step3') {
        return typefaceStep3;
    }
    else if (step === 'step4') {
        return typefaceStep4;
    }
    else if (step === 'step5') {
        return typefaceStep5;
    }
}


module.exports = {
    set,
    unset,
    isSet,
    setStep,
    unsetStep,
    isStepSet
};
