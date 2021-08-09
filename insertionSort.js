// generate an array with 30 random elements, with random values from 0 to 99
var numbers = [];
while(numbers.length <= 30){
    numbers.push(Math.floor(Math.random() * 100));
}
console.log("Unsorted array: \n", JSON.stringify(numbers), "\n");

// insertion sort
for(var i = 0; i < numbers.length; i++){
    var j = i;
    while(numbers[j] < numbers[j-1]){
        [numbers[j], numbers[j-1]] = [numbers[j-1], numbers[j]];
        j--;
    }
}
console.log("Sorted array with Insertion Sort: \n", JSON.stringify(numbers));