//map() - A higher-order function that applies a given function to each element of an array 
//and returns a new array with the results.
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((number) => number * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

//filter() - A higher-order function that filters elements of an array based on a given condition
// and returns a new array with the filtered elements.
const evenNumbers = numbers.filter((number) => number % 2 === 0);
console.log(evenNumbers); // [2, 4]

//reduce() - A higher-order function that applies a function to an accumulator and each element in an array,
//resulting in a single value.
const sum = numbers.reduce((accumulator, number) => accumulator + number, 0);
console.log(sum); // 15
//forEach() - A higher-order function that iterates over the elements of an array 
//and applies a function to each element.
numbers.forEach((number) => console.log(number));

//sort() - A higher-order function that sorts the elements of an array based on a comparison function.
const sortedNumbers = numbers.sort((a, b) => b - a);

console.log(sortedNumbers); // Sorted in descending order

//Creating a Shallow Copy of an Array:
const originalArray = [1, 2, 3, 4, 5];
const copiedArray = [...originalArray];

console.log(originalArray); // [1, 2, 3, 4, 5]
console.log(copiedArray);   // [1, 2, 3, 4, 5]
console.log(originalArray === copiedArray); // false (not the same reference)

//Merging Multiple Arrays:
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const mergedArray = [...array1, ...array2];

console.log(mergedArray); // [1, 2, 3, 4, 5, 6]

//Adding Elements to an Array:
const array = [1, 2, 3];
const newArray = [...array, 4, 5];

console.log(newArray); // [1, 2, 3, 4, 5]

