let character = "*"
let arr = [];
let size = 8;


function pad(starNum, starSize) {
    return " ".repeat(starSize - starNum) + character.repeat(2 * starNum - 1) + " ".repeat(starSize - starNum);
}

for(let i = 0; i < size; i++) {
    arr.push(pad(i + 1, size));
}

let result = "";

for(const x of arr) {
    result = result + "\n" + x;
}
console.log(result);