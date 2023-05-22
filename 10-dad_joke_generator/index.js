const API_KEY ="+gavqW8sTKg1oCPHv5gdvg==RElmWJk7f2Z2195G";
const joke_el = document.getElementById("joke");
const btn_el = document.getElementById("joke-btn");

const url = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

const options = {
    method: "GET",
    /**creating an object */
    headers: {
        "X-Api-Key": API_KEY,
    },
};

async function get_joke()
{
    /**To prevent all the errors we use trycatch */
    try {
        joke_el.innerText = "Joke incoming.."
        btn_el.disable = true;
        btn_el.innerText = "Laughing"
        const response = await fetch(url, options);
        const data = await response.json();
        /**Since the data is in the form of object we use indexing of the first element */
        joke_el.innerText = data[0].joke;
        btn_el.disable = false;
        btn_el.innerText = "TELL A JOKE";
    } catch (error) {
        joke_el.innerText = "ERR_NETWORK_DISCONNECTED, try again later"
        
    }
}

btn_el.addEventListener("click", get_joke);