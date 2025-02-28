module.exports = function toReadable(number) {
    let a = new Map([
        [0, "zero"],
        [1, "one"],
        [2, "two"],
        [3, "three"],
        [4, "four"],
        [5, "five"],
        [6, "six"],
        [7, "seven"],
        [8, "eight"],
        [9, "nine"],
    ]);
    let b = new Map([
        [11, "eleven"],
        [12, "twelve"],
        [13, "thirteen"],
        [14, "fourteen"],
        [15, "fifteen"],
        [16, "sixteen"],
        [17, "seventeen"],
        [18, "eighteen"],
        [19, "nineteen"],
    ]);
    let c = new Map([
        [10, "ten"],
        [20, "twenty"],
        [30, "thirty"],
        [40, "forty"],
        [50, "fifty"],
        [60, "sixty"],
        [70, "seventy"],
        [80, "eighty"],
        [90, "ninety"],
    ]);
    let d = new Map([
        [100, "one hundred"],
        [200, "two hundred"],
        [300, "three hundred"],
        [400, "four hundred"],
        [500, "five hundred"],
        [600, "six hundred"],
        [700, "seven hundred"],
        [800, "eight hundred"],
        [900, "nine hundred"],
    ]);
    let str = number.toString();

    if (str.length === 1) {
        return a.get(number);
    } else if (str.length === 2) {
        let tens = parseInt(str[0]) * 10;
        let ones = parseInt(str[1]);

        if (number < 20) {
            return number === 10 ? c.get(10) : b.get(number);
        } else {
            return ones === 0 ? c.get(tens) : c.get(tens) + " " + a.get(ones);
        }
    } else if (str.length === 3) {
        let hundreds = parseInt(str[0]) * 100;
        let ten = parseInt(str[1]);
        let one = parseInt(str[2]);
        let tenOne = parseInt(str[1] + str[2]);
        if (ten === 0 && one === 0) {
            return d.get(number);
        } else if (ten === 0 && one !== 0) {
            return d.get(hundreds) + " " + a.get(one);
        } else if (ten !== 0 && one === 0) {
            return d.get(hundreds) + " " + c.get(tenOne);
        } else if (ten === 1 && one < 20) {
            return d.get(hundreds) + " " + b.get(tenOne);
        } else if (ten !== 1 && one !== 0) {
            return d.get(hundreds) + " " + c.get(ten * 10) + " " + a.get(one);
        }
    }
};
