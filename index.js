// Code your solutions in this file

const writeCards = (names, name) => {
  let newArr = []
  for (let i = 0; i < names.length; i++) {
    newArr.push(`Thank you, ${names[i]}, for the wonderful ${name} gift!`)
  }
  return newArr
}

const countDown = (num) => {
  let counter = num;
  while ( counter >= 0) {
    console.log(counter--)
  }
}