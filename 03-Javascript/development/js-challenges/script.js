//1. Write a function that takes a number and returns true if it is a positive number and false if it is a negative number.

function isNumberPositive (value)
{
    if (value >= 0)
    {
        console.log ("This number is positive")
    }
    else
    {
        console.log ("This number is negative")
    }
}

isNumberPositive (2);
isNumberPositive (-1);
isNumberPositive (0);

//2. Write a function that takes a number of days and converts it into an age

function handleDayCoversion (days)
{
    let years = Math.floor (days / 365)
    let remainder = days % 365                                  //% opperand returns remainder
    let leapDays = remainder + Math.floor (years / 4)
    console.log (`${days} days is equal to ${years} years and ${remainder} days old. ${leapDays} days if you count leap years.`)
}

handleDayCoversion (3650)
handleDayCoversion (6570)
handleDayCoversion (3700)
handleDayCoversion (6569)

//3. Write a function that takes three numbers and returns the largest of the three numbers.

function handleNumberComparison (value1, value2, value3)
{
    if (value1 > value2 && value1 > value3)
    {
        console.log (value1 + " is the largest value")
    }
    else if (value2 > value1 && value2 > value3)
    {
        console.log (value2 + " is the largest value")
    }
    else if (value1 == value2 || value1 == value3 || value2 == value3)
    {
        console.log ("Error. Two values are the same. Please ensure all values are different.")
    }
    else
    {
        console.log (value3 + " is the largest value")
    }
}

handleNumberComparison (1, 2, 3)
handleNumberComparison (106, 23, 91)
handleNumberComparison (43, 75, 1)
handleNumberComparison (3, 2, 3)

//ToFix - Allow for multiple of the same number, and output the biggest

//4. Write a function that takes an array of names and returns the last name from the array of names.

function getLastName ([name1, name2, name3])
{
    console.log (name3)
}

getLastName (["Jack", "Charles", "Darren"])
getLastName (["Tyson", "Mirabel", "Jake"])
getLastName (["Julie", "Aaron", "Jo"])

//5. Write a function that takes an array of numbers and returns true if all of the numbers are positive. It should return false if there are one or more negative numbers in the array.

function isAllPositive ([number1, number2, number3, number4, number5])
{
    let numberArray = [number1, number2, number3, number4, number5]
    let positive = 1
    
    for (let i = 0; i < numberArray.length; i++)
    {
        if (numberArray[i] < 0)
        {
            positive = 0
        }
    }

    if (positive == 0)
    {
        console.log ("This array contains 1 or more negative numbers")
    }
    else
    {
        console.log ("This array contains all positive numbers")
    }
}

isAllPositive ([2, 4, 6, 8, 10])
isAllPositive ([2, 4, 6, 8, -10])
isAllPositive ([2, -4, 6, -8, -10])

