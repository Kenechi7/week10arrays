// In JS: Create an array with 5 different strings.
// Log the length of your array to the console. 
// Now log the length of each of the strings in your array to the console. 
// Finally, reverse the array and console the array again.

var myArray = ['Ken', 'Jen', 'Ben' 'Len', 'Bojack']

console.log(myArray.length);
for(var i = 0; i < myArray.length; i++) {
	console.log(myArray[i].length)
}
		
console.log(myArray.reverse());

// In JS: Create an array of at least 5 numbers. 
// Sort the array numerically, in ascending order (smallest to biggest). 
// Then sort it in descending order.

var numArray = ['1', '11', '111', '1111', '44']

console.log(
	numArray.sort(

		function(a,b) {
			return a - b;
		}
	)
)
		
// In JS: Create an array with three strings. 
// Add two new strings to the end of the array. 
// Now remove one string from the beginning. 
// Log the final array to the console. 
// How many strings does it have?

var stringArray = ['This', 'is', 'fine'];

console.log(stringArray);
stringArray.push('fire');
stringArray.push('good');
console.log(stringArray);
stringArray.shift();
console.log(stringArray);

