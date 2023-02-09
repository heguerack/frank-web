const bigName = document.querySelector('.name-change')
const myButton = document.querySelector('.my-button')

myButton.addEventListener('click', () => {
  if (bigName.innerHTML === 'Morocho') {
    bigName.innerHTML = 'Frank'
  } else {
    bigName.innerHTML = 'Morocho'
  }
})
