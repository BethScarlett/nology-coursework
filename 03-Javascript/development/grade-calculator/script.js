function handleCalculateGrade (event)
{
    let grade = event.target.value;
    grade = grade.toUpperCase();

    //Stops alert from appearing when no value is in input 
    if (!grade) return;

    let percentage;
    switch (grade)
    {
        case "A":
            percentage = "90-100%"
            break;
        case "B":
            percentage = "75-89%"
            break;
        case "C":
            percentage = "50-74%"
            break;
         case "D":
            percentage = "25-49%"
            break;
        case "E":
            percentage = "0-24%"
            break;
        default:
            percentage = "unable to be determined. Please use a valid grade from A - E."
            break;
    }

    alert ("The percentage was " + percentage)
}

function handlePositiveNegative(event) 
{
    numberToCheck = event.target.value;

    if (!numberToCheck) return;

            if (numberToCheck < 0)
            {
                alert ("This is a negative number.")
            }
            else
            {
                alert ("This is a positive number.")
            }
}

function handleDaysUntilWeekend (event)
{
    let currentDay = event.target.value;
    currentDay = currentDay.toLowerCase();

    let daysLeft;

    if (!currentDay) return;

    switch (currentDay)
    {
        case "monday":
            daysLeft = 5;
            break
        case "tuesday":
            daysLeft = 4;
            break
        case "wednesday":
            daysLeft = 3;
            break;
        case "thursday":
            daysLeft = 2;
            break;
        case "friday":
            daysLeft = 1;
            break;
        case "saturday":
            daysLeft = 0;
            break;
        case "sunday":
            daysLeft = 0;
            break;
        default:
            daysLeft = "Invalid";
            break;
    }

    if (daysLeft > 0)
    {
        alert ("There are " + daysLeft + " days left until the weekend")
    }
    else if (daysLeft == 0)
    {
        alert ("It's the weekend. Woooo!")
    }
    else
    {
        alert ("Sorry, we couldn't recognise that day.")
    }
}

function handleVegetablePrices (element)
{
    const selectedVegetable = element.options[element.selectedIndex].value;
    let cost;

    switch (selectedVegetable)
    {
        case "carrot":
        {
            cost = 10
            alert ("Carrots are " + cost + "p per kg")
            break;
        }
        case "potato":
        {
            cost = 10
            alert ("Potatoes are " + cost + "p per kg")
            break;
        }
        case "brocolli":
        {
            cost = 55
            alert ("Brocolli is " + cost + "p per head")
            break;
        }
        case "cabbage":
        {
            cost = 43
            alert ("Cabbages are " + cost + "p per unit")
            break;
        }
        case "asparagus":
        {
            cost = 13
            alert ("Asparagus is " + cost + "p per kg")
            break;
        }
    }
}