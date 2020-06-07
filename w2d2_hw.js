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

/*
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
*/

////////////////////////////////
// Wild Wild Life
////////////////////////////////


const plantee = ["Plantee", "plant",  5000 , "Mordor"] //<---- Array declared
    plantee[2] = 5000 + 1   //<---- one year added to the current year (arrays start with 0)
    console.log(plantee)    //<---- Show the entire array now
 // console.log(plantee[2]) //<---- just show what I changed in the array
 
const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
    wolfy[3] = "Gotham City"
    console.log(wolfy)    //<---- Show the entire array now
 // console.log(wolfy[3]) //<---- just show what changed in the array

const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"] //<---- Array declared
    dart.push ("Hawkins") //<---- allows a value to be "pushed" into the current array at the end
    console.log (dart) //<---- Show the new array

//  const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"] //<---- Array declared (delclared earlier)
    wolfy.splice (0,1,"Gameboy")// <---- (position to remove, quantity to remove, value to insert)
    console.log (wolfy) //<---- show the new array

////////////////////////////////
// Yell at the Ninja Turtles
////////////////////////////////


////////////////////////////////
// Methods, Revisited
////////////////////////////////


////////////////////////////////
// Where is Waldo
////////////////////////////////


////////////////////////////////
//  Excited Kitten
////////////////////////////////


////////////////////////////////
//  Find the Median
////////////////////////////////

