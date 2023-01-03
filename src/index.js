let simpleNum = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen',
];
let dozens = [
    'zero',
    'ten',
    'twenty',
    'thirty',
    'forty',
    'fifty',
    'sixty',
    'seventy',
    'eighty',
    'ninety',
];



module.exports = function toReadable(number) {
    let numToStr = number + "";

    function upToHundred(num) { // 0-99
        let numStr = num + "";
        if (num <= 19) {
            return simpleNum[num];
        } else if (num % 10 === 0) {
            return dozens[numStr[0]];
        } else  {
            return `${dozens[numStr[0]]} ${simpleNum[numStr[1]]}`; // 20 - 99
        }
    }

    if (numToStr.length < 3 ) { // 0-99
        return upToHundred(number);
    } else if (numToStr.length === 3 && number % 100 === 0) { // 100, 200, 300 .....
        return `${simpleNum[numToStr[0]]} hundred`;
    } else { // 100 - 999
        let numToDozensPart = +(numToStr[1] + "" + numToStr[2]);
        let dozensPart = upToHundred(numToDozensPart);
        return `${simpleNum[numToStr[0]]} hundred ${dozensPart}`;
    }
}; 

