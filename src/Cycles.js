/*
  В функцию rangeSum() приходят два целых неотрицательных числа. 
  Используя цикл for, просуммируйте все четные числа в диапазоне между этими значениями (включительно) и верните итоговый результат.
*/
export function rangeSum(start, end) {
    let sum = 0;
    for (let i = start; i <= end; i++) {
        if (i % 2 === 0) {
            sum += i;
        }
    }
    return sum;
}

/*
  В функцию iterationCount() приходит неотрицательное число. 
  Используя цикл while, выполняйте деление этого числа на два до тех пор, пока результат деления больше 0.1, и верните количество потребовавшихся итераций.
*/
export function iterationCount(num) {
    let count = 0;
    let current = num;

    while (current > 0.1) {
        current = current / 2;
        count++;
    }

    return count;
}

/*
  В функцию symbolsReplace() приходит строка текста. 
  Используя цикл do while, замените в тексте каждый третий символ на символ нижнего подчеркивания и верните итоговый результат.
*/
export function symbolsReplace(str) {
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
