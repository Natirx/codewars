/*A Narcissistic Number is a number that equals the sum of each of its digits raised to the number of digits. For example, 153 is a Narcissistic Number because 1^3 + 5^3 + 3^3 = 153.

You will be given an integer num and are to return true if the integer is a Narcissistic Number and false if it is not.*/
function narcissistic( value ) {
    var number = value.toString();
    var result = 0;
    var length = number.length;
  for (var i =0 ; i<length; i++){
      result += Math.pow(number[i], length); 
      console.log(number[i]);
      console.log(result +"result");
  }
  if(Number(result) == value) {
  return true;
  }
  else return value + " is not narcissistic"
}
console.log(narcissistic(92727));
