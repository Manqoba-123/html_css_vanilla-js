const input_field_el = document.getElementById("input");
const buttons_el = document.querySelectorAll("button");

function clear_results()
{
    input_field_el.value = "";
}

function calculate_results()
{
    /**We use the eval() method which evaluates the string as a JS code */
    input_field_el.value = eval(input_field_el.value);
}

function insert_results(button_value)
{
    input_field_el.value += button_value;
}

for (let i = 0; i < buttons_el.length; i++)
{
    buttons_el[i].addEventListener("click", () =>{
        const button_value = buttons_el[i].textContent;
        
        if (button_value === "C")
        {
            clear_results();
        }

        else if (button_value ===  "=")
        {
            calculate_results();
        }

        else
        {
            insert_results(button_value);
        }
    });
}