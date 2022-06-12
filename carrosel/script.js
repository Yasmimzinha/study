const controls = document.querySelectorAll('.control')
let currentItem = 0
const items = document.querySelectorAll('.item')

const maxItem = items.length

controls.forEach((control) => {
  control.addEventListener('click', () => {
    console.log('control clicked')
  })
})
