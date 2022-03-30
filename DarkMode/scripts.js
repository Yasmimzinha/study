const body = document.querySelector("body")
const btn = document.querySelector(".darkmode")

function changeTheme() {
    body.classList.toggle("dark-theme")
}

btn.addEventListener('click', changeTheme)