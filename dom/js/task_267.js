const paragraphs = document.getElementsByTagName('p');

  for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].addEventListener('click', function() {
      this.textContent += '!';
    });
  }

// 2
const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const input3 = document.getElementById('input3');

input1.addEventListener('blur', function() {
  this.value = Math.pow(this.value, 2);
});

input2.addEventListener('blur', function() {
  this.value = Math.pow(this.value, 2);
});

input3.addEventListener('blur', function() {
  this.value = Math.pow(this.value, 2);
});