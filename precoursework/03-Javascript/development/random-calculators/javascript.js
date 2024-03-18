console.log ("Welcome welcome welcome")

function calcualteYearsUntilRetirement(event) 
{
    const currentAge = event.target.value;    
    
    let yearsUntilRetirement = (65 - currentAge)

    if (yearsUntilRetirement == 1) 
    {
        alert ("You have " + yearsUntilRetirement + " year until you retire")
    }
    else if (yearsUntilRetirement > 1)
    {
        alert ("You have " + yearsUntilRetirement + " years until you retire")
    }
    else
    {
        alert ("You can retire")
    }

}

function getPhraseInFrench(event)
{
    const currentPhrase = event.target.value;

    if (currentPhrase == "Hello")
    {
        alert ("Bonjour")
    }
    else if (currentPhrase == "Goodbye")
    {
        alert ("Au Revoir")
    }
    else
    {
        alert ("Word not recognised")
    }
}

function calcualteNumberOfApplesLeft(event)
{
    const numberOfApples = event.target.value;

    if (numberOfApples < 6)
    {
        alert ("You need more apples")
    }
    else
    {
        alert ("You have enough apples")
    }
}

function convertMinutesToSeconds(event)
{
    let numberOfMinutes = event.target.value;

    alert (numberOfMinutes + " minutes is equal to " + (numberOfMinutes * 60) + " seconds")
}

/*const yourname = "Dude"
if (yourname == "Coach") 
{
    console.log ("It's a coach")
}
else
{
    console.log ("It's not a coach")
}

const greeting = "bonjour"
if (greeting == "bonjour") 
{
    console.log ("Comment ca va")
}
else
{
    console.log ("Comment ca na")
}

let score = 10
if (score == 10)
{
    console.log ("YOU WIIIIIIIIIIN")
}
else
{
    console.log ("Ok, so you haven't won this time")
}

let age = 14
if (age > 65)
{
    console.log ("Time to retire")
}
else
{
    console.log ("Keep working")
}

let hasCovid = true
if (hasCovid == true)
{
    console.log ("Time to isolate")
}
else
{
    console.log ("Keep social distancing")
}

const isBritish = true
if (age >= 18 && isBritish == true)
{
    console.log ("You can vote in the next election. So get registered. Seriously. It's important. Even if you think it's 'lame'. It won't be so lame when the ones in power are stealing all your paycheck through taxes")
}
else if (age < 18 && isBritish == true)
{
    console.log ("You can't vote just yet")
}
else
{
    console.log ("You can't vote")
} */

