const screen = document.getElementById('number');
const buttons = document.querySelectorAll(".button input");

let currentInput = "";

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.value;

        if(value === 'C'){
            currentInput = "";
            screen.textContent = "0";
            return ;
        }

        if(value === '='){
            try{
                currentInput = currentInput.replace('X', '*');
                const result = eval(currentInput);
                screen.textContent = result;
                currentInput = result.toString();
            } catch {
                screen.textContent = "Error";
                currentInput = "";
            }
            return
        } 

        if(value === '+-'){
            if(currentInput !== ""){
                if(currentInput.startsWith('-')){
                    currentInput = currentInput.slice(1);
                } else {
                    currentInput = '-' + currentInput;
                }
                screen.textContent = currentInput;
            }
            return
        }

        currentInput += value;
        screen.textContent = currentInput;
    });
});