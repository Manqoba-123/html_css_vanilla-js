const button_el = document.getElementById("btn");
const dice_el = document.getElementById("dice");
const roll_history_el = document.getElementById("roll-history");
let history_results = [];

/**
 * Math.floor To round it to lower number
 * Math.random()- Function for generating random numbers
 */
function rollDice()
{
    const results = Math.floor(Math.random() * 6) + 1;

    const dice_face = getDiceface(results);
    dice_el.innerHTML = dice_face;
    history_results.push(results);
    updateHistory();
}

/**
 * updateHistory- To update every result we get
 */
function updateHistory()
{
    roll_history_el.innerHTML = "";

    for(let i = 0; i < history_results.length; i++)
    {
        const list_item = document.createElement("li");
        /**
         * It has to be a dynamic to get all the resukts and you have to use back tick ``
         */
        list_item.innerHTML = `Roll ${i + 1}: <span>${getDiceface(history_results[i])}</span>`;

        roll_history_el.appendChild(list_item);
    }
}
/**
 * switches instead of elif
 */
function getDiceface(results)
{
    switch(results){
        case 1:
            return "&#9856;";
        case 2:
            return "&#9857;";
        case 3:
            return "&#9858;";
        case 4:
            return "&#9859;";
        case 5:
            return "&#9860;";
        case 6:
            return "&#9861;";
            default:
                return "";
    }
}

/**
 * ()=> is a function that will trigger infromation whenever we click roll dice
 * .classList.add adds the animation by class that was created in style.css
 * If you click roll dice button it will only roate once
 *      We have to remove the roll-animation class after a certain duration
 *      using setTimeout() 
 * rollDice- Function to update different pictures for our dice when button clicked.
 * */
button_el.addEventListener("click", ()=>{
    dice_el.classList.add("roll-animation");
    setTimeout(() => {
        dice_el.classList.remove("roll-animation")
        rollDice();
    }, 1000);
});