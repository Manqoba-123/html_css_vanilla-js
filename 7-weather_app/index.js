/**
 * Author: Aziwe Mlangeni
 * From C15 ALX Africa
 */

const API_KEY = "6dcd4c37f56bf6d98269cbc45a454488";

const city_el = document.getElementById("city-input");
const weather_data_el = document.getElementById("weather-data");

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
        if (!response.ok) 
        {
            throw new Error("Error connecting to network");
        }

        /**
         * we convert response to data using json()
         */
        const data = await response.json();

        const iconImg = data.weather[0].icon;
        /**
         * Math.round()- To round off temperature to one decimal
         */
        const temperature = Math.round(data.main.temp);
        const low_temp = Math.round(data.main.temp_min);
        const description = data.weather[0].description;
        const details = [`Feels like:${Math.round(data.main.feels_like)}°C`, `Humidity:${data.main.humidity}%`, `Speed:${Math.floor(data.wind.speed)}m/s`];

        weather_data_el.querySelector(".icon").innerHTML = `<img src="http://openweathermap.org/img/wn/${iconImg}.png" alt="Weather icon"/>`;
        weather_data_el.querySelector(".temperature-main").textContent = `${temperature}°C`;
        weather_data_el.querySelector(".temperature-min").textContent = `${low_temp}°C`;
        weather_data_el.querySelector(".description").innerHTML = `<i>${description}</i>`;
        weather_data_el.querySelector(".details").innerHTML = details.map((detail) => `<div><i>${detail}</i></div>`);
    } catch (error) {
        weather_data_el.querySelector(".icon").innerHTML = "";
        weather_data_el.querySelector(".temperature-main").textContent = "";
        weather_data_el.querySelector(".temperature-min").textContent = "";
        weather_data_el.querySelector(".description").textContent = "An error occured connecting to network";
        weather_data_el.querySelector(".details").innerHTML = "";
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