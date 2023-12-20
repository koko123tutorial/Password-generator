let lengthPassword = document.getElementById('Length');
let result = document.getElementById('Password');

const uppercasec = document.querySelector('#Uppercase');
const lowercasec = document.querySelector('#Lowercase');
const symbolc = document.querySelector('#Symbol');
const numberc = document.querySelector('#Number');

function generatePassword(len) {
  const lowerAlphabet = 'abcdefghijklmnopqrstuvwxyz';
  const upperAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const number = '0123456789';
  const symbol = "!@#$%^&*()_+=-{}[]';:/?.,<>~`";

  const data1 = lowerAlphabet + upperAlphabet + number + symbol;
  const data2 = lowerAlphabet + upperAlphabet;
  const data3 = lowerAlphabet;
  const data4 = lowerAlphabet + number;
  const data5 = lowerAlphabet + symbol;
  const data6 = lowerAlphabet + upperAlphabet + number;
  const data7 = lowerAlphabet + upperAlphabet + symbol;
  const data8 = lowerAlphabet + number + symbol;
  let generator = '';

  if (lowercasec.checked) {
    for (let index = 0; index < len; index++) {
      generator += data3[~~(Math.random() * data3.length)];
    }
    return generator;
  }

  if (uppercasec.checked) {
    for (let index = 0; index < len; index++) {
      generator += data2[~~(Math.random() * data2.length)];
    }
    return generator;
  }
  if (numberc.checked) {
    for (let index = 0; index < len; index++) {
      generator += data4[~~(Math.random() * data4.length)];
    }
    return generator;
  }
  if (symbolc.checked) {
    for (let index = 0; index < len; index++) {
      generator += data5[~~(Math.random() * data5.length)];
    }
    return generator;
  }
}

function getPassword() {
  const newPassword = generatePassword(lengthPassword.value);
  result.value = newPassword;
}
