const data = val => {
  form.current.value += val
}

const dot = val => {
  if (!form.current.value.includes('.')) form.current.value += val
}

const remove = () => {
  form.current.value = form.current.value.slice(0, -1)
  if (form.current.value.length === 1) form.current.placeholder = 0
}

const clearAll = () => {
  form.current.value = '';
  form.last.value = '';
}

const equal = () => {
  if (!form.current.value == '') {
    if (form.last.value == '') form.last.value = form.current.value
    form.current.value = eval(form.current.value)
  }
}


document.onkeypress = e => {
  let keyCode = e.keyCode;
  switch (keyCode) {
    case 48:
      data('0')
      break;
    case 49:
      data('1')
      break;
    case 50:
      data('2')
      break;
    case 51:
      data('3')
      break;
    case 52:
      data('4')
      break;
    case 53:
      data('5')
      break;
    case 54:
      data('6')
      break;
    case 55:
      data('7')
      break;
    case 56:
      data('8')
      break;
    case 57:
      data('9')
      break;
    case 13:
      equal()
      break;
    case 42:
      data('*')
      break;
    case 43:
      data('+')
      break;
    case 45:
      data('-')
      break;
    case 46:
      dot('.')
      break;
    case 47:
      data('/')
      break;
    case 37:
      data('%')
      break;
  }
};

document.onkeydown = e => {
  if (e.keyCode == 8) remove()
}

