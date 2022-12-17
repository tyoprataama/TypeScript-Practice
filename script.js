var userInput; // the difference between any and unknown is we can put anything in unknown
var userName;
userInput = 5;
userInput = 'Max';
// userName = userInput (it will show error bcs unknown don't know what exactly userInput is)
if (typeof userInput === 'string') {
    userName = userInput; // we can figure it out through if statement
}
