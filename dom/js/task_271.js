var button = document.getElementById("myButton");
var value = parseInt(button.innerHTML);

function handleClick() {
  if (value < 10) {
    value++;
    button.innerHTML = value;
  } else {
    button.removeEventListener("click", handleClick);
  }
}

button.addEventListener("click", handleClick);