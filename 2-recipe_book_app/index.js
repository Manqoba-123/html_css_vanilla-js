/** 
 * create the account on https://spoonacular.com/food-api
 * To get your API key
 */

const API_KEY = "d93558f1356949bf82d02a0f70f30aca";
const recipe_list_el = document.getElementById("recipe-list");


/**
 * displayRecipes- To display the recipes
 * @recipes: Recipe data fetched from the API
 * 
 * note this function will not async and wait 
 *      as the data is already fetched at this stage
 */

function displayRecipes(recipes)
{
    recipe_list_el.innerHTML = ""; // It makes the page empty

    /*Use the foreach method to list recipes 1 by 1 */
    recipes.forEach((recipe) => {
        const recipe_item_el = document.createElement("li"); // creating the list element
        recipe_item_el.classList.add("recipe-item"); // to get the list by class

        image_item_el = document.createElement("img");
        image_item_el.src = recipe.image;
        image_item_el.alt = "recipe image";

        title_el = document.createElement("h2");
        title_el.innerText = recipe.title;

        ingredients_el = document.createElement("p");
        ingredients_el.innerHTML = `<strong>Ingredients :</strong> ${recipe.extendedIngredients.map((ingredient) => ingredient.original).join(", ")}`;

        checkRecipeEl =document.createElement("a");
        checkRecipeEl.href = recipe.sourceUrl;
        checkRecipeEl.innerText = "Check Recipe";

        /* Add img element into recipe_item_el */
        recipe_item_el.appendChild(image_item_el);

        /* Add h2 element into recipe_item_el */
        recipe_item_el.appendChild(title_el);

        /* Add p element into recipe_item_el */
        recipe_item_el.appendChild(ingredients_el);
        
        /* Add p element into recipe_item_el */
        recipe_item_el.appendChild(checkRecipeEl);

        /* Add the li element into recipe_list_el */
        recipe_list_el.appendChild(recipe_item_el);
    });
} 

/**
 * fetch - it's a built-in function used to make HTTP
 *      requests,fetch resources from a remote server.
 * @'https://api.spoonacular.com/recipes/
 * random?number=10&apiKey=${API_KEY}`): is the link where will fetch data
 * @random: will return random results when refreshing page
 * @number=10: will return 10 items as we specified 10 so use any number
 * 
 * json - is widely used to send and receive data between a client and  server
 */

async function getRecipes()
{
    const response = await fetch(`https://api.spoonacular.com/recipes/random?number=10&apiKey=${API_KEY}`);

    const data = await response.json();

    return data.recipes;
}



/** 
 *  The initial function to triger the response 
 *      and fetch new data from API
 * async: is used to define a function as asynchronous
 *      you can use chatgpt to get full info about async
 * await: used to pause the execution of the function
 *      until the awaited promise resolve.
 * */

async function init()

{
    const recipes = await getRecipes();
    displayRecipes(recipes);
}

init();