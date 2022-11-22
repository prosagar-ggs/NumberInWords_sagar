
function numberInWords(num){
    let numStr=num.toString()
    let numArr=numStr.split("")
    let wordsArray = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
    let secondWordsArray = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"]
    let tensWordsArray = ["twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"]
    for (let i = 0; i < numArr.length; i++) {
        if(num<=9){
            return (wordsArray[num])
        }
        else if (num > 9 && num < 20) {
            return (secondWordsArray[num - 10])
        }
        else if (num > 19 && num < 100) {
            return (tensWordsArray[numArr[0] - 2] + " " + wordsArray[numArr[1]])
        }
        else if (num > 99 && num < 1000) {
            return (wordsArray[numArr[0]] + " hundred " + numberInWords(num % 100))
        }
        else if(num==1000){
            return ("one thousand")
        }
    }
}
console.log(numberInWords(11))