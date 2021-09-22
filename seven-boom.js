// Seven boom!
function hasSeven(arr) {
    const arrayWithSeven = arr.filter(item => {
        const numAsString = item.toString();
        const hasSeven = numAsString.split('').filter(char => char === '7');

        return Boolean(hasSeven.length);
    });

    if(arrayWithSeven.length) {
        return "Boom!";
    }

    return "there is no 7 in the array";
}

// console.log(hasSeven([1, 1837, 7]));

