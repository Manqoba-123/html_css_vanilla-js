const btn_el = document.getElementById("btn");
const birthday_el = document.getElementById("date");
const result_el = document.getElementById("result");

function count_age()
{
    const birthday_value = birthday_el.value;
    if(birthday_value === "")
    {
        alert("Please provide your birthday date");
    }
    else
    {
        const age = get_age(birthday_value);
        result_el.innerText = `Your age is ${age} ${age > 1 ? "years" : "year"} old`;
    }
}

function get_age(birthday_value)
{
    const current_date = new Date(); // new Date() is a constractor method which is built in JavaScript
    const birthday_date = new Date(birthday_value);
    let age = current_date.getFullYear() - birthday_date.getFullYear();
    let month = current_date.getMonth() - birthday_date.getMonth();

    if(month < 0 || (month === 0 && current_date.getDate() < birthday_date.getDate))
    {
        age--;
    }
    return age;
}

btn_el.addEventListener("click", count_age);
