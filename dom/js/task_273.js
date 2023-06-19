var lis = document.getElementsByTagName("li");

function handleClick(event) {
  var currentValue = parseInt(event.target.innerHTML);
  event.target.innerHTML = currentValue + 1;
}

for (var i = 0; i < lis.length; i++) {
  lis[i].addEventListener("click", handleClick);
}