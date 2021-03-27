function highPass(arr, cutoff) {
    var filteredArr = [];
    for (var i=0; i<arr.length; i++) {
        if(arr[i] > cutoff) {
            filteredArr.push(arr[i]);
        }
    }
    return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result); // we expect back [6, 8, 10, 9]

function evensOfOdds(arr) {
    var totalOdds = 0;
    var totalEvens = 0;

    for (var i = 0; i<arr.length; i++) {
        if (arr[i] % 2 == 0) {
            totalEvens = totalEvens + arr[i];
        }
        else if (arr[i] % 2 !== 0) {
            totalOdds = totalOdds + arr[i];
        }
    }

    if (totalEvens > totalOdds) {
        console.log("evens are larger");
    }

    else if (totalEvens < totalOdds) {
        console.log("odds are larger");
    }

    else { console.log("tied");}
    return "hello";
    // your code here
}
   
var result = evensOfOdds([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // we expect back "evens are larger"

function betterThanAverage(arr) {
    var sum = 0;
    var count = 0;
    for (var i = 0; i<arr.length; i++) {
        sum = sum + arr[i];
    }
    var avg = sum / arr.length;

    for (var i = 0; i<arr.length; i++) {
        if (arr[i] > avg) {
            count = count + 1;
        }
    }
    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // we expect back 4

function fibonacciArray(n) {
    // the [0, 1] are the starting values of the array to calculate the rest from
    var fibArr = [0, 1];

    for (var i = 2; i < n; i++) {
        console.log(fibArr[i] = fibArr[fibArr.length - 2] + fibArr[fibArr.length - 1]);
    }
    // your code here
    return fibArr;
}

var result = fibonacciArray(10);
console.log(result); // we expect back [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]