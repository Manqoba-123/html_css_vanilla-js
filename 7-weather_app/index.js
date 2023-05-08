/**
 * Author: Aziwe Mlangeni
 * From C15 ALX Africa
 */

const API_KEY = "73b879151fa0cbe76f9f247651e627a6";

const city_el = document.getElementById("city-input");

/**
 * To select a form as a whole since does not have
 * class or id we have to use querySelector() method
 */
const form_el = document.querySelector("form");

async function getWeather(city_value)
{
    /**
     * try & catch: it asks or fetches data from api
     *  if it is correct we get data unless it catches any error
     */
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city_value}&appid=${API_KEY}&units=metric`);


        /**
         * when the response is not working ok
         */
        if (response.ok) 
        {
            throw new Error("Error connecting to network");
        }

        /**
         * we convert response to data using json()
         */
        const data = await response.json();
        console.log(data);
    } catch (error) {
        
    }
}

/**
 * ()=> - To trigger the form to submit when we press search weather
 * event: The event 
 */
form_el.addEventListener("submit", (event)=>{
    /**
     * use the preventDefault() methood to prevent the page 
     *  reloading when search without input
     */
    event.preventDefault();
    const city_value = city_el.value;
    getWeather(city_value);
});