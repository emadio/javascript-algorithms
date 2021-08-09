// generate an array with 20 random elements, with random values from 0 to 9
var numbers = [];
while(numbers.length < 20){
    numbers.push(Math.floor(Math.random() * 10));
}
console.log("Unsorted array: \n", JSON.stringify(numbers), "\n");

// counting sort
var count = [];
for(let i = 0; i <10; i++){
    count.push(0);
}
for(let i = 0; i < numbers.length; i++){
    count[numbers[i]]++;
}
numbers = [];
for(let i = 0; i < count.length; i++){
    while(count[i] != 0){
        numbers.push(i);
        count[i]--;
    }
}
console.log("Sorted array: \n", JSON.stringify(numbers));