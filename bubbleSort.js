// generate an array with 30 random elements, with random values from 0 to 99
var numbers = [];
while(numbers.length < 30){
    numbers.push(Math.floor(Math.random() * 100));
}
console.log("Unsorted array: \n", JSON.stringify(numbers), "\n");

// bubble sort
for(let i = numbers.length; i > 1; i--){
    var leftElement = 0, rightElement = 1;
    while(rightElement != i){
        if(numbers[leftElement] > numbers[rightElement]){
            [numbers[leftElement], numbers[rightElement]] = [numbers[rightElement], numbers[leftElement]];
        }
        leftElement++;
        rightElement++;
    }
}
console.log("Sorted array with Bubble Sort: \n", JSON.stringify(numbers));