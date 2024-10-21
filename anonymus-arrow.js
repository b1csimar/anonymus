const numbers = [2, 13, 3, 7, 17, 5, 11, 19, 9];
const names = ['Eva', 'Adel', 'Cedric', 'Dior', 'Frank', 'Bob'];
const fruits = ['pineapple', 'kiwi', 'banana', 'pear', 'cherry'];

// 1. String tömböt a szavak hossza szerint rendezi
const sortByLength = (arr) => arr.sort((a, b) => a.length - b.length);

// 2. String tömböt a szavak hossza szerint rendezi ABC sorrendbe
const sortByLengthAsc = (arr) => arr.sort((a, b) => a.length - b.length || a.localeCompare(b));

// 3. Számokat rendez a 15-től való távolság alapján
const sortFrom15 = (arr) => arr.sort((a, b) => Math.abs(a - 15) - Math.abs(b - 15));

// 4. String tömb mindegy elemének az elejére és végére egy csillagot tesz
const addAsterisk = (arr) => arr.map(item => `*${item}*`);

// 5. Számokat tartalmazó tömb 5 és 15 közötti elemeit adja vissza
const between5And15 = (arr) => arr.filter(num => num > 5 && num < 15);

// 6. Minden elem páratlan-e
const isAllOdd = (arr) => arr.every(num => num % 2 !== 0);

// 7. Tartalmaz-e páros elemet
const hasEven = (arr) => arr.some(num => num % 2 === 0);

// 8. Számok összeszorozása
const sigma = (arr) => arr.reduce((product, num) => product * num, 1);

console.log(sortByLength(names));
console.log(sortByLengthAsc(names));
console.log(sortFrom15(numbers));
console.log(addAsterisk(fruits));
console.log(between5And15(numbers));
console.log(isAllOdd(numbers));
console.log(hasEven(numbers));
console.log(sigma(numbers));





let number = 3;
const increase = (num) => num + 1;

number = increase(number);

console.log(number);