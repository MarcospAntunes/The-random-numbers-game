const numeroAleatorio = Math.floor(Math.random() * 1000 + 1)
const numeroDoUsuario = document.querySelector('#numeroDoUsuario')
const chutar = document.querySelector('#chutar')
const jogarNovamente = document.querySelector('#jogarNovamente')
const balao = document.querySelector('.balao')
const areaAnimacao = document.querySelector('#areaDaAnimacao')
const audioPato = document.querySelector('#audioPato')
const logo = document.querySelector('#logo')
const audioLogo = document.querySelector('#audioPatoLogo')

areaAnimacao.addEventListener('click', () => {
    audioPato.play()
})

logo.addEventListener('click', () => {
    audioLogo.play()
})

setTimeout(() => {
    numeroDoUsuario.removeAttribute('disabled')
    balao.style.display = 'block'
}, 5500)

function verificaNumero() {
    if(numeroDoUsuario.value != "") {
        chutar.removeAttribute('disabled')
        
        chutar.addEventListener('click', () => {
            console.log(numeroDoUsuario.value)
            if(numeroDoUsuario.value == numeroAleatorio) {
                balao.innerHTML = 'Acertou!'
                balao.style.marginLeft = '120px'

                audioPato.src = './assets/audio/quack-music.mp3'
                audioPato.play()
                chutar.setAttribute('disabled' ,'true')
                jogarNovamente.style.display = 'block'

            }

            if(numeroDoUsuario.value > numeroAleatorio) {
                balao.innerHTML = `O número é menor que ${numeroDoUsuario.value}!`
            } else if(numeroDoUsuario.value < numeroAleatorio) [
                balao.innerHTML = `O número é maior que ${numeroDoUsuario.value}!`
            ]
        }
        )
    } else {
        chutar.setAttribute('disabled' ,'true')
    }
}

function restart() {
    window.location.reload()
}