//generate an array with 10 random elements, with random values from 0 to 49
var numbers = [];
while(numbers.length < 10){
    numbers.push(Math.floor(Math.random() * 50));
}
console.log("Unsorted array: \n ", JSON.stringify(numbers));
console.log("Steps:");

// quick sort
function quickSort(first, last){
    let p, l, r;
    p = last;
    l = first;
    r = last - 1;
    while(l != r){
        while(numbers[l] <= numbers[p] && l!= r){
            l++;
        }
        while(numbers[r] >= numbers[p] && l!= r){
            r--;
        }
        [numbers[l], numbers[r]] = [numbers[r], numbers[l]];
    }
    if(l != p - 1 || (l == p - 1 && numbers[l] > numbers[p])){
        [numbers[l], numbers[p]] = [numbers[p], numbers[l]];
        p = r;
    }
    console.log(" ",JSON.stringify(numbers), p);
    if(p - first >= 2){
        quickSort(first, p - 1);
    }
    if(last - p >= 2){
        quickSort(p + 1, last);
    }
}

quickSort(0, numbers.length - 1);
console.log("Sorted array: \n ", JSON.stringify(numbers));