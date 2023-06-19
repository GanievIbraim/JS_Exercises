  var inp = document.querySelector('#inp');

  inp.addEventListener('blur', function() {
    var value = inp.value;
    var digits = value.toString().split('');
    var sum = 0;

    for (var i = 0; i < digits.length; i++) {
      sum += parseInt(digits[i]);
    }

    console.log(sum);
  });


  // 2
  var btn = document.querySelector('#btn');
  var inp1 = document.querySelector('#inp1');
  var inp2 = document.querySelector('#inp2');
  var inp3 = document.querySelector('#inp3');

  btn.addEventListener('click', function() {
    var sum = parseInt(inp1.value) + parseInt(inp2.value);
    inp3.value = sum;
  });