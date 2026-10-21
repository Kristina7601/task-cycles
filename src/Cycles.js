function rangeSum(start, end) {
    let sum = 0;
    for (let i = start; i <= end; i++) {
        if (i % 2 === 0) {
            sum += i;
        }
    }
    return sum;
}

function iterationCount(num) {
    let count = 0;
    let current = num;

    while (current > 0.1) {
        current = current / 2;
        count++;
    }

    return count;
}

function symbolsReplace(str) {
    let result = '';
    let i = 0;

    do {
        if ((i + 1) % 3 === 0) {
            result += '_';
        } else {
            result += str[i];
        }
        i++;
    } while (i < str.length);

    return result;
}

module.exports = {
    rangeSum,
    iterationCount,
    symbolsReplace,
};
