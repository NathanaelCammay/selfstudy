//lecture: values and variables

let country = "South Africa";
let continent = "Africa";
let population = 70000000;

console.log(country);
console.log(continent);
console.log(population);

// lecture: data types

let isIsland = false;
let language;

console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

//lecture: let, var, const

// lecture: basic operators

const halfPopulation = population / 2;
population++;
console.log(population);

const finlandPopulation = 6000000;
console.log(finlandPopulation < population);

const averagePopulation = 33000000;
console.log(averagePopulation < population);

language = "English";

console.log(
  country +
    " is in " +
    continent +
    ", " +
    " and it's " +
    population +
    " people speak " +
    language
);
