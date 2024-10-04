const input = prompt("Введіть число");
let sum = 0;
let hasNumbers = false;

if (!input) {
  alert("Введіть число");
} else {
  for (let i = 0; i < input.length; i++) {
    if (!isNaN(input[i]) && input[i] !== " ") {
      sum += parseInt(input[i]);
      hasNumbers = true;
    }
  }

  if (hasNumbers) {
    alert(`Сума: ${sum}`);
  } else {
    alert("Введіть число");
  }
}
