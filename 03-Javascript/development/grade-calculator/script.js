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