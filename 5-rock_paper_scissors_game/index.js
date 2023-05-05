/**
 * We use  querySelectorAll to read all buttons in the web page
 */

const buttons = document.querySelectorAll("button");
const results_el = document.getElementById("results");
const p1ScoreEl = document.getElementById("p1-score");
const cpuScoreEl = document.getElementById("cpu-score");

let p1Score = 0;
let cpuScore = 0;


/**
 * forEach- To loop through each button
 * we will fetch each button using id 
 */
buttons.forEach((button) => {
    button.addEventListener("click", () =>{
        const result = playGame(button.id, cpuPlay());
        results_el.textContent = result;
    });
    
});

function cpuPlay()
{
    const choices = ["rock", "paper", "scissors"];
    const randomChoice = Math.floor(Math.random() * choices.length);
    return choices[randomChoice];
}

function playGame(p1Selection, cpuSelection)
{
    if (p1Selection === cpuSelection)
    {
        return "It's a tie";
    }
    else if (
    (p1Selection === "rock" && cpuSelection === "scissors") ||
    (p1Selection === "paper" && cpuSelection === "rock") ||
    (p1Selection === "scissors" && cpuSelection === "paper") )
    {
        p1Score++;
        p1ScoreEl.textContent = p1Score;
        return " P1 Wins! " + p1Selection + " beats " + cpuSelection;
    }
    else
    {
        cpuScore++;
        cpuScoreEl.textContent = cpuScore;
        return " CPU Wins! " + cpuSelection + " beats " + p1Selection;
    }
}