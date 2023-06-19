var paragraphs = document.getElementsByTagName("p");

function handleClick(event) {
  event.target.removeEventListener("click", handleClick);
  event.target.innerHTML += "!";
}

for (var i = 0; i < paragraphs.length; i++) {
  paragraphs[i].addEventListener("click", handleClick);
}