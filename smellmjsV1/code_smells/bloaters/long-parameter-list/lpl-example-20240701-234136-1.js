function arrayManipulator(array, index, newValue, action, validationValue, validationAction, isNumber, isArray, callbackFunction) {
    if (validationAction(validationValue) && isNumber(index) && isArray(array)) {
        if (action === "add") {
            array.splice(index, 0, newValue);
        } else if (action === "remove") {
            array.splice(index, 1);
        }
        callbackFunction(array);
    }
}
