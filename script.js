let body = document.querySelector("body");
let tenis = document.querySelector(".imagem-projeto");

function mudarVisual(cor, imagem) {
  body.style.background = cor;
  tenis.src = imagem;
}
