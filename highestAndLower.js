function highAndLow(numbers){
var arr = numbers.split(" ");
arr.sort(function(a,b) {return a-b});
console.log(arr);
console.log(arr[0], arr[arr.length-1]);
 return arr[0] +" "+ arr[arr.length-1];

}

highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6");
