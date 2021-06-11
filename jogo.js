
var altura = 0
var largura = 0
var vidas = 1
var tempo = 50

var criaInimigoTempo = 1500

var nivel = window.location.search
nivel = nivel.replace('?', '')

if (nivel = 'facil') {
    criaInimigoTempo = 1500

}else if (nivel === 'normal') {
    criaInimigoTempo = 1000

} else if (nivel === 'dificil') {
    criaInimigoTempo = 750
}

function ajustaTamanhoPalcoJogo() {

    altura = window.innerHeight
    largura = window.innerWidth    

   console.log(largura, altura)

}

ajustaTamanhoPalcoJogo()

var cronometro = setInterval(function() {

    tempo -= 1

    if (tempo < 0) {
                
        window.location.href='vitoria.html'

    } else {
    document.getElementById('cronometro').innerHTML = tempo
    }

}, 1000)

function posicaoRandomica() {

//REMOVER O INIMIGO ANTERIOR CASO EXISTA

if (document.getElementById('inimigo')) {
    document.getElementById('inimigo').remove()

    if (vidas > 3) {
        window.location.href='fim_de_jogo.html'

    } else {
    document.getElementById('v' + vidas).src = 'heart/coracao_vazio.png'
    vidas++
    }
}

var posicaoX = Math.floor(Math.random() * largura) - 180
var posicaoY = Math.floor(Math.random() * altura) - 180

posicaoX = posicaoX < 0 ? 0 : posicaoX
posicaoY = posicaoY < 0 ? 0 : posicaoY

console.log(posicaoX, posicaoY)

// CRIAR O ELEMENTO HTML

var inimigo = document.createElement('img')

// TROCA DE INIMIGOS

inimigo.src = 'enemies/dragon/Attack3.png'

if (posicaoX >= 0 && posicaoX <= 250) {
    inimigo.src = 'enemies/medusa/Attack6.png'

}

if (posicaoX >= 251 && posicaoX <= 500) {
    inimigo.src = 'enemies/demon/Attack3.png'
}

if (posicaoX >= 501 && posicaoX <= 750) {
    inimigo.src = 'enemies/jinn_animation/Attack3.png'
}

inimigo.className = tamanhoAleatorio() + ' ' + ladoAleatorio()

inimigo.style.left = posicaoX + 'px'
inimigo.style.top = posicaoY + 'px'
inimigo.style.position = 'absolute'

inimigo.id = 'inimigo'

inimigo.onclick = function() {
    this.remove()
}

document.body.appendChild(inimigo)

console.log()

}

function tamanhoAleatorio() {
    var classe = Math.floor(Math.random() * 3)

    switch(classe) {
        
        case 0:
            return 'inimigo1'

        case 1:
            return 'inimigo2'

        case 2:
            return 'inimigo3'
    }
}

function ladoAleatorio() {
    var classe = Math.floor(Math.random() * 2)

    switch(classe) {
        
        case 0:
            return 'ladoA'

        case 1:
            return 'ladoB'
    }
}



