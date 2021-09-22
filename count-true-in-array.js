/**
 * @param {Array<boolean>} booleanArray
 *                         Array only containing boolean elemeents (true, false)
 *
 * @return {Number} Returns the number of elements in the arraywhich equal `true`
 */
function countTrue(booleanArray) {
    const initialAccumulatorVal = 0;

    return booleanArray.reduce((acc, item) => {
        if (item === true) {
            acc += 1;
        }

        return acc;
    }, initialAccumulatorVal);
}

//console.log(countTrue([true, true, false,false,false]));
