The criteria for the password protector is the following:
- User prompt: password length (Minimum:8 characters; Maximum:128 characters)
- User prompt: include lowercase?
- User prompt: include uppercase?
- User prompt: include numbers?
- User prompt: include special characters?
*(Note: At least one character type needs to be selected)
- Password is generated and displayed as alert or written to the page.

I first researched on how to generate random numbers and ended up using the two functions, Math.random and Math.floor. Function fromCharcode was also used to determine the possible input from the different criteria. In the event listener, I included the required prompts/confirms and made sure that input was validated and restricted via using if/else. (Minimum 8 characters; Maximum 128 characters; At least one criteria chosen)