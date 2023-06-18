// 1
function func1({ color, width, height }) {
  console.log('Color:', color);
  console.log('Width:', width);
  console.log('Height:', height);
}

func({ color: 'red', width: 400, height: 500 });

// 2
function func2({ color = 'black', width, height }) {
  console.log('Color:', color);
  console.log('Width:', width);
  console.log('Height:', height);
}

func({ color: 'red', width: 400, height: 500 });
