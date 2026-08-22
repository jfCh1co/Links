const fundo = document.querySelector('.fundo-interativo');

// Guarda a posição real do mouse (Começa no meio da tela)
let mouseX = window.innerWidth / 2; 
let mouseY = window.innerHeight / 2;

// Guarda a posição atual do brilho (que vai tentar alcançar o mouse)
let brilhoX = window.innerWidth / 2;
let brilhoY = window.innerHeight / 2;

// Controla o "peso" do atraso (0.07 é uma ótima velocidade!)
const velocidade = 0.07; 

// Para Desktop: Segue o mouse
document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

// Para Mobile: Segue o dedo na tela
document.addEventListener('touchmove', (e) => {
  mouseX = e.touches[0].clientX;
  mouseY = e.touches[0].clientY;
}, { passive: true });

// O motor da animação
function animar() {
  // A mágica acontece aqui: o brilho avança uma porcentagem da distância até o mouse
  brilhoX += (mouseX - brilhoX) * velocidade;
  brilhoY += (mouseY - brilhoY) * velocidade;

  // Aplica as variáveis no CSS
  fundo.style.setProperty('--x', `${brilhoX}px`);
  fundo.style.setProperty('--y', `${brilhoY}px`);

  // Roda a função novamente no próximo frame de tela
  requestAnimationFrame(animar);
}

// Dá o "play" na animação
animar();