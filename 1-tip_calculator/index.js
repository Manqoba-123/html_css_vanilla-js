const button_el = document.getElementById("btn");
const bill_el = document.getElementById("bill");
const tip_el = document.getElementById("tip");
const total_el = document.getElementById("total");

function getFullAmount()
{
    const bill_value = bill_el.value;
    const tip_value = tip_el.value;

    if(bill_value <= 0 || tip_value <= 0)
    {
        alert("Please enter valid amount or tip percentage");
    }
    else
    {
        const totalAmount = bill_value * (1 + tip_value / 100);
        total_el.innerText = totalAmount.toFixed(2); //to fix the number as it was making it binary after 2 digits
    }
}

button_el.addEventListener("click", getFullAmount);