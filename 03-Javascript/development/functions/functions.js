/*

//Calculate the perimiter of a rectangle

const calculatePerimiter = (width, height) => 
{
    return ((width * 2) + (height * 2));
}

console.log (calculatePerimiter(4, 5));

//Calculate the area of a circle

const calculateArea = (radius) => 
{
    let pi = 3.14;
    return (pi * (radius * radius));
}

console.log (calculateArea(6));

const calculateCircumference = (radius) => 
{
    return ((2 * Math.PI) * radius);
}

console.log (calculateCircumference(7));
*/

//Write a function named getDescription that:
//Takes 4 arguments: number of children, partner's name, geographic location, job title.
//Outputs your statement to the console like so: "I am currently a X living in Y, and married to Z with N kids."
//Call that function 3 times with 3 different values for the arguments

//Needs a function called getDescription which takes 4 specific arguments

function getDescription(amountOfChildren, partnersName, geographicLocation, jobTitle)
{
    return "I am currently a " + jobTitle + " living in " + geographicLocation + ", and married to " + partnersName + " with " + amountOfChildren + " kids.";;
}

//Output statement to console three times 

console.log (getDescription(6, "Danny", "Devon", "Carpenter"));
console.log (getDescription(3, "Matilda", "Wear", "Mechanic"));
console.log (getDescription(0, "Tiana", "Glasgow", "Nurse"));

//Write a function named calculateSupply that:
//Takes 2 arguments: age, amount per day.
//Calculates the amount consumed for rest of your life (based on a constant max age).
//Outputs the result to the console like so: "You will need X to last you until the ripe old age of Y"
//Call the function three times, passing in different values each time
//Bonus: Accept floating point values for amount for day, and round the result to a whole number.

//Need a function which accepts age and amount per day as parameters
//Constant max age required, so must be defined 

function calculateSupply (age, amountPerDay)
{
    const maxAge = 81;
    let requiredAmount = Math.round((amountPerDay * 365) * (maxAge - age));                                     //Round result to whole number

    let result = `You will need ${requiredAmount} to last you until the ripe old age of ${maxAge}`;

    //Output message to console
    console.log(result);
}

//Call function 3 times with different values

calculateSupply(8, 2.8);
calculateSupply(57, 7);
calculateSupply(40, 1);


//Make a temperature converter from celsius to farenheit

//Need a function to handle conversion; function needs celsius as input parameter

const handleTemperatureConversion = (celsius) => 
{
    const farenheit = celsius * 1.8 + 32;

    console.log (celsius + " degrees is equal to " + farenheit + " degrees farenheit");
}

handleTemperatureConversion (15);
handleTemperatureConversion (2);

//Make a puppy age calculator to convert human years to dog years

//Need a function to handle conversion; needs human years as parameter

const handlePuppyAgeConverstion = (humanYears) => 
{
    const dogYears = humanYears * 7;

    console.log (`Your dog is ${dogYears} years old in dog years`)
}

handlePuppyAgeConverstion (4);
handlePuppyAgeConverstion (16);