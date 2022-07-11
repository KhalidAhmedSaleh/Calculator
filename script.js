'use strict';

const numbers = document.querySelectorAll('.number'); // Selecting all elements have number class
let result = document.getElementById('result'); // Select the input filed by its ID
const operations = document.querySelectorAll('.operation'); // Selecting all elements have operation class

const operationsArr = [];
let pdfString = '';

let num = 0;
const pdfButton = document.querySelector('.PDF');
let screenValue = '';

// Looping over the numbers to get the element
for (let number = 0; number < numbers.length; number++) {
  numbers[number].addEventListener('click', function (e) {
    num = e.target.innerText;
    result.value += num;
  });
}

for (let i = 0; i < operations.length; i++) {
  operations[i].addEventListener('click', function () {
    //* 'i' variable will give me the index of an operation and based on that i will add the operation
    if (i === 1) {
      result.value += '*';
    } else if (i === 0) {
      result.value = '';
    } else if (i === 6) {
      result.value += '(';
    } else if (i === 2) {
      result.value += '/';
    } else if (i === 7) {
      result.value += ')';
    } else if (i === 8) {
      result.value += '%';
    } else if (i === 4) {
      result.value += '+';
    } else if (i === 5) {
      result.value += '-';
    } else if (i === 3) {
      result.value += '.';
    } else if (i === 9) {
      // * Once click on equal sign the porgram will add everthing on the input to an array then eval all numbers
      operationsArr.push(result.value);
      screenValue = eval(result.value);
      result.value = screenValue;
    }
  });
}

pdfButton.addEventListener('click', function () {
  let doc = new jsPDF();
  arrayLines(operationsArr, doc);
  doc.save('operations.pdf');
});

function arrayLines(arrayToLine, doc) {
  let idx = 0;
  let x = 10;
  let y = 10;
  while (idx < arrayToLine.length) {
    doc.text(arrayToLine[idx], x, y);
    y += 10;
    idx++;
  }
}
