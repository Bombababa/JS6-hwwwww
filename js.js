1.

let i = 1;
while (i <= 10) {
    console.log(i);
    i++;
}


2.
for (let i = 2; i <= 20; i++) {
    if (i % 2 !== 0) {
        continue;
    }
    console.log(i);
}


3.
const num = 7;
for (let i = 1; i <= 10; i++) {
    console.log(`${num} x ${i} = ${num * i}`);
}


4.
const array = [1, 2, 3, 4, 5];
let index = 0;

while (index < array.length) {
    console.log(array[index]);
    index++;
}


5.
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === 7) {
        break;
    }
    console.log(numbers[i]);
}


6.
const n = 10;

for (let i = 1; i <= 20; i++) {
    if (i >= n) {
        break;
    }
    console.log(i);
}


7.
let j = 1;

while (j <= 20) {
    if (j % 3 === 0) {
        j++;
        continue;
    }
    console.log(j);
    j++;
}

