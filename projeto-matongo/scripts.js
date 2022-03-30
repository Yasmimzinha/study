const form = document.querySelector('#form')
const pandaName = document.querySelector('#pandaName')
const pandasList = document.querySelector('#pandasList')
const pandasArr = []

form.addEventListener('submit', (e) => {
    e.preventDefault()

    pandasList.innerHTML = ''

    pandasArr.push(pandaName.value)

    pandasArr.forEach(panduxo => {
        const item = document.createElement('li');
        item.innerHTML = panduxo;

        pandasList.appendChild(item)
    })

    e.target.reset()

    pandaName.focus()
})