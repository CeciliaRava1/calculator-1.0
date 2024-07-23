// Add button value to the screen
function add(newValue){
    document.getElementById('output').querySelector('[data-current-operand]').innerText += newValue;
}

// Clear the screen 'AC'
function ac(){
    document.getElementById('output').querySelector('[data-current-operand]').innerText = '';
}

//Do the math operations
function  calculate(){
    const screenValueElement = document.getElementById('output').querySelector('[data-current-operand]');
    const screenValue = screenValueElement.innerText;
    const result = eval(screenValue);
    screenValueElement.innerText = result;
}

// Delete the last character from the screen 'DEL'
function del(){
    const screenValueElement = document.getElementById('output').querySelector('[data-current-operand]');
    screenValueElement.innerText = screenValueElement.innerText.slice(0, -1);
}
