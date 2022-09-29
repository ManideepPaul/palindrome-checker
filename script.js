const input = document.querySelector("input");
const button = document.querySelector("button");
const display = document.querySelector(".display");
let items;

let reverse = "";
let checkedStatus = false;

button.addEventListener("click", () => palindromeChecker(input.value))

function palindromeChecker(value) {
    if(value === "") { 
        return input.value === reverse ? 
        addCheckedItems(true) :
        addCheckedItems(false);
    } else {
        reverse = value.charAt(0) + reverse;
        return palindromeChecker(value.substr(1));
    }
}

function addCheckedItems(status) {
    items = document.querySelectorAll(".item")

    const item = status ? document.createElement("span") : document.createElement("s");
    !status ? item.style.color = "red" : item.style.color = "green";
    item.classList.add("item")

    item.innerText = `${input.value}`;
    
    display.appendChild(item);
    if(items.length > 4) {
        display.removeChild(items[0])
    }
    input.value = "";
    reverse = "";
}