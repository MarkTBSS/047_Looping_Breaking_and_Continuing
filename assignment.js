'use strict';

// Define the percentageOfWorld1 function
function percentageOfWorld1(population) {
  const worldPopulation = 7900; // Example world population in millions
  return (population / worldPopulation) * 100;
}

const populations = [10, 1441, 332, 83];
const percentages2 = [];

for (let i = 0; i < populations.length; i++) {
  const perc = percentageOfWorld1(populations[i]);
  percentages2.push(perc.toFixed(2) + '%');
}

console.log(percentages2);