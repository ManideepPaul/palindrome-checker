const input = document.querySelector("input");
const button = document.querySelector("button");
const display = document.querySelector(".display");

// All created for display will be saved in it
let items;

// This will hold the reversed word
let reverse = "";

button.addEventListener("click", () => palindromeChecker(input.value))


// Reversing the word using recursion and checking if word is palindrome
function palindromeChecker(value) {
    if(value === "") { 
        // If the word is palindrome then pass true else pass false in the function
        return input.value === reverse ? 
        addCheckedItems(true) :
        addCheckedItems(false);
    } else {

        // adding first char passed to the reverse variable
        reverse = value.charAt(0) + reverse;

        // Calling the function again without the first charactor
        return palindromeChecker(value.substr(1));
    }
}


// This function will create list of checked word according to passed value which is true and false
function addCheckedItems(status) {

    // Selecting all the items with item class
    items = document.querySelectorAll(".item")

    // if true then create span else create strike through
    const item = status ? document.createElement("span") : document.createElement("s");

    // if false then color will be red else green
    !status ? item.style.color = "red" : item.style.color = "green";

    // Adding the class to the newly created element
    item.classList.add("item")

    // Setting the input value
    item.innerText = `${input.value}`;
   
    // Appending the item to the display
    display.appendChild(item);

    // If there is more than 5 elements then remove the first one
    if(items.length > 4) {
        display.removeChild(items[0])
    }

    // Clearing the input value and reverse variable
    input.value = "";
    reverse = "";
}