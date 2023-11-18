let img = new Image();
img.src = './assets/duckySpriteAndando.png';
img.onload = function() {
    init();
}

let canvas = document.querySelector('canvas');
let contexto = canvas.getContext('2d');
const escala = 5.5;
const largura = 32;
const altura = 42;
const escalaLargura = escala * largura;
const escalaAltura = escala * altura;

function desenhaQuadro(posX, posY, canvasX, canvasY) {
    contexto.drawImage(img, posX*largura, posY*altura, largura, altura, canvasX, canvasY, escalaLargura, escalaAltura);
}

let imagens = [0, 1, 2, 3, 4, 5, 0];
let indiceImagem = 0;
let contaQuadro = 0;
let direcaoAtual = 0;

function passo() {
    contaQuadro++;
    if(contaQuadro < 10) {
        window.requestAnimationFrame(passo);
        return;
    }

    contaQuadro = 0;
    contexto.clearRect(0, 0, canvas.width, canvas.height);
    desenhaQuadro(imagens[indiceImagem], direcaoAtual, escalaLargura - 120 , -42);
    indiceImagem++;
    if(indiceImagem >= imagens.length){
        indiceImagem = 0;
        direcaoAtual++;
    }
        if(direcaoAtual >= 2) {
            direcaoAtual = 1;
        } 
   
    window.requestAnimationFrame(passo);
}

function init() {
    window.requestAnimationFrame(passo);
}

setTimeout(() => {
    img.src = './assets/duckySpriteIdle.png';
}, 5000)