document.querySelector("#elem1").firstElementChild.style.color = "red";


const ul = document.querySelector('#elem2');
const descendants = ul.querySelectorAll('*');

for(let i = 0; i < descendants.length; i++) {
  descendants[i].textContent += '!';
}
