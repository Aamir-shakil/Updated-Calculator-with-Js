const display = document.getElementById("display");

function appendtodisplay(input){
    if (input === '.') {
        const currentValue = display.value;
        const currentNumber = currentValue.split(/[\+\-\*\/]/).pop(); // splitting the string removing operators so there is just an array of numbers.Using pop()so code is only concerned with current number
        
        if (currentNumber.includes('.')) {
            display.value = "Error"; //error handling for more than one decimal point 
            return;
        }
    }
    display.value += input;

}

function calculate(){
    try{
    display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error"; //code for error handling incase invalid equation inputted 
    }
    

}

function cleardisplay(){
    display.value = "";

}