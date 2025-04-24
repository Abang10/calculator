let display = "";

function appendToDisplay(value) {
    display += value;
    document.querySelector('input[name="display"]').value = display;
}

function clearDisplay() {
    display = "";
    document.querySelector('input[name="display"]').value = "";
}

function deleteLast() {
    display = display.slice(0, -1);
    document.querySelector('input[name="display"]').value = display;
}

function calculate() {
    try {
        display = eval(display).toString();
    } catch (e) {
        display = "Error";
    }
    document.querySelector('input[name="display"]').value = display;
}
