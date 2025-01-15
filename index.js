/*******************************************
    Iteration 1.1 | Tongue Twister
*******************************************/
const s1 = "Fred ";
const s2 = "fed ";
const s3 = "Ted ";
const s4 = "bread ";
const s5 = "and ";

// Concatenate the string variables into one new string
const tongueTwister = s1 + s2 + s3 + s4 + s5 + s3 + s2 + s1 + s4;
console.log(tongueTwister);



/*******************************************
    Iteration 1.2 | Camel Tail
*******************************************/
const part1 = "java";
const part2 = "script";

// Convert the last letter of part1 and part2 to uppercase and concatenate the strings
const upperCase1 = part1.toUpperCase().charAt(3);
const upperCase2 = part2.toUpperCase().charAt(5);
const result = part1.slice(0, 3) + upperCase1 + part2.slice(0,5) + upperCase2

// Print the cameLtaiL-formatted string
console.log(result)



/*******************************************
    Iteration 2.1 | Calculate Tip
*******************************************/
const billTotal = 84;


// Calculate the tip (15% of the bill total)
const tipAmount = billTotal + billTotal * 15/100

// Print out the tipAmount

console.log(tipAmount);


/*******************************************
    Iteration 2.2 | Generate Random Number
*******************************************/

// Generate a random integer between 1 and 10 (inclusive)
const randomNumber = Math.floor(Math.random() * 10) + 1;

// Print the generated random number
console.log(randomNumber);

/*******************************************
    Iteration 3.1 | Booleans
*******************************************/

const a = true;
const b = false;

// Try and guess the output of the below expressions first and write your answers down:
const expression1 = a && b;
//false
const expression2 = a || b;
//true
const expression3 = !a && b;
//false
const expression4 = !(a && b);
//true
const expression5 = !a || !b;
//true
const expression6 = !(a || b);
//false
const expression7 = a && a;
//true
console.log(expression1) //false
console.log(expression2) //true
console.log(expression3) //false
console.log(expression4) //true
console.log(expression5) //true
console.log(expression6) //false
console.log(expression7) //true