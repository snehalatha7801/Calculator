let string = "";
let memory = 0; // Variable to store memory value
let buttons = document.querySelectorAll('.button'); // Fixed method name from getSelectorAll to querySelectorAll

Array.from(buttons).forEach(button => { // Fixed arrow function syntax
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            try {
                string = eval(string); // Evaluate the expression
                document.querySelector('input').value = string; // Display result
            } catch (error) {
                document.querySelector('input').value = "Error"; // Handle evaluation errors
                string = ""; // Reset string on error
            }
        } else if (e.target.innerHTML == 'C') {
            string = ""; // Clear the string
            document.querySelector('input').value = string; // Update display
        } else if (e.target.innerHTML == 'M+') {
            memory += parseFloat(string); // Add current value to memory
            string = ""; // Clear the string after storing in memory
            document.querySelector('input').value = string; // Update display
        } else if (e.target.innerHTML == 'M-') {
            memory -= parseFloat(string); // Subtract current value from memory
            string = ""; // Clear the string after storing in memory
            document.querySelector('input').value = string; // Update display
        } else if (e.target.innerHTML == 'MC') {
            memory = 0; // Clear memory
            string = ""; // Clear the string
            document.querySelector('input').value = string; // Update display
        } else {
            string += e.target.innerHTML; // Append button value to string
            document.querySelector('input').value = string; // Update display
        }
    });
});