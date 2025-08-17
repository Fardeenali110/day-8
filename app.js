console.log("While And Do While Tasks We Can Perform Here..!");

// Prime Number Check
let inputPrime = parseInt(prompt("Enter The Number To Check Prime (0 to Exit): "));

while(inputPrime !== 0){
   let isPrime = true;

   if(inputPrime < 2){
      isPrime = false;
   } else {
      let divisor = 2;
      while(divisor <= inputPrime / 2){
         if (inputPrime % divisor === 0) {
            isPrime = false;
            break;
         }
         divisor++;
      }
   }

   if (isPrime) {
      console.log(inputPrime + " is a Prime Number ✅");
   } else {
      console.log(inputPrime + " is NOT a Prime Number ❌");
   }

   inputPrime = parseInt(prompt("Enter Another Number (0 to Exit): "));
}



// Digit Sum
let inputDigit = parseInt(prompt("Enter a number to calculate digit sum: "));
let digitSum = 0;

while(inputDigit > 0){
    let lastDigit = inputDigit % 10;
    digitSum += lastDigit;
    inputDigit = Math.floor(inputDigit / 10);
}

console.log("Digit Sum = " + digitSum);



// Palindrome Check
let inputPalindrome = parseInt(prompt("Enter a number to check Palindrome: "));
let originalPalindrome = inputPalindrome;
let reversePalindrome = 0;

while(inputPalindrome > 0){
    let lastDigit = inputPalindrome % 10;
    reversePalindrome = reversePalindrome * 10 + lastDigit;
    inputPalindrome = Math.floor(inputPalindrome / 10);
}

if(originalPalindrome === reversePalindrome){
    console.log(originalPalindrome + " is a Palindrome ✅");
}else{
    console.log(originalPalindrome + " is NOT a Palindrome ❌");
}



//  Largest Number
let inputLargest = parseInt(prompt("Enter numbers (-1 to stop): "));
let largestNum = -Infinity;

while(inputLargest !== -1){
    if(inputLargest > largestNum){
        largestNum = inputLargest;
    }
    inputLargest = parseInt(prompt("Enter another number (-1 to stop): "));
}

console.log("Largest Number is: " + largestNum);



// Armstrong Number
let inputArmstrong = parseInt(prompt("Enter a number to check Armstrong: "));
let originalArmstrong = inputArmstrong;
let armstrongSum = 0;

while(inputArmstrong > 0){
    let digit = inputArmstrong % 10;
    armstrongSum += digit ** 3;
    inputArmstrong = Math.floor(inputArmstrong / 10);
}

if(armstrongSum === originalArmstrong){
    console.log(originalArmstrong + " is an Armstrong Number ✅");
}else{
    console.log(originalArmstrong + " is NOT an Armstrong Number ❌");
}



// Fibonacci Series
let fibLimit = parseInt(prompt("Enter limit for Fibonacci series: "));
let first = 0, second = 1;

do {
    console.log(first);
    let next = first + second;
    first = second;
    second = next;
} while(first <= fibLimit);



// Pattern Printing
let totalRows = parseInt(prompt("Enter number of rows for pattern: "));
let row = 1;

do {
    let line = "";
    let col = 1;
    do {
        line += col;
        col++;
    } while(col <= row);
    
    console.log(line);
    row++;
} while(row <= totalRows);



//  Sum Until Prime
function checkPrime(n){
    if(n < 2) return false;
    for(let i=2; i<=n/2; i++){
        if(n % i === 0) return false;
    }
    return true;
}

let sumUntilPrime = 0;
let inputNum;

do {
    inputNum = parseInt(prompt("Enter number (Stops when Prime is entered): "));
    if(!checkPrime(inputNum)){
        sumUntilPrime += inputNum;
    }
} while(!checkPrime(inputNum));

console.log("Sum of all previous numbers = " + sumUntilPrime);



// Perfect Number
let inputPerfect = parseInt(prompt("Enter a number to check Perfect: "));
let perfectSum = 0;
let divisorPerfect = 1;

do {
    if(inputPerfect % divisorPerfect === 0){
        perfectSum += divisorPerfect;
    }
    divisorPerfect++;
} while(divisorPerfect < inputPerfect);

if(perfectSum === inputPerfect){
    console.log(inputPerfect + " is a Perfect Number ✅");
}else{
    console.log(inputPerfect + " is NOT a Perfect Number ❌");
}



// Reverse Number With Repeat
let choice;

do {
    let inputReverse = parseInt(prompt("Enter a number to reverse: "));
    let reversed = 0;

    do {
        let digit = inputReverse % 10;
        reversed = reversed * 10 + digit;
        inputReverse = Math.floor(inputReverse / 10);
    } while(inputReverse > 0);

    console.log("Reversed Number = " + reversed);

    choice = prompt("Run again? (Y/N): ");
} while(choice.toUpperCase() === "Y");

