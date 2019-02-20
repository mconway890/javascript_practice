// .forEach method

const foods = ['mango', 'papaya', 'pineapple', 'apple', 'egg', 'omelette', 'icepop', 'upsidedown cake'];

// Iterate over foods below
foods.forEach(food => {
  if (food[0] === 'a' || food[0] === 'e' || food[0] === 'o' || food[0] === 'i' || food[0] === 'u') {
    console.log(`I want to eat an ${food}.`)
  } else {
    console.log(`I want to eat a ${food}.`)
  }
})


// .map() method

const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

// Create the secretMessage array below
const secretMessage = animals.map(animal => {
  return animal[0];
})

console.log(secretMessage.join(''));

const bigNumbers = [100, 200, 300, 400, 500];

// Create the smallNumbers array below
const smallNumbers = bigNumbers.map(number => {
  return number/100;
})

console.log(smallNumbers.join(','));

// .filter() method

const randomNumbers = [375, 200, 3.14, 7, 13, 852];

// Call .filter() on randomNumbers below
const smallNumbers = randomNumbers.filter(number => {
  if (number < 250) {
    return number;
  }
})

console.log(smallNumbers.join(','))

const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];


// Call .filter() on favoriteWords below

const longFavoriteWords = favoriteWords.filter(word => {
  if (word.length > 7) {
    return word;
  }
})

console.log(longFavoriteWords.join(', '));


// .findIndex() method

const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];

const foundAnimal = animals.findIndex(animal => {
  if (animal === 'elephant')
    return animal;
})

console.log(foundAnimal);

const startsWithS = animals.findIndex(animal => {
  if (animal[0] === 's')
    return animal;
})

console.log(startsWithS);

// .reduce() method

const newNumbers = [1, 3, 5, 7, 9];

const newSum = newNumbers.reduce((accumulator, currentValue) => {
  console.log('The value of accumulator: ', accumulator);
  console.log('The value of currentValue: ', currentValue);
  return accumulator + currentValue;
}, 10)

console.log(newSum);


// .some() .every() methods

const words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];

// Something is missing in the method call below

console.log(words.some((word) => {
  return word.length < 6;
}));

// Use filter to create a new array
const interestingWords = words.filter(word => {
  return word.length > 5;
})


// Make sure to uncomment the code below and fix the incorrect code before running it

console.log(interestingWords.every((word) => {
	return word.length > 5;
} ));

const cities = ['Orlando', 'Dubai', 'Edinburgh', 'Chennai', 'Accra', 'Denver', 'Eskisehir', 'Medellin', 'Yokohama'];

const nums = [1, 50, 75, 200, 350, 525, 1000];

//  Choose a method that will return undefined
cities.forEach(city => console.log('Have you visited ' + city + '?'));

// Choose a method that will return a new array
const longCities = cities.filter(city => city.length > 7);

// Choose a method that will return a single value
const word = cities.reduce((acc, currVal) => {
  return acc + currVal[0]
}, "C");

console.log(word)

// Choose a method that will return a new array
const smallerNums = nums.map(num => num - 5);

// Choose a method that will return a boolean value
nums.some(num => num < 0);
