var paragraphs = document.querySelectorAll('p');

for (var i = 0; i < paragraphs.length; i++) {
  paragraphs[i].setAttribute('data-num', i + 1);
}