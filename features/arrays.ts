const carMakers = ['ford', 'toyota', 'chevy'];
const dates = [new Date(), new Date()];

const carsByMaker: string[][] = [];

// Help with inference when extracting values
const myCar = carMakers[0];
const myCar2 = carMakers.pop();

// Prevent incompatible values
carMakers.push('porsche');

// Help with 'map'
carMakers.map((car: string): string => {
  return car.toUpperCase();
});
