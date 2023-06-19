


  const input1 = document.getElementById('input1');
  const input2 = document.getElementById('input2');
  const input3 = document.getElementById('input3');
  const button = document.getElementById('myButton');
  const resultEl = document.getElementById('result');

  button.addEventListener('click', function() {
    const sum = parseFloat(input1.value) + parseFloat(input2.value) + parseFloat(input3.value);
    resultEl.textContent = 'Сумма: ' + sum;
  });

