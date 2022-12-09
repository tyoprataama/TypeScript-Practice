function Adding(num1: number, num2: number, bol: boolean, phrase: string) {
    // if (typeof num1 !== 'number' || typeof num2 !== 'number') {
    //     throw new Error('Incorrect Input!')
    // }
    // return num1 + num2;
    const res = num1 + num2
    if(bol) {
        console.log(phrase + res);
    } else return res;
}
const numbr1 = 4;
const numbr2 = 3;
const bols = true;
const word = 'Result is: ';

Adding(numbr1, numbr2, bols, word);
