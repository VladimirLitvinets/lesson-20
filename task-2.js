const number = prompt('Введіть число');

if (isNaN(number) || number <= 0) {
	alert('Будь ласка введіть коректне число');
} else {
	for (let i = number; i >= 1; i--) {
		let line = '';
		for (let j = 1; j <= i; j++) {
			line += j + ' ';
		}
		alert(line);
	}
}

