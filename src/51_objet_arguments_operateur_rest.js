function operation(operateur, ...numbers) {
  let total = 0;
  if (operateur === "+") {
    for (let i = 0; i < numbers.length; i++) {
      total += numbers[i];
    }
    console.log(total);
  }
}

operation("+", 1, 2, 3, 4);
