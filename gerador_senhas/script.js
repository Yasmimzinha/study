let sliderElement = document.querySelector('#slider')
let buttonElemente = document.querySelector('#button')

let sizePassword = document.querySelector('#valor')
let password = document.querySelector('#password')

let containerPassword = document.querySelector('#container-password')

let charset = 'abcfedghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789!@'
let novaSenha = ''

sizePassword.innerHTML = sliderElement.value

sliderElement.oninput = function () {
  sizePassword.innerHTML = this.value
}

function generatePassword() {
  let pass = ''

  for (let i = 0, n = charset.length; i < sliderElement.value; ++i) {
    pass += charset.charAt(Math.floor(Math.random() * n))
  }

  containerPassword.classList.remove('hide')
  password.innerHTML = pass
  novaSenha = pass
}

function copyPassword() {
  alert('Senha copiada!')
  navigator.clipboard.writeText(novaSenha)
}
