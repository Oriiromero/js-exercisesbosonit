//Dado tres arrays de números, sacar en un nuevo array la intersección de estos. 
const arrNumber1 = [1,2,3];
const arrNumber2 = [1,2,3,4,5];
const arrNumber3 = [1,4,7,2];

const intersectionNums = arrNumber1.filter(val => arrNumber2.includes(val) && arrNumber3.includes(val));

console.log(intersectionNums);
