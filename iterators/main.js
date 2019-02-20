// forEach method

const foods = ['mango', 'papaya', 'pineapple', 'apple', 'egg', 'omelette', 'icepop', 'upsidedown cake'];

// Iterate over foods below
foods.forEach(food => {
  if (food[0] === 'a' || food[0] === 'e' || food[0] === 'o' || food[0] === 'i' || food[0] === 'u') {
    console.log(`I want to eat an ${food}.`)
  } else {
    console.log(`I want to eat a ${food}.`)
  }
})
