


// document.addEventListener('DOMContentLoaded', function() {
//     const display = document.querySelector('.display-input');
//     const buttons = document.querySelectorAll('input[type="button"]');
//     let operators = ['*', '+', '/', '.', '-'];
//     let resultDisplayed = false; // Flag to track if the result is currently displayed
  
//     buttons.forEach(button => {
//       button.addEventListener('click', function() {
//         const value = this.value;
  
//         if (resultDisplayed && display.value !== '') {
//           // Clear the display and set the flag to false
//           display.value = '';
//           resultDisplayed = false;
//         }
  
//         if (value === 'AC') {
//           display.value = '';
//         } else if (value === 'DE') {
//           display.value = display.value.slice(0, -1);
//         } else if (value === '=') {
//           if (display.value !== '') {
//             display.value = eval(display.value);
//             resultDisplayed = true; // Set the flag to true after displaying the result
//           }
//         } else {
//           // Check if the value is an operator and if the display already contains an operator
//           if (operators.includes(value) && operators.includes(display.value.slice(-1))) {
//             return; // Skip adding the operator
//           }
  
//           display.value += value;
//         }
//       });
//     });
//   });
  




document.addEventListener('DOMContentLoaded', function() {
    const display = document.querySelector('.display-input');
    const buttons = document.querySelectorAll('input[type="button"]');
    let operators = ['*', '+', '/', '.', '-'];
    let resultDisplayed = false; // Flag to track if the result is currently displayed
    // let result='';
  
    buttons.forEach(button => {
      button.addEventListener('click', function() {
        const value = this.value;

  
        if (value === 'AC') {
          display.value = '';
          resultDisplayed = false;
        } else if (value === 'DE') {
          display.value = display.value.slice(0, -1);
        } else if (value === '=') {
            if (display.value !== '' && !resultDisplayed && display.value.includes('+') || display.value.includes('-') || display.value.includes('*') || display.value.includes('/')) {
                display.value = eval(display.value);
                resultDisplayed = true; // Set the flag to true after displaying the result
              }
        } else {

        if (resultDisplayed) {
                display.value = ''; // Clear the display before adding a new number
                resultDisplayed = false; // Reset the flag when a new number is entered
        }

          if (display.value === '0' && value === '0') {
            return; // Skip adding additional 0s at the beginning
          }

          if (display.value === '00' && value === '00') {
            return; // Skip adding additional 0s at the beginning
          }
  
  
          // Check if the value is an operator and if the display already contains an operator
          if (operators.includes(value) && operators.includes(display.value.slice(-1))) {
            // Replace the last operator with the new one
            display.value = display.value.slice(0, -1) + value;
          } else {
            if (display.value === '0') {
              display.value = ''; // Remove the leading zero if it exists
            }
            display.value += value;
            resultDisplayed = false; // Reset the flag when a new number is entered
          }
        }
      });
    });
  });
  