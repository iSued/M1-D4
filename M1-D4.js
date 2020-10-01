/*
ASSIGNMENT RULES
- All the answers must be in JavaScript
- The solution must be pushed to the repository and be available for the tutors by the end of the day
- You can ask for tutor's help
- You can google / use StackOverflow BUT we suggest you to use just the material provided
*/

/* EXERCISE 1
Write a function "area" which receives 2 parameters (l1,l2) and calculate the area of the rectangle.
*/

function area(l1, l2){
  return l1*l2
};
let a = area(12, 10);
console.log(a);


/* EXERCISE 2
Write a function "crazySum" which receives two given integers. If the two values are same, then returns triple their sum.
*/

function crazysum(x, y){
  x != x.toFixed(0) || y != y.toFixed(0)? b='the numbers are not 2 integers':(x != y? b = 'x and y are not equal' : b = 3*x*y ) 
};
crazysum(1, 1);
console.log(b);

/* EXERCISE 3
Write a function "crazyDiff" that computes the 
absolute difference between a given number and 19. 
Returns triple their absolute difference if 
the specified
number is greater than 19.
*/
function crazyDiff(n){
n<19?  c = 'the number is < 19, input a number > 19': c = Math.abs(n-19)
};
crazyDiff(98);
console.log(c);

/* EXERCISE 4
Write a function "boundary" which accept an integer N and returns true if N is within 20 and 100 (included) or equal to 400.
*/

/* WRITE YOUR CODE HERE */
function boundary(N){
  N != N.toFixed(0)? v ='the number is not an integer':(N>=20 & N<=100 || N === 400? v= true: v= false)
};
boundary(69)
;
console.log(v)
/* EXERCISE 5
Write a function "strivify" which accepts a string S. Add to S "Strive" in front of a given string, if the given string begins with "Strive" then return the original string.
*/

/* WRITE YOUR CODE HERE */



/* EXERCISE 6
Write a function "check3and7" which accepts a positive number and check if it is a multiple of 3 or a multiple of 7.
HINT: Module Operator
*/

/* WRITE YOUR CODE HERE */
function check3and7(x) 
{
  if (x % 3 == 0 || x % 7 == 0) 
  {
    return true;
  } 
  else {
    return false;
  }
}
console.log(check3and7(21)) 
/* EXERCISE 7
Write a function "reverseString" to reverse programmatically a given string (es.: Strive => evirtS).
*/

/* WRITE YOUR CODE HERE */
function reverseString(str) {
   const h  = str.split("");
   const reversestr= h.reverse(); 
   const arrcontr = reversestr.join(""); 
return arrcontr; 
};

console.log(reverseString("hello"));
/* EXERCISE 8
Write a function "upperFirst" to capitalize the first letter of each word of a given string passed as parameter
*/

/* WRITE YOUR CODE HERE */
function upperFirst(str) {
  let splitStr = str.toLowerCase().split(' ');
  for (let i = 0; i < splitStr.length; i++) 
    
      splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     

  return splitStr.join(' '); 
}

/* EXERCISE 9
Write a function "cutString" to create a new string without the first and last character of a given string.
*/

/* WRITE YOUR CODE HERE */
function cutString(str) {
  return str.substring(1, str.length - 1);
}
console.log(cutString('JavaScript'));
console.log(cutString('JS'));
console.log(cutString('PHP'));
/* EXERCISE 10
Write a function "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10
*/

/* WRITE YOUR CODE HERE */
function giveMeRandom(n) {

  let arrWithNums = [];
  
  for(i = 0; i < n; i++) {
      arrWithNums.push(Math.floor(Math.random() * 10)); 
  }
  
  return arrWithNums;
}

console.log(giveMeRandom(4));
/* WHEN YOU ARE FINISHED
Commit and push the code to your personal GitHub repository and share the link to your commit with your tutor.*/
