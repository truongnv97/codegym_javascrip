function getArray() {
  let value = +document.getElementById("number").value;
  let arr = Array();
  let sum = 0;
  for (let count = 0; count < value; count++) {
    arr[count] = Math.floor(Math.random() * 101);
  }
  return arr;
}

function isPrice(number) {
  if (number < 2) {
    return false;
  } else {
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false;
      }
    }
    return true;
  }
}
