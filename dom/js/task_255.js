var elements = document.getElementsByTagName('p');

for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', func);
}

function func() {
    console.log('message');
}
