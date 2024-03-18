//Debugging

/*let currentHeadline = "Dogs can look up";
const currentArticle = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

if (currentHeadline.length > 14)
{
    currentHeadline = currentHeadline.substring(0,14) + "...";
}

console.log (`Breaking News: ${currentHeadline}`);      // ` ` Allows for variables to be used
console.log (currentArticle);*/

//Problem Solving

//Create an application to keep track of a score in a football match

//It's football so there's two teams, two scores are needed

let teamOneScore = 0;
let teamTwoScore = 0;
let isGameOver = false;

//When team one scores, their score should be incremented

function handleTeamOneClick()
{
    teamOneScore = teamOneScore + 1;
    console.log (teamOneScore + ":" + teamTwoScore);
}

//When team two scores, their score should be incremented

function handleTeamTwoClick()
{
    teamTwoScore = teamTwoScore + 1;
    console.log (teamOneScore + ":" + teamTwoScore);
}

//The game should stop but when and how?

function handleStopGame()
{
    isGameOver = true;
    console.log ("Final Score - " + teamOneScore + ":" + teamTwoScore);
}