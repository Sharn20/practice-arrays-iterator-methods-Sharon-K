/* Task 1 */
let cities = ["Paris", "Tokyo", "Delhi", "Miami", "Hanoi"];
let upperCities = [];
 cities.forEach(city => {upperCities.push(city.toUpperCase());});
console.log(upperCities); // Expected output: ["PARIS", "TOKYO", "DELHI", "MIAMI", "HANOI"]

/* Task 2 */
let numbers = [1, 2, 3, 4, 5];
let squared = numbers.map(num => num * 2);
console.log(squared); // Expected output: [2, 4, 6, 8, 10]

/* Task 3 */
let scores = [85, 42, 90, 75, 30, 100];
let highScores = scores.filter(score => score >= 80);
console.log(highScores); // Expected output: [85, 90, 100]

/* Task 4 */
let favoriteFood = ["Rice", "Lasagna", "Pasta", "Chapati", "Ugali"];
let firstFood = favoriteFood.find(food => food.length > 3);
let firstIndexFood = favoriteFood.findIndex(food => food.length > 3);
console.log(firstFood); // Expected output: "Rice"
console.log(firstIndexFood); // Expected output: 0

/* Task 5 */
let temperatures = [45, 52, 75, 89, 98];
let highestTemperatures = temperatures.some(temp => temp > 90);
let highTemperatures = temperatures.every(temp => temp > 50);
let allTemperatures = [highestTemperatures, highTemperatures];
console.log(allTemperatures); // Expected output: [true, false]


/* Task 6 */
let prices = [15, 20, 25, 30];
let totalPrices = 90;
let budgetPrices = prices.reduce((budget,price) => budget - price, totalPrices );
console.log(budgetPrices); // Expected output: 0
