const input = prompt('Введіть число');
let reversedNumber = '';

if (isNaN(input) || input <= 0) {
	alert('Будь ласка введіть коректне число')
} else {
	for (i = input.length - 1; i >= 0; i--) {
		reversedNumber += input[i];
	}

	alert(`Перевернуте число: ${reversedNumber}`);
}
