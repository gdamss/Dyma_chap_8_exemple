function operation(operateur, ...numbers) {
    let total = 0;
    if (operateur === "+") {
      for (let i = 0; i < numbers.length; i++) {
        total += numbers[i];
      }
      
    }
    return total;
  }
  
  const total = operation("+", 1, 2, 3, 4);
  console.log(total);