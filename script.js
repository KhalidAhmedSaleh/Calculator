'use strict';

document.getElementById('result').readOnly = true; //set this attribute in Html file

const numbers = document.querySelectorAll('.number');
let result = document.getElementById('result');

const operations = document.querySelectorAll('.operation');

let num = 0;

let screenValue = '';
let equalResult = 0;
for (let number = 0; number < numbers.length; number++) {
  numbers[number].addEventListener('click', function (e) {
    num = e.target.innerText;
    console.log(num);
    result.value += num;
    console.log(number);
  });
}

for (let i = 0; i < operations.length; i++) {
  operations[i].addEventListener('click', function () {
    console.log(i);
    if (i === 1) {
      screenValue = '*';
      result.value += screenValue;
    } else if (i === 0) {
      screenValue = '-';
      result.value += screenValue;
    } else if (i === 2) {
      screenValue = '/';
      result.value += screenValue;
    } else if (i === 6) {
      screenValue = '+';
      result.value += screenValue;
    } else if (i === 2) {
      screenValue = '/';
      result.value += screenValue;
    } else if (i === 7) {
      result.value = '';
    } else if (i === 8) {
      screenValue = '%';
      result.value += screenValue;
    } else if (i === 4) {
      screenValue = '(';
      result.value += screenValue;
    } else if (i === 5) {
      screenValue = ')';
      result.value += screenValue;
    } else if (i === 3) {
      screenValue = '.';
      result.value += screenValue;
    } else if (i === 9) {
      screenValue = eval(result.value);
      result.value = screenValue;
    }
  });
}

document.addEventListener('keydown', function (e) {
  if (e.key === 'Backspace') {
    screenValue = screenValue.slice(0, -1);
    result.value = screenValue;
  }
});
