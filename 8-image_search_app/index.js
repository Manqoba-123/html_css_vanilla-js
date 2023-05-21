const ACCESS_KEY = "";
const form_el = document.querySelector("form");
const input_el = document.getElementById("search-input");
const search_results_el = document.querySelector(".search-results");
const show_more_el = document.getElementById("show-more-btn");

let input_data = "";
let page = 1;

async function searchImages()
{
    input_data = input_el.value;
    /**To fetch the data from api we need to make url dynamic with the use of ``*/
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${input_data}&client_id=${ACCESS_KEY}`;
    /**await is going to wait until the results comes from api
     *  and it prevents an error for our app
     * fetch - to get the url 
     * don't forget to async the function as you use await
    */
   const response = await fetch(url);
   /**We need to parse response and convert data to json */
   const data = await response.json();
   
   /**To make our page start from empty results */
   if (page === 1)
   {
        search_results_el.innerHTML = "";
   }

   const results = data.results;

   /**We need to use map method as we should read each result */
   results.map((result)=>{
    const image_wrapper = document.createElement("div");
    image_wrapper.classList.add("search-result");
    const image = document.createElement("img");
    image.src = result.urls.small;
    image.alt = result.alt_description;
    const image_link = document.createElement("a");
    /** The link for the picture */
    image_link.href = result.links.html;
    /**To open the picture on another page set target to _blank */
    image_link.target = "_blank";
    image_link.textContent = result.alt_description;

    /**We need to append both the images and anchor to the image_wrapper div */
    image_wrapper.appendChild(image);
    image_wrapper.appendChild(image_link);

    /**Now take the image wrapper div to the search results div */
    search_results_el.appendChild(image_wrapper)
;   });

page++;


   /**To hide the show more button before search */
   if (page > 1)
   {
        show_more_el.style.display = "block";
   }
}

form_el.addEventListener("submit", (event) => {
    /**To prevent auto reload of a page use preventDefault() method */
    event.preventDefault();
    searchImages();
});

show_more_el.addEventListener("click",() =>{
    searchImages();
});