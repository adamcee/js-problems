/***
 * Create a function that takes a country's name and its area as arguments and returns the area of the country's proportion of the total world's landmass.

Examples
areaOfCountry("Russia", 17098242) ➞ "Russia is 11.48% of the total world's landmass"

areaOfCountry("USA", 9372610), "USA is 6.29% of the total world's landmass"

areaOfCountry("Iran", 1648195) ➞ "Iran is 1.11% of the total world's landmass"
Notes
The total world's landmass is 148,940,000 [Km^2]
Round the result to two decimal places.
 **/

/**
 * We have to:
 * - Calculate area of country
 */
const EARTH_LANDMASS_SQUARE_KILOMETERS = 148940000;

function areaOfCountry(areaInSquareKilometers) {
    return ((100*areaInSquareKilometers) / EARTH_LANDMASS_SQUARE_KILOMETERS).toFixed(2);
}

function getAreaOfCountryMessage(countryName, countryArea) {
    const area = areaOfCountry(countryArea);
    return `${countryName} is ${area}% of the total world's landmass.`;
}

const RUSSIA_LANDMASS_SQUARE_KM = 17098242;
console.log(areaOfCountry(RUSSIA_LANDMASS_SQUARE_KM));

console.log(getAreaOfCountryMessage("Russia", RUSSIA_LANDMASS_SQUARE_KM));
