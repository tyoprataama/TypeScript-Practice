//  unknown types
let userInput: unknown; // the difference between any and unknown is we can put anything in unknown
let userName: string;

userInput = 5;
userInput = 'Max';
// userName = userInput (it will show error bcs unknown don't know what exactly userInput is)
if(typeof userInput === 'string') {
    userName = userInput; // we can figure it out through if statement
}

//  never types is newer types from void
function generateError(message: string, code: number):never {
    throw{ message: message, errorCode: code }
}
generateError('An Error occured in line 30!', 500);
