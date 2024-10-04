const input = prompt("Введіть число:");
let isPalindrome = true;

if (isNaN(input) || input <= 0) {
  alert("Будь ласка введіть коректне число");
} else {
  for (let i = 0; i < input.length; i++) {
    if (input[i] !== input[input.length - 1 - i]) {
      isPalindrome = false;
      break;
    }
  }

  if (isPalindrome) {
    alert(`Число ${input} є паліндромом.`);
  } else {
    alert(`Число ${input} не є паліндромом.`);
  }
}
