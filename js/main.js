// declare variables to hold dom elements

var plus = document.getElementById('plus');
var minus = document.getElementById('minus');
var input = document.getElementById('input');
var display = document.getElementById('display');

// write arithmetic functions

var add = function() {
    let displayValue = display.textContent;
    let inputValue = input.value;
    let add = parseInt(inputValue) + parseInt(displayValue);
    display.textContent = add;
    console.log(add);
    if (add < 0) {
        display.style.color = "red";
    }
    return add;
}

var subtract = function() {
    let displayValue = display.textContent;
    let inputValue = input.value;
    let sub = parseInt(displayValue) - parseInt(inputValue);
    display.textContent = sub;
    console.log(sub);
    if (sub < 0) {
        display.style.color = "red";
    }
    return sub;
}

// event listeners for + and - boxes

plus.addEventListener('click', add);

minus.addEventListener('click', subtract);

