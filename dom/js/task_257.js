const btn = document.getElementById('myBtn');

btn.addEventListener('mouseenter', () => {
  console.log('Вы навели курсор на кнопку!');
});

btn.addEventListener('mouseleave', () => {
  console.log('Курсор ушел с кнопки!');
});
