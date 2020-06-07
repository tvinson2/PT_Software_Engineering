////////////////////////////////
// Easy Going
////////////////////////////////

/*
for (let i = 0; i <21; i++){ //<----as long as my number called i, is less than 2, go up 1 increment and,
    console.log (i) //<---- console log that number
}
*/

////////////////////////////////
// Get Even
////////////////////////////////

/*
for (let i = 0; i <201; i++){ //<----as long as my number called i, is less than 201, go up 1 increment and,
    if (i % 2 === 0){ //<---- as long as the number is a divisible by 2 with no remainder,
    console.log (i) //<---- console log that number
    }
}
*/

////////////////////////////////
// Fizz Buzz
////////////////////////////////

let str1 = "Fizz"   //<---- I declared string variables for easy access and modification later
let str2  = "Buzz"
let str3 = "FizzBuzz"

for(let i = 1; i < 101; i++){ // <----as long as my number called i, is less than 101, go up 1 increment and,
    //console.log(i) //<---- console log all the numbers
    if(i % 5 === 0 && i % 3 === 0) { //<---- if a number is divisible by 5 or 3, then
        console.log(str3)   //<---- console log that number as "FizzBuzz" or,
    }else if(i % 5 === 0) { //<---- if a number is divisible by just 5 , then,
        console.log(str2)   //<---- console.log that number as "Buzz" or,
    }else if(i % 3 === 0) { //<---- if a number is divisible by just 3, then
        console.log(str1)   //<---- console.log that number as "Fizz"  
    }else{
        console.log(i) //<---- just consol.log whatever numbes are left
    }     
} 
