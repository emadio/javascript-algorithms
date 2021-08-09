// generate an array with 30 random elements, with random values from 0 to 99
var numbers = [];
while(numbers.length < 30){
    numbers.push(Math.floor(Math.random() * 100));
}
console.log("Unsorted array: \n", JSON.stringify(numbers), "\n");

// selection sort
for(var i = 0; i < numbers.length; i++){
    var min = numbers[i], minElement, j = i, temp;
    while(j < numbers.length){
        if(numbers[j] < min){
            min = numbers[j];
            minElement = j;
        }
        j++;
    }
    temp = numbers[i];
    numbers[i] = min;
    numbers[minElement] = temp;
}
console.log("Sorted array with Selection Sort: \n", JSON.stringify(numbers));