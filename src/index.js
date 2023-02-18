const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    // write your solution here

    const trimZeroes = (str) => {
        for (let i = 0; i < str.length; i++) {
            if (str[i] !== '0') return str.splice(0, i)
        }
    }

    const pairArray = (arr) => {
        let res = []
        for (let i = 0; i < arr.length; i += 2) {
            res.push(arr[i] + arr[i + 1])
        }
        return res
    }

    let res = ''
    let el = ''
    let arr = expr.split('')
    const wordsArr = []

    for (let i = 0; i < arr.length; i += 10) {
        wordsArr.push(arr.slice(i, i + 10))
    }

    for (let i = 0; i < wordsArr.length; i++) {
        if (wordsArr[i].join('') === '**********') {
            res += ' '
            continue
        }
        trimZeroes(wordsArr[i])
        wordsArr[i] = pairArray(wordsArr[i])
        el = wordsArr[i].map(value => {
            if (value === '11') return '-'
            if (value === '10') return '.'
        })
       if ( el.join('') in MORSE_TABLE) res+= MORSE_TABLE[el.join('')]

    }

    // console.log(res)

    return res
}

decode('00101010100000000010001011101000101110100000111111**********00001011110000111111000010111000101110100000111010')

module.exports = {
    decode
}