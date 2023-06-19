const btn = document.getElementById('btn');
const listItems = document.querySelectorAll('#list li');

btn.addEventListener('click', () => {
  listItems.forEach(item => {
    item.style.float = 'left';
  });
});
